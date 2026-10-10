import { test, expect } from "@playwright/test";

const ADMIN_KEY = "e2e-admin-key";

test.describe("$100 Strategist Plan", () => {
  test("sales page shows price, all 15 steps, and a free Step 1", async ({ page }) => {
    await page.goto("/strategist");
    await expect(page.getByRole("heading", { level: 1 })).toContainText("$100 Strategist Plan");
    await expect(page.getByRole("button", { name: /get the strategist plan/i }).first()).toBeVisible();
    await expect(page.getByText("Pick the business you will actually start").first()).toBeVisible();
    await expect(page.getByText("Your 30/60/90-day plan and weekly operating rhythm")).toBeVisible();
    await expect(page.locator("#free-step")).toContainText("Do this");
    // The paid steps' detailed actions must not be on the public page.
    await expect(page.locator("body")).not.toContainText("Have 10 short conversations");
  });

  test("playbook is locked without a purchase", async ({ page }) => {
    await page.goto("/strategist/playbook");
    await expect(page.getByRole("heading", { name: /one step away/i })).toBeVisible();
    await expect(page.locator("body")).not.toContainText("Have 10 short conversations");
  });

  test("playbook opens with a verified session, saves progress, and scripts copy", async ({ page, context }) => {
    await context.grantPermissions(["clipboard-read", "clipboard-write"]);
    await page.goto("/strategist/playbook?session_id=preview");
    await expect(page.getByRole("heading", { name: "The $100 Strategist Plan" })).toBeVisible();
    await expect(page.locator("article[id^='step-']")).toHaveCount(15);

    const first = page.getByRole("checkbox").first();
    await first.check();
    await expect(page.getByText(/1 of \d+ actions done/)).toBeVisible();
    await page.reload();
    await expect(page.getByRole("checkbox").first()).toBeChecked();

    await page.locator("#step-2 button").first().click();
    await expect(page.locator("#step-2")).toContainText("Have 10 short conversations");
    await expect(page.locator("#scripts")).toContainText("First message");
    await page.locator("#scripts").getByRole("button", { name: "Copy" }).first().click();
    await expect(page.locator("#scripts").getByRole("button", { name: "Copied" })).toBeVisible();
  });

  test("a made-up Stripe session id does not unlock the plan", async ({ page }) => {
    await page.goto("/strategist/playbook?session_id=cs_test_fake123");
    await expect(page.getByRole("heading", { name: /one step away/i })).toBeVisible();
  });
});

test.describe("admin", () => {
  test("is locked, rejects a wrong key, and opens with the right key", async ({ page }) => {
    await page.goto("/admin");
    await expect(page.getByText("Enter your admin access key")).toBeVisible();
    await page.getByPlaceholder("Admin access key").fill("wrong");
    await page.getByRole("button", { name: /access admin panel/i }).click();
    await expect(page.getByRole("alert")).toContainText(/not accepted/i);

    await page.getByPlaceholder("Admin access key").fill(ADMIN_KEY);
    await page.getByRole("button", { name: /access admin panel/i }).click();
    await expect(page.getByRole("heading", { name: "Admin Dashboard" })).toBeVisible();
    await expect(page.locator("body")).not.toContainText(/waitlist/i);

    await page.goto("/admin/analytics");
    await expect(page.locator("body")).not.toContainText("Enter your admin access key");
  });
});

test.describe("accounts and roadmap", () => {
  test("dashboard requires sign in; sign-up lands on the dashboard", async ({ page }) => {
    await page.goto("/dashboard");
    await expect(page).toHaveURL(/\/login$/);
    await page.goto("/signup");
    await expect(page.getByRole("heading", { name: /build your business roadmap/i })).toBeVisible();
    const email = `e2e-${Date.now()}@example.com`;
    await page.getByPlaceholder("Robert Green").fill("E2E Tester");
    await page.getByPlaceholder("you@example.com").fill(email);
    await page.getByPlaceholder("Min 8 characters").fill("password123");
    await page.locator("input[type=password]").nth(1).fill("password123");
    await page.getByRole("button", { name: /create account — free/i }).click();
    await expect(page).toHaveURL(/\/dashboard$/);
  });

  test("free roadmap flow produces a roadmap with upgrade CTAs", async ({ page }) => {
    await page.goto("/starter");
    await page.locator("textarea").fill("Mobile pressure washing for homes and small businesses");
    await page.locator("select").first().selectOption({ index: 1 });
    await page.getByRole("button", { name: /^continue/i }).click();
    await page.locator("form, div").getByRole("button", { name: /\$/ }).first().click();
    await page.getByRole("button", { name: /week|month|asap|days/i }).first().click();
    await page.getByRole("button", { name: /^continue/i }).click();
    await page.getByPlaceholder("Robert Green").fill("E2E Tester");
    await page.getByPlaceholder("you@example.com").fill("e2e@example.com");
    await page.getByRole("button", { name: /build my roadmap/i }).click();
    await expect(page).toHaveURL(/\/results$/, { timeout: 60000 });
    await expect(page.locator("body")).toContainText(/7-Day|30-Day|90-Day/);
    await expect(page.getByRole("link", { name: /strategist plan/i }).first()).toBeVisible();
  });
});
