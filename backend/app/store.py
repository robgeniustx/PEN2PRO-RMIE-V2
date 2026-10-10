"""Small durable store for accounts, purchases, saved roadmaps and starter leads.

Uses SQLite from the standard library. Set PEN2PRO_DB_PATH to a file on a persistent
disk (on Render, a mounted disk) so data survives restarts and deploys. Without a
persistent disk the file is recreated empty on each deploy.
"""
import json
import os
import sqlite3
import threading
from contextlib import contextmanager
from datetime import datetime, timezone
from pathlib import Path
from typing import Any, Dict, List, Optional

_LOCK = threading.Lock()
_READY: set = set()

SCHEMA = """
CREATE TABLE IF NOT EXISTS users (
    email TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    password_hash TEXT NOT NULL,
    tier TEXT NOT NULL DEFAULT 'free',
    created_at TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS purchases (
    session_id TEXT PRIMARY KEY,
    tier TEXT NOT NULL,
    email TEXT,
    claimed_by TEXT,
    subscription_id TEXT,
    amount_total INTEGER,
    created_at TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS roadmaps (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT NOT NULL,
    kind TEXT NOT NULL,
    title TEXT NOT NULL,
    data TEXT NOT NULL,
    created_at TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_roadmaps_email ON roadmaps(email);
CREATE TABLE IF NOT EXISTS module_records (
    owner TEXT NOT NULL,
    module TEXT NOT NULL,
    rid TEXT NOT NULL,
    data TEXT NOT NULL,
    created_at TEXT NOT NULL,
    PRIMARY KEY (owner, module, rid)
);
CREATE TABLE IF NOT EXISTS starter_leads (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    business_idea TEXT,
    category TEXT,
    created_at TEXT NOT NULL
);
"""

PAID_TIERS = {"pro", "elite", "founders"}
MAX_ROADMAPS_PER_USER = 50
MAX_ROADMAP_BYTES = 300_000


def db_path() -> Path:
    default = Path(__file__).resolve().parents[1] / "data" / "pen2pro.db"
    return Path(os.getenv("PEN2PRO_DB_PATH") or default)


def _now() -> str:
    return datetime.now(timezone.utc).isoformat()


@contextmanager
def _conn():
    path = db_path()
    path.parent.mkdir(parents=True, exist_ok=True)
    conn = sqlite3.connect(str(path), timeout=10)
    conn.row_factory = sqlite3.Row
    try:
        with _LOCK:
            if str(path) not in _READY:
                conn.executescript(SCHEMA)
                _READY.add(str(path))
            yield conn
            conn.commit()
    finally:
        conn.close()


def _row(r: Optional[sqlite3.Row]) -> Optional[Dict[str, Any]]:
    return dict(r) if r else None


# ── users ────────────────────────────────────────────────────────────────────
def create_user(email: str, name: str, password_hash: str) -> bool:
    """Returns False if the email already exists."""
    with _conn() as c:
        try:
            c.execute(
                "INSERT INTO users(email, name, password_hash, tier, created_at) VALUES (?,?,?,?,?)",
                (email, name, password_hash, "free", _now()),
            )
            return True
        except sqlite3.IntegrityError:
            return False


def get_user(email: str) -> Optional[Dict[str, Any]]:
    with _conn() as c:
        return _row(c.execute("SELECT * FROM users WHERE email=?", (email,)).fetchone())


TIER_RANK = {"free": 0, "pro": 1, "elite": 2, "founders": 3}


def set_tier(email: str, tier: str) -> bool:
    with _conn() as c:
        return c.execute("UPDATE users SET tier=? WHERE email=?", (tier, email)).rowcount > 0


def upgrade_tier(email: str, tier: str) -> bool:
    """Raise a user's plan, never lower it (so buying Pro cannot downgrade Founders)."""
    user = get_user(email)
    if not user or TIER_RANK.get(tier, 0) <= TIER_RANK.get(user["tier"], 0):
        return False
    return set_tier(email, tier)


def count_users() -> int:
    with _conn() as c:
        return c.execute("SELECT COUNT(*) FROM users").fetchone()[0]


def tier_counts() -> Dict[str, int]:
    counts = {"free": 0, "pro": 0, "elite": 0, "founders": 0}
    with _conn() as c:
        for r in c.execute("SELECT tier, COUNT(*) n FROM users GROUP BY tier"):
            counts[r["tier"]] = r["n"]
    return counts


# ── purchases ────────────────────────────────────────────────────────────────
def record_purchase(session_id: str, tier: str, email: Optional[str], subscription_id: Optional[str] = None,
                    amount_total: Optional[int] = None) -> None:
    with _conn() as c:
        c.execute(
            "INSERT OR IGNORE INTO purchases(session_id, tier, email, subscription_id, amount_total, created_at) "
            "VALUES (?,?,?,?,?,?)",
            (session_id, tier, (email or "").lower() or None, subscription_id, amount_total, _now()),
        )


def get_purchase(session_id: str) -> Optional[Dict[str, Any]]:
    with _conn() as c:
        return _row(c.execute("SELECT * FROM purchases WHERE session_id=?", (session_id,)).fetchone())


def claim_purchase(session_id: str, email: str) -> str:
    """Attach a purchase to an account. Returns 'ok', 'already_yours' or 'taken'."""
    with _conn() as c:
        r = c.execute("SELECT claimed_by FROM purchases WHERE session_id=?", (session_id,)).fetchone()
        if r is None:
            return "missing"
        if r["claimed_by"] and r["claimed_by"] != email:
            return "taken"
        if r["claimed_by"] == email:
            return "already_yours"
        c.execute("UPDATE purchases SET claimed_by=? WHERE session_id=?", (email, session_id))
        return "ok"


