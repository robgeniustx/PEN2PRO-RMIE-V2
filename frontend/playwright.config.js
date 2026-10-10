import { defineConfig, devices } from "@playwright/test";

const FRONTEND = "http://localhost:4173";
const API = "http://localhost:8000";

export default defineConfig({
  testDir: "./tests/e2e",
  timeout: 45000,
  retries: process.env.CI ? 1 : 0,
  workers: 2,
  reporter: "list",
  use: {
    baseURL: FRONTEND,
    headless: true,
    screenshot: "only-on-failure",
    launchOptions: process.env.PW_CHROMIUM_PATH ? { executablePath: process.env.PW_CHROMIUM_PATH } : {},
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
  webServer: [
    {
      command: "python -m uvicorn main:app --port 8000",
      cwd: "../backend",
      url: `${API}/health`,
      reuseExistingServer: !process.env.CI,
      env: {
        ADMIN_ACCESS_KEY: "e2e-admin-key",
        ALLOW_TEST_TIER_ACCESS: "true",
        ENVIRONMENT: "development",
        FRONTEND_URL: FRONTEND,
      },
    },
    {
      command: "npm run preview -- --port 4173 --strictPort",
      url: FRONTEND,
      reuseExistingServer: !process.env.CI,
    },
  ],
});
