const { test, expect } = require("@playwright/test");

const BASE = process.env.FRONTEND_URL || "http://localhost:5173";

const PUBLIC_ROUTES = [
  { path: "/",              title: "PEN2PRO" },
  { path: "/about",         title: "PEN2PRO" },
  { path: "/pricing",       title: "PEN2PRO" },
  { path: "/waitlist",      title: "PEN2PRO" },
  { path: "/starter",       title: "PEN2PRO" },
  { path: "/login",         title: "PEN2PRO" },
  { path: "/pro",           title: "PEN2PRO" },
  { path: "/elite",         title: "PEN2PRO" },
  { path: "/founders",      title: "PEN2PRO" },
  { path: "/affiliate",     title: "PEN2PRO" },
  { path: "/funding",       title: "PEN2PRO" },
  { path: "/credit-repair", title: "PEN2PRO" },
  { path: "/command-center", title: "PEN2PRO" },
];

test.describe("PEN2PRO smoke tests", () => {
  for (const route of PUBLIC_ROUTES) {
    test(`${route.path} loads without error`, async ({ page }) => {
      const response = await page.goto(`${BASE}${route.path}`, { waitUntil: "domcontentloaded" });
      expect(response?.status()).toBeLessThan(400);
      await expect(page).toHaveTitle(new RegExp(route.title, "i"));
      await expect(page.locator("body")).not.toContainText("Cannot GET");
      await expect(page.locator("body")).not.toContainText("404 | Not Found");
    });
  }

  test("/ renders brand name PEN2PRO", async ({ page }) => {
    await page.goto(BASE, { waitUntil: "domcontentloaded" });
    await expect(page.locator("body")).toContainText("PEN2PRO");
  });

  test("/ has at least one CTA button", async ({ page }) => {
    await page.goto(BASE, { waitUntil: "domcontentloaded" });
    const cta = page.locator("a, button").filter({ hasText: /roadmap|waitlist|get started|start/i }).first();
    await expect(cta).toBeVisible();
  });

  test("nav links are present on home page", async ({ page }) => {
    await page.goto(BASE, { waitUntil: "domcontentloaded" });
    const nav = page.locator("nav");
    await expect(nav).toBeVisible();
  });

  test("/pricing has upgrade buttons", async ({ page }) => {
    await page.goto(`${BASE}/pricing`, { waitUntil: "domcontentloaded" });
    const upgradeBtn = page.locator("a, button").filter({ hasText: /upgrade|get started|pro|elite|founder/i }).first();
    await expect(upgradeBtn).toBeVisible();
  });

  test("/about has founder story content", async ({ page }) => {
    await page.goto(`${BASE}/about`, { waitUntil: "domcontentloaded" });
    await expect(page.locator("body")).toContainText(/robert|pen2pro|mission/i);
  });

  test("unknown route renders 404 page not blank", async ({ page }) => {
    await page.goto(`${BASE}/this-route-does-not-exist`, { waitUntil: "domcontentloaded" });
    await expect(page.locator("body")).not.toBeEmpty();
    await expect(page.locator("body")).toContainText(/not found|404|home/i);
  });
});
