import sys
import unittest
from pathlib import Path


BACKEND_ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(BACKEND_ROOT))

from fastapi.testclient import TestClient  # noqa: E402
from main import app  # noqa: E402


class ElevenLabsVoiceWebhookTest(unittest.TestCase):
    def setUp(self):
        self.client = TestClient(app)

    def test_elevenlabs_status_endpoint(self):
        response = self.client.get("/api/voice-agent/elevenlabs/status")

        self.assertEqual(response.status_code, 200)
        body = response.json()
        self.assertEqual(body["provider"], "elevenlabs")
        self.assertEqual(body["webhook_path"], "/api/voice-agent/webhook/elevenlabs")

    def test_unsigned_local_webhook_creates_call_when_no_secret_configured(self):
        payload = {
            "type": "post_call_transcription",
            "event_timestamp": 1739537297,
            "data": {
                "agent_id": "agent_test",
                "conversation_id": "conversation_test_123",
                "status": "done",
                "transcript": [
                    {"role": "agent", "message": "Thanks for calling PEN2PRO."},
                    {"role": "user", "message": "I need a pressure washing estimate."},
                ],
                "metadata": {"call_duration_secs": 42},
                "analysis": {
                    "call_successful": "success",
                    "transcript_summary": "Caller requested a pressure washing estimate.",
                    "data_collection_results": {
                        "call_reason": {"value": "pressure washing estimate"},
                        "lead_captured": {"value": "yes"},
                    },
                },
            },
        }

        response = self.client.post("/api/voice-agent/webhook/elevenlabs", json=payload)

        self.assertEqual(response.status_code, 200)
        body = response.json()
        self.assertTrue(body["received"])
        self.assertEqual(body["conversation_id"], "conversation_test_123")
        self.assertEqual(body["call"]["call_reason"], "pressure washing estimate")
        self.assertTrue(body["call"]["lead_captured"])


if __name__ == "__main__":
    unittest.main()
