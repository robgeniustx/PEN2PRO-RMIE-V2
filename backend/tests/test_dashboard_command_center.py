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
    """The dashboard decides plan and role from the signed-in account, never from the URL."""

    def setUp(self):
        self.temp_dir = tempfile.TemporaryDirectory()
        self.env_patch = patch.dict(os.environ, {
            "PEN2PRO_DB_PATH": str(Path(self.temp_dir.name) / "test.db"),
            "ALLOW_TEST_TIER_ACCESS": "true",
            "ADMIN_EMAILS": "owner@example.com",
        })
        self.env_patch.start()
        from main import app

        self.client = TestClient(app)

    def tearDown(self):
        self.env_patch.stop()
        self.temp_dir.cleanup()

    def signup(self, email, tier=None):
        r = self.client.post("/api/auth/register", json={"name": "Test", "email": email, "password": "password123"})
        self.assertEqual(r.status_code, 200)
        headers = {"Authorization": f"Bearer {r.json()['access_token']}"}
        if tier:
            claim = self.client.post("/api/auth/claim-purchase", json={"session_id": f"test_{tier}_{email}"}, headers=headers)
            self.assertEqual(claim.status_code, 200)
            headers = {"Authorization": f"Bearer {claim.json()['access_token']}"}
        return headers

    def test_requires_sign_in(self):
        self.assertEqual(self.client.get("/api/dashboard/modules").status_code, 401)

    def test_url_plan_and_role_cannot_unlock_anything(self):
        free = self.signup("free@example.com")
        r = self.client.post("/api/dashboard/modules/payments/records?plan=founders&role=admin", json={"customer": "X", "amount": 5}, headers=free)
        self.assertEqual(r.status_code, 403)

    def test_pro_can_create_customer_payment_record(self):
        pro = self.signup("pro@example.com", "pro")
        response = self.client.post("/api/dashboard/modules/payments/records", json={"customer": "Oak Ridge Apartments", "amount": 1250}, headers=pro)
        self.assertEqual(response.status_code, 200)
        record = response.json()["record"]
        self.assertEqual(record["customer"], "Oak Ridge Apartments")
        self.assertEqual(record["amount"], 1250.0)

    def test_records_are_private_and_start_empty(self):
        a = self.signup("a@example.com", "pro")
        b = self.signup("b@example.com", "pro")
        self.assertEqual(self.client.get("/api/dashboard/modules/contacts/records", headers=a).json()["records"], [])
        self.client.post("/api/dashboard/modules/contacts/records", json={"name": "Jo"}, headers=a)
        self.assertEqual(len(self.client.get("/api/dashboard/modules/contacts/records", headers=a).json()["records"]), 1)
        self.assertEqual(self.client.get("/api/dashboard/modules/contacts/records", headers=b).json()["records"], [])

    def test_owner_email_unlocks_elite_modules(self):
        owner = self.signup("owner@example.com")
        r = self.client.post("/api/dashboard/modules/domains/records", json={"domain": "pen2pro.ai"}, headers=owner)
        self.assertEqual(r.status_code, 200)

    def test_pro_modules_include_basic_voice_and_website(self):
        pro = self.signup("pro2@example.com", "pro")
        voice = self.client.get("/api/dashboard/modules/ai-voice-agent", headers=pro)
        website = self.client.get("/api/dashboard/modules/websites", headers=pro)
        self.assertTrue(voice.json()["access"]["unlocked"])
        self.assertIn("Basic", voice.json()["description"])
        self.assertTrue(website.json()["access"]["unlocked"])


if __name__ == "__main__":
    unittest.main()