def purchase_by_subscription(subscription_id: str) -> Optional[Dict[str, Any]]:
    with _conn() as c:
        return _row(c.execute("SELECT * FROM purchases WHERE subscription_id=?", (subscription_id,)).fetchone())


def has_purchase(email: str, tier: str) -> bool:
    with _conn() as c:
        return c.execute("SELECT 1 FROM purchases WHERE claimed_by=? AND tier=? LIMIT 1", (email, tier)).fetchone() is not None


def revenue_total() -> float:
    with _conn() as c:
        n = c.execute("SELECT COALESCE(SUM(amount_total),0) FROM purchases").fetchone()[0]
    return round(n / 100.0, 2)


def completed_checkouts() -> int:
    with _conn() as c:
        return c.execute("SELECT COUNT(*) FROM purchases").fetchone()[0]


# ── roadmaps ─────────────────────────────────────────────────────────────────
class StoreLimit(Exception):
    pass


def save_roadmap(email: str, kind: str, title: str, data: Any) -> int:
    payload = json.dumps(data, separators=(",", ":"))
    if len(payload.encode()) > MAX_ROADMAP_BYTES:
        raise StoreLimit("Roadmap is too large to save.")
    with _conn() as c:
        n = c.execute("SELECT COUNT(*) FROM roadmaps WHERE email=?", (email,)).fetchone()[0]
        if n >= MAX_ROADMAPS_PER_USER:
            raise StoreLimit(f"You can save up to {MAX_ROADMAPS_PER_USER} roadmaps. Delete one to save another.")
        cur = c.execute(
            "INSERT INTO roadmaps(email, kind, title, data, created_at) VALUES (?,?,?,?,?)",
            (email, kind, title[:200], payload, _now()),
        )
        return cur.lastrowid


def list_roadmaps(email: str) -> List[Dict[str, Any]]:
    with _conn() as c:
        rows = c.execute(
            "SELECT id, kind, title, created_at FROM roadmaps WHERE email=? ORDER BY id DESC", (email,)
        ).fetchall()
    return [dict(r) for r in rows]


def get_roadmap(email: str, roadmap_id: int) -> Optional[Dict[str, Any]]:
    with _conn() as c:
        r = c.execute("SELECT * FROM roadmaps WHERE id=? AND email=?", (roadmap_id, email)).fetchone()
    if not r:
        return None
    out = dict(r)
    out["data"] = json.loads(out["data"])
    return out


def delete_roadmap(email: str, roadmap_id: int) -> bool:
    with _conn() as c:
        return c.execute("DELETE FROM roadmaps WHERE id=? AND email=?", (roadmap_id, email)).rowcount > 0


def count_roadmaps() -> int:
    with _conn() as c:
        return c.execute("SELECT COUNT(*) FROM roadmaps").fetchone()[0]


# ── starter leads ────────────────────────────────────────────────────────────
def add_starter_lead(name: str, email: str, business_idea: str, category: str) -> None:
    with _conn() as c:
        c.execute(
            "INSERT INTO starter_leads(name, email, business_idea, category, created_at) VALUES (?,?,?,?,?)",
            (name[:120], email.lower()[:200], business_idea[:1000], category[:120], _now()),
        )


def list_starter_leads(limit: int = 200) -> List[Dict[str, Any]]:
    with _conn() as c:
        rows = c.execute("SELECT * FROM starter_leads ORDER BY id DESC LIMIT ?", (limit,)).fetchall()
    return [dict(r) for r in rows]


def count_starter_leads() -> int:
    with _conn() as c:
        return c.execute("SELECT COUNT(*) FROM starter_leads").fetchone()[0]


# ── dashboard module records (per user) ──────────────────────────────────────
MAX_MODULE_RECORDS = 2000


def list_module_records(owner: str, module: str) -> List[Dict[str, Any]]:
    with _conn() as c:
        rows = c.execute(
            "SELECT data FROM module_records WHERE owner=? AND module=? ORDER BY created_at DESC", (owner, module)
        ).fetchall()
    return [json.loads(r["data"]) for r in rows]


def insert_module_record(owner: str, module: str, record: Dict[str, Any]) -> None:
    payload = json.dumps(record, separators=(",", ":"))
    if len(payload) > 20_000:
        raise StoreLimit("That record is too large.")
    with _conn() as c:
        n = c.execute("SELECT COUNT(*) FROM module_records WHERE owner=? AND module=?", (owner, module)).fetchone()[0]
        if n >= MAX_MODULE_RECORDS:
            raise StoreLimit("This list is full. Delete some records first.")
        c.execute(
            "INSERT INTO module_records(owner, module, rid, data, created_at) VALUES (?,?,?,?,?)",
            (owner, module, str(record["id"]), payload, record.get("created_at") or _now()),
        )


def update_module_record(owner: str, module: str, rid: str, patch: Dict[str, Any]) -> Optional[Dict[str, Any]]:
    with _conn() as c:
        r = c.execute("SELECT data FROM module_records WHERE owner=? AND module=? AND rid=?", (owner, module, rid)).fetchone()
        if not r:
            return None
        merged = {**json.loads(r["data"]), **patch, "id": rid, "updated_at": _now()}
        c.execute("UPDATE module_records SET data=? WHERE owner=? AND module=? AND rid=?",
                  (json.dumps(merged, separators=(",", ":")), owner, module, rid))
        return merged


def delete_module_record(owner: str, module: str, rid: str) -> bool:
    with _conn() as c:
        return c.execute("DELETE FROM module_records WHERE owner=? AND module=? AND rid=?", (owner, module, rid)).rowcount > 0
