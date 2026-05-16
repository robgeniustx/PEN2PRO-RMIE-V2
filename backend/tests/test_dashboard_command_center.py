import os
import sys
import tempfile
import unittest
from pathlib import Path
from unittest.mock import patch


BACKEND_ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(BACKEND_ROOT))

from fastapi.testclient import TestClient  # noqa: E402


class DashboardCommandCenterTest(unittest.TestCase):
    def setUp(self):
        self.temp_dir = tempfile.TemporaryDirectory()
        self.store_path = Path(self.temp_dir.name) / "dashboard_records.json"
        self.env_patch = patch.dict(os.environ, {"DASHBOARD_RECORD_STORE": str(self.store_path)})
        self.env_patch.start()

        import app.services.dashboard_service as dashboard_service

        dashboard_service.STORE_PATH = self.store_path
        from main import app

        self.client = TestClient(app)

    def tearDown(self):
        self.env_patch.stop()
        self.temp_dir.cleanup()

    def test_pro_can_create_customer_payment_record(self):
        response = self.client.post(
            "/api/dashboard/modules/payments/records?plan=pro&role=member",
            json={"customer": "Oak Ridge Apartments", "amount": 1250},
        )

        self.assertEqual(response.status_code, 200)
        body = response.json()
        self.assertEqual(body["record"]["customer"], "Oak Ridge Apartments")
        self.assertEqual(body["record"]["method"], "Stripe link")
        self.assertEqual(body["record"]["amount"], 1250.0)

    def test_free_cannot_create_pro_payment_record(self):
        response = self.client.post(
            "/api/dashboard/modules/payments/records?plan=free&role=member",
            json={"customer": "Locked Lead", "amount": 99},
        )

        self.assertEqual(response.status_code, 403)

    def test_admin_unlock_can_create_elite_domain_record(self):
        response = self.client.post(
            "/api/dashboard/modules/domains/records?plan=free&role=admin",
            json={"domain": "pen2pro.ai", "provider": "Namecheap"},
        )

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json()["record"]["domain"], "pen2pro.ai")

    def test_pro_modules_include_basic_voice_and_website(self):
        voice = self.client.get("/api/dashboard/modules/ai-voice-agent?plan=pro&role=member")
        website = self.client.get("/api/dashboard/modules/websites?plan=pro&role=member")

        self.assertEqual(voice.status_code, 200)
        self.assertTrue(voice.json()["access"]["unlocked"])
        self.assertIn("Basic", voice.json()["description"])
        self.assertEqual(website.status_code, 200)
        self.assertTrue(website.json()["access"]["unlocked"])


if __name__ == "__main__":
    unittest.main()
