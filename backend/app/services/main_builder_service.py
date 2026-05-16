from __future__ import annotations

from dataclasses import dataclass
from typing import Any


TRIGGER_TYPES = {"manual_request", "github_issue", "failed_test"}

AREA_FILE_HINTS = {
    "frontend": [
        "frontend/src/routes/AppRoutes.jsx",
        "frontend/src/pages/",
        "frontend/src/components/",
        "frontend/src/styles/",
    ],
    "backend": [
        "backend/main.py",
        "backend/app/routes/",
        "backend/app/services/",
        "backend/app/schemas/",
    ],
    "agents": [
        "backend/app/agents/",
        "backend/app/agents/registry.py",
        "backend/app/routes/agents.py",
        "backend/app/services/",
    ],
    "api": [
        "backend/main.py",
        "backend/app/routes/",
        "backend/app/services/",
        "backend/app/schemas/",
    ],
    "waitlist": [
        "backend/app/routes/waitlist.py",
        "frontend/src/pages/WaitlistPage.jsx",
        "frontend/src/components/",
    ],
    "admin": [
        "backend/app/routes/admin.py",
        "frontend/src/pages/AdminPage.jsx",
        "backend/app/security.py",
    ],
    "security": [
        "backend/app/security.py",
        "backend/app/routes/admin.py",
        "backend/app/routes/auth.py",
        ".env.example",
    ],
    "deployment": [
        "render.yaml",
        "backend/requirements.txt",
        "frontend/package.json",
        "docs/RENDER_DEPLOYMENT.md",
    ],
}

SECURITY_CHECKS = [
    "Do not hardcode API keys, admin keys, Stripe keys, MCP tokens, or database credentials.",
    "Protect admin-only endpoints with ADMIN_ACCESS_KEY or real auth before exposing production data.",
    "Validate public API payloads and reject malformed emails, empty commands, and unsafe inputs.",
    "Avoid executing shell commands supplied by users or external systems through API requests.",
    "Preserve existing user changes in the git worktree and avoid destructive git commands.",
]

DEFAULT_TEST_COMMANDS = [
    "python -m compileall backend/app",
    "cd frontend && npm run build",
]


@dataclass
class BuilderRequest:
    trigger_type: str
    request: str
    source_id: str | None = None
    target_area: str | None = None
    failing_test_output: str | None = None
    repository_context: str | None = None
    priority: str = "normal"


def normalize_builder_request(payload: dict[str, Any]) -> BuilderRequest:
    trigger_type = str(payload.get("trigger_type") or "manual_request").strip().lower()
    request_text = (
        payload.get("request")
        or payload.get("command_text")
        or payload.get("issue_body")
        or payload.get("title")
        or ""
    )
    return BuilderRequest(
        trigger_type=trigger_type,
        request=str(request_text).strip(),
        source_id=_optional_string(payload.get("source_id") or payload.get("issue_url") or payload.get("test_name")),
        target_area=_optional_string(payload.get("target_area")),
        failing_test_output=_optional_string(payload.get("failing_test_output") or payload.get("test_output")),
        repository_context=_optional_string(payload.get("repository_context")),
        priority=str(payload.get("priority") or "normal").strip().lower(),
    )


def validate_builder_payload(payload: dict[str, Any]) -> bool:
    request = normalize_builder_request(payload)
    return request.trigger_type in TRIGGER_TYPES and len(request.request) >= 8


def generate_main_builder_work_order(payload: dict[str, Any]) -> dict[str, Any]:
    request = normalize_builder_request(payload)
    area = classify_area(request)
    objective = build_objective(request)
    return {
        "agent": "main_builder",
        "role": "Builds and repairs PEN2PRO app features from manual requests, GitHub issues, and failed tests.",
        "status": "work_order_ready",
        "trigger": {
            "type": request.trigger_type,
            "source_id": request.source_id,
            "priority": request.priority,
        },
        "objective": objective,
        "classification": {
            "target_area": area,
            "risk_level": classify_risk(request, area),
            "requires_human_approval": requires_human_approval(request),
        },
        "likely_files": likely_files(area, request),
        "implementation_plan": implementation_plan(request, area),
        "verification_plan": verification_plan(request, area),
        "security_checks": SECURITY_CHECKS,
        "deploy_notes": deploy_notes(area),
        "handoff": {
            "builder_next_action": "Open the listed files, make the smallest production-safe patch, run verification, and report files changed plus deploy impact.",
            "qa_next_action": "Run route/API smoke checks for the touched area and compare against the expected user flow.",
            "security_next_action": "Review auth boundaries, secret handling, and unsafe command execution risk before deployment.",
        },
    }


