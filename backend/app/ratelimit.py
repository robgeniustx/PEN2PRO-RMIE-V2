"""Tiny in-process rate limiter. Protects the paid AI endpoints from abuse. Per-instance, resets on restart."""
import time
from collections import defaultdict, deque
from typing import Deque, Dict

from fastapi import HTTPException, Request

_HITS: Dict[str, Deque[float]] = defaultdict(deque)


def client_ip(request: Request) -> str:
    forwarded = request.headers.get("x-forwarded-for", "")
    return (forwarded.split(",")[0].strip() if forwarded else (request.client.host if request.client else "unknown")) or "unknown"


def check(key: str, limit: int, window_seconds: int = 3600) -> None:
    now = time.monotonic()
    hits = _HITS[key]
    while hits and now - hits[0] > window_seconds:
        hits.popleft()
    if len(hits) >= limit:
        raise HTTPException(status_code=429, detail="You have reached the limit for now. Please try again later.")
    hits.append(now)
