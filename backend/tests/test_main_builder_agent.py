import sys
import unittest
from pathlib import Path


BACKEND_ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(BACKEND_ROOT))

from app.agents.registry import get_agent  # noqa: E402
from app.services.main_builder_service import validate_builder_payload  # noqa: E402


class MainBuilderAgentTest(unittest.TestCase):
    def test_agent_is_registered(self):
        agent = get_agent("main_builder")

        self.assertIsNotNone(agent)
        self.assertEqual(agent.name, "Main Builder Agent")
        self.assertEqual(agent.tier_required, "founders")

    def test_rejects_empty_or_unknown_trigger(self):
        self.assertFalse(validate_builder_payload({"trigger_type": "unknown", "request": "Fix routes"}))
        self.assertFalse(validate_builder_payload({"trigger_type": "manual_request", "request": ""}))

    def test_generates_work_order_for_failed_test(self):
        agent = get_agent("main_builder")
        result = agent.run(
            {
                "trigger_type": "failed_test",
                "request": "Fix the broken waitlist API regression",
                "test_name": "waitlist duplicate email test",
                "failing_test_output": "AssertionError: expected 200 got 500",
                "admin_test": True,
                "execute": False,
            }
        )

        self.assertEqual(result["status"], "ok")
        self.assertEqual(result["agent_key"], "main_builder")
        self.assertIn("work_order", result)
        self.assertIn("recommended_agents", result)
        self.assertFalse(result["execution_enabled"])


if __name__ == "__main__":
    unittest.main()
