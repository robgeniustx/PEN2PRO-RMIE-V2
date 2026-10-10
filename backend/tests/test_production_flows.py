import os
import sys
import tempfile
import unittest
from pathlib import Path
from unittest.mock import patch

BACKEND_ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(BACKEND_ROOT))

from fastapi.testclient import TestClient  # noqa: E402


class ProductionFlowsTest(unittest.TestCase):
    def setUp(self):
        self.temp_dir = tempfile.TemporaryDirectory()
        self.env = {
            "PEN2PRO_DB_PATH": str(Path(self.temp_dir.name) / "test.db"),
            "ALLOW_TEST_TIER_ACCESS": "true",
            "ADMIN_ACCESS_KEY": "owner-key",
            "ENVIRONMENT": "development",
        }
        self.patch = patch.dict(os.environ, self.env)
        self.patch.start()
        from main import app

        self.client = TestClient(app)

    def tearDown(self):
        self.patch.stop()
        self.temp_dir.cleanup()

    def signup(self, email="u@example.com", password="password123"):
        r = self.client.post("/api/auth/register", json={"name": "Test", "email": email, "password": password})
        self.assertEqual(r.status_code, 200, r.text)
        return {"Authorization": f"Bearer {r.json()['access_token']}"}

    # ── accounts and plan unlock ────────────────────────────────────────────
    def test_register_validation_and_duplicates(self):
        self.signup("a@example.com")
        self.assertEqual(self.client.post("/api/auth/register", json={"name": "A", "email": "a@example.com", "password": "password123"}).status_code, 409)
        self.assertEqual(self.client.post("/api/auth/register", json={"name": "A", "email": "not-an-email", "password": "password123"}).status_code, 422)
        self.assertEqual(self.client.post("/api/auth/register", json={"name": "A", "email": "b@example.com", "password": "short"}).status_code, 422)

    def test_login_and_me(self):
        self.signup("a@example.com")
        bad = self.client.post("/api/auth/login", json={"email": "a@example.com", "password": "wrong-password"})
        self.assertEqual(bad.status_code, 401)
        ok = self.client.post("/api/auth/login", json={"email": "a@example.com", "password": "password123"})
        me = self.client.get("/api/auth/me", headers={"Authorization": f"Bearer {ok.json()['access_token']}"})
        self.assertEqual(me.json()["tier"], "free")

    def test_paid_checkout_unlocks_plan_and_never_downgrades(self):
        h = self.signup()
        claim = self.client.post("/api/auth/claim-purchase", json={"session_id": "test_founders"}, headers=h)
        self.assertEqual(claim.json()["tier"], "founders")
        later = self.client.post("/api/auth/claim-purchase", json={"session_id": "test_pro_later"}, headers=h)
        self.assertEqual(later.json()["tier"], "founders")

    def test_unpaid_or_unknown_checkout_is_rejected(self):
        h = self.signup()
        for sid in ("cs_made_up", "garbage", "test_notatier"):
            self.assertEqual(self.client.post("/api/auth/claim-purchase", json={"session_id": sid}, headers=h).status_code, 402)

    def test_purchase_cannot_be_claimed_by_a_second_account(self):
        first = self.signup("first@example.com")
        second = self.signup("second@example.com")
        self.assertEqual(self.client.post("/api/auth/claim-purchase", json={"session_id": "test_pro"}, headers=first).status_code, 200)
        self.assertEqual(self.client.post("/api/auth/claim-purchase", json={"session_id": "test_pro"}, headers=second).status_code, 409)

    def test_webhook_unlocks_plan_without_visiting_success_page(self):
        from app import store
        from app.services import stripe_service

        self.signup("buyer@example.com")
        event = {"data": {"object": {
            "id": "cs_test_webhook", "metadata": {"tier": "elite"}, "customer_email": "buyer@example.com",
            "payment_status": "paid", "mode": "subscription", "subscription": "sub_1", "amount_total": 49900,
        }}}
        stripe_service.handle_checkout_completed(event)
        self.assertEqual(store.get_user("buyer@example.com")["tier"], "elite")
        stripe_service.handle_subscription_deleted({"data": {"object": {"id": "sub_1"}}})
        self.assertEqual(store.get_user("buyer@example.com")["tier"], "free")

    # ── saved roadmaps ──────────────────────────────────────────────────────
    def test_roadmaps_save_list_open_delete_and_stay_private(self):
        a, b = self.signup("a@example.com"), self.signup("b@example.com")
        saved = self.client.post("/api/roadmaps", json={"kind": "blueprint", "title": "Cleaning", "data": {"x": 1}}, headers=a)
        rid = saved.json()["id"]
        self.assertEqual(len(self.client.get("/api/roadmaps", headers=a).json()["roadmaps"]), 1)
        self.assertEqual(self.client.get(f"/api/roadmaps/{rid}", headers=a).json()["data"], {"x": 1})
        self.assertEqual(self.client.get(f"/api/roadmaps/{rid}", headers=b).status_code, 404)
        self.assertEqual(self.client.delete(f"/api/roadmaps/{rid}", headers=b).status_code, 404)
        self.assertEqual(self.client.delete(f"/api/roadmaps/{rid}", headers=a).status_code, 200)
        self.assertEqual(self.client.post("/api/roadmaps", json={"kind": "blueprint", "title": "x", "data": {}}).status_code, 401)

    def test_data_survives_a_restart(self):
        from app import store

        self.signup("keep@example.com")
        store._READY.clear()  # simulate a fresh process opening the same database file
        self.assertIsNotNone(store.get_user("keep@example.com"))

    # ── leads and rate limits ───────────────────────────────────────────────
    def test_starter_lead_is_saved_and_visible_to_admin(self):
        r = self.client.post("/api/starter/capture", json={"name": "N", "email": "n@example.com", "business_idea": "cleaning", "category": "service"})
        self.assertEqual(r.status_code, 200)
        leads = self.client.get("/api/admin/starter-leads", headers={"X-Admin-Key": "owner-key"}).json()["leads"]
        self.assertEqual(leads[0]["email"], "n@example.com")
        self.assertEqual(self.client.post("/api/starter/capture", json={"name": "N", "email": "bad"}).status_code, 422)

    def test_roadmap_generation_is_rate_limited(self):
        with patch.dict(os.environ, {"RATE_LIMIT_BLUEPRINT_PER_HOUR": "2"}):
            h = {"x-forwarded-for": "203.0.113.77"}
            codes = [self.client.post("/api/blueprints/generate", json={"business_idea": "cleaning"}, headers=h).status_code for _ in range(3)]
        self.assertEqual(codes, [200, 200, 429])

    # ── strategist ──────────────────────────────────────────────────────────
    def test_strategist_plan_is_gated_and_math_is_right(self):
        body = {"occupation": "pressure-washing", "target": 10000, "price": 500}
        self.assertEqual(self.client.post("/api/strategist/plan", json=body).status_code, 402)
        plan = self.client.post("/api/strategist/plan?session_id=preview", json=body).json()
        self.assertEqual(plan["math"]["units_needed"], 20)
        self.assertEqual(len(plan["weeks"]), 12)
        self.assertEqual(plan["weeks"][-1]["targets"]["monthly_run_rate"], 10000)
        self.assertTrue(all(w["proof"] and w["if_behind"] for w in plan["weeks"]))

    def test_strategist_flags_capacity_problems(self):
        plan = self.client.post("/api/strategist/plan?session_id=preview", json={"occupation": "web-design", "hours_per_week": 10}).json()
        self.assertTrue(plan["math"]["over_capacity"])
        self.assertEqual(plan["flags"][0]["level"], "high")

    def test_account_with_strategist_purchase_or_elite_opens_plan_on_any_device(self):
        buyer = self.signup("buyer@example.com")
        self.assertEqual(self.client.get("/api/strategist/playbook", headers=buyer).status_code, 402)
        self.client.post("/api/auth/claim-purchase", json={"session_id": "test_strategist"}, headers=buyer)
        self.assertEqual(self.client.get("/api/strategist/playbook", headers=buyer).status_code, 200)
        elite = self.signup("elite@example.com")
        self.client.post("/api/auth/claim-purchase", json={"session_id": "test_elite"}, headers=elite)
        self.assertEqual(self.client.get("/api/strategist/playbook", headers=elite).status_code, 200)

    def test_refine_requires_a_paid_plan(self):
        free = self.signup("free@example.com")
        r = self.client.post("/api/roadmaps/refine", json={"roadmap": {}, "instruction": "make it better"}, headers=free)
        self.assertEqual(r.status_code, 403)

    # ── admin ───────────────────────────────────────────────────────────────
    def test_admin_requires_key_and_reports_real_numbers(self):
        self.signup("a@example.com")
        self.assertEqual(self.client.get("/api/admin/metrics").status_code, 403)
        self.assertEqual(self.client.get("/api/admin/metrics", headers={"X-Admin-Key": "wrong"}).status_code, 403)
        metrics = self.client.get("/api/admin/metrics", headers={"X-Admin-Key": "owner-key"}).json()
        self.assertEqual(metrics["total_users"], 1)
        self.assertEqual(metrics["active_tier_counts"]["free"], 1)

    # ── production behavior ─────────────────────────────────────────────────
    def test_production_hides_demo_data_and_never_serves_a_canned_roadmap(self):
        with patch.dict(os.environ, {"ENVIRONMENT": "production", "JWT_SECRET_KEY": "x" * 40, "ADMIN_DASHBOARD_ENABLED": "true"}):
            self.assertEqual(self.client.get("/api/crm/contacts").status_code, 501)
            self.assertEqual(self.client.post("/api/domain/search", json={"business_idea": "x"}).status_code, 501)
            self.assertEqual(self.client.post("/api/blueprints/generate", json={"business_idea": "x"}, headers={"x-forwarded-for": "198.51.100.9"}).status_code, 503)
            self.assertEqual(self.client.get("/api/admin/metrics", headers={"X-Admin-Key": "owner-key"}).json()["total_users"], 0)

    def test_voice_agent_data_is_owner_only_but_webhooks_stay_open(self):
        with patch.dict(os.environ, {"ENVIRONMENT": "production", "JWT_SECRET_KEY": "x" * 40}):
            self.assertEqual(self.client.get("/api/voice-agent/calls").status_code, 403)
            self.assertEqual(self.client.get("/api/voice-agent/calls", headers={"X-Admin-Key": "owner-key"}).status_code, 200)
            self.assertNotEqual(self.client.post("/api/voice-agent/webhook/elevenlabs", content=b"{}").status_code, 403)

    def test_production_refuses_a_default_jwt_secret(self):
        with patch.dict(os.environ, {"ENVIRONMENT": "production", "JWT_SECRET_KEY": "change_me"}):
            with self.assertRaises(RuntimeError):
                self.client.post("/api/auth/register", json={"name": "A", "email": "z@example.com", "password": "password123"})


if __name__ == "__main__":
    unittest.main()
