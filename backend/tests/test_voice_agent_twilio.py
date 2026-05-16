import sys
import unittest
from pathlib import Path
from unittest.mock import patch


BACKEND_ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(BACKEND_ROOT))

from fastapi.testclient import TestClient  # noqa: E402
from main import app  # noqa: E402


class TwilioVoiceAgentTest(unittest.TestCase):
    def setUp(self):
        self.client = TestClient(app)

    def test_incoming_call_returns_gather_twiml(self):
        response = self.client.post("/api/voice-agent/incoming")

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.headers["content-type"], "application/xml")
        self.assertIn("<Gather", response.text)
        self.assertIn("/api/voice-agent/process", response.text)
        self.assertIn("PEN2PRO", response.text)

    def test_process_speech_falls_back_to_twilio_say_without_elevenlabs(self):
        with patch("app.routes.voice_agent_twilio.generate_elevenlabs_audio", side_effect=RuntimeError("missing key")):
            response = self.client.post(
                "/api/voice-agent/process",
                data={"SpeechResult": "I want to launch a pressure washing business in Houston"},
            )

        self.assertEqual(response.status_code, 200)
        self.assertIn("<Say>", response.text)
        self.assertIn("pressure washing business in Houston", response.text)

    def test_process_speech_plays_generated_audio_when_elevenlabs_succeeds(self):
        with patch("app.routes.voice_agent_twilio.generate_elevenlabs_audio", return_value="voice-test.mp3"):
            response = self.client.post(
                "/api/voice-agent/process",
                data={"SpeechResult": "I need help building a business roadmap"},
            )

        self.assertEqual(response.status_code, 200)
        self.assertIn("<Play>", response.text)
        self.assertIn("/api/voice-agent/audio/voice-test.mp3", response.text)

    def test_missing_audio_file_returns_404(self):
        response = self.client.get("/api/voice-agent/audio/not-real.mp3")

        self.assertEqual(response.status_code, 404)

    def test_elevenlabs_generic_webhook_acknowledges_payload(self):
        response = self.client.post("/api/voice-agent/webhook", json={"type": "transcription.completed"})

        self.assertEqual(response.status_code, 200)
        body = response.json()
        self.assertEqual(body["status"], "received")
        self.assertEqual(body["source"], "elevenlabs")
        self.assertIn("type", body["payload_keys"])


if __name__ == "__main__":
    unittest.main()