def classify_area(request: BuilderRequest) -> str:
    text = " ".join(
        part
        for part in [
            request.target_area or "",
            request.request,
            request.failing_test_output or "",
            request.repository_context or "",
        ]
        if part
    ).lower()
    keyword_map = {
        "waitlist": "waitlist",
        "admin": "admin",
        "login": "frontend",
        "signin": "frontend",
        "route": "frontend",
        "nav": "frontend",
        "page": "frontend",
        "api": "api",
        "endpoint": "api",
        "fastapi": "backend",
        "database": "backend",
        "agent": "agents",
        "mcp": "agents",
        "security": "security",
        "auth": "security",
        "deploy": "deployment",
        "render": "deployment",
        "build failed": "deployment",
        "npm run build": "frontend",
        "pytest": "backend",
    }
    for keyword, area in keyword_map.items():
        if keyword in text:
            return area
    return "full_stack"


def build_objective(request: BuilderRequest) -> str:
    if request.trigger_type == "failed_test":
        return f"Repair the failing PEN2PRO test or regression: {request.request}"
    if request.trigger_type == "github_issue":
        return f"Resolve the GitHub issue for PEN2PRO: {request.request}"
    return f"Implement the requested PEN2PRO app change: {request.request}"


def classify_risk(request: BuilderRequest, area: str) -> str:
    text = f"{request.request} {request.failing_test_output or ''}".lower()
    high_risk_terms = ["auth", "admin", "payment", "stripe", "database", "delete", "security", "secret"]
    if area in {"security", "admin", "deployment"} or any(term in text for term in high_risk_terms):
        return "high"
    if request.trigger_type == "failed_test" or area in {"backend", "api", "agents"}:
        return "medium"
    return "low"


def requires_human_approval(request: BuilderRequest) -> bool:
    text = request.request.lower()
    approval_terms = [
        "delete production",
        "drop table",
        "reset database",
        "rotate secret",
        "charge customer",
        "send email to all",
        "push to production",
    ]
    return any(term in text for term in approval_terms)


def likely_files(area: str, request: BuilderRequest) -> list[str]:
    files = AREA_FILE_HINTS.get(area, [])
    if area == "full_stack":
        files = [
            "frontend/src/routes/AppRoutes.jsx",
            "frontend/src/pages/",
            "frontend/src/components/",
            "backend/main.py",
            "backend/app/routes/",
            "backend/app/services/",
        ]
    if request.trigger_type == "failed_test":
        files = files + ["tests/e2e/pen2pro-smoke.spec.js"]
    return sorted(set(files))


def implementation_plan(request: BuilderRequest, area: str) -> list[str]:
    steps = [
        "Reproduce or inspect the request using the current repository state.",
        "Identify the smallest route, component, service, schema, or config files needed for the fix.",
        "Patch the implementation using existing PEN2PRO patterns and preserve unrelated user changes.",
        "Add or update a focused test/check when the behavior is user-facing, API-facing, or regression-prone.",
    ]
    if request.trigger_type == "failed_test":
        steps.insert(1, "Use the failing test output to isolate the regression before editing code.")
    if area == "frontend":
        steps.append("Verify desktop and mobile navigation, CTA routing, loading states, and empty/error states.")
    if area in {"backend", "api", "agents"}:
        steps.append("Verify request validation, response shape, tier enforcement, and error responses.")
    if area in {"security", "admin"}:
        steps.append("Confirm admin-only data is protected and no sensitive values appear in responses or logs.")
    return steps


def verification_plan(request: BuilderRequest, area: str) -> dict[str, Any]:
    commands = list(DEFAULT_TEST_COMMANDS)
    if area in {"backend", "api", "agents", "security", "admin", "full_stack"}:
        commands.insert(0, "python -m compileall backend/app backend/main.py")
    if request.trigger_type == "failed_test" and request.source_id:
        commands.append(f"Re-run failing test: {request.source_id}")
    return {
        "commands": sorted(set(commands), key=commands.index),
        "manual_checks": manual_checks(area),
        "success_criteria": [
            "The requested feature or repair works through the intended user/API flow.",
            "No blank page, broken route, unhandled exception, or dead CTA is introduced.",
            "Verification commands complete or any remaining failure is documented with the exact blocker.",
        ],
    }


def manual_checks(area: str) -> list[str]:
    checks = ["Confirm changed routes or endpoints return the expected content/status."]
    if area in {"frontend", "full_stack"}:
        checks.extend([
            "Check responsive layout at mobile and desktop widths.",
            "Click every CTA touched by the change.",
        ])
    if area in {"admin", "security"}:
        checks.append("Confirm protected admin data is unavailable without the configured access key.")
    if area == "deployment":
        checks.append("Confirm Render build/start commands and required environment variables match the code.")
    return checks


def deploy_notes(area: str) -> dict[str, Any]:
    return {
        "environment_variables_to_review": [
            "FRONTEND_URL",
            "DATABASE_URL",
            "OPENAI_API_KEY",
            "ADMIN_ACCESS_KEY",
            "SENTRY_DSN",
        ],
        "render_steps": [
            "Run backend compile checks and frontend build locally.",
            "Commit the verified patch.",
            "Deploy backend and frontend services on Render.",
            "Check /api/health and the touched frontend routes after deploy.",
        ],
        "rollback_note": f"If the {area} change causes production errors, revert the patch commit and redeploy the previous Render version.",
    }


def _optional_string(value: Any) -> str | None:
    if value is None:
        return None
    text = str(value).strip()
    return text or None
