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

// ── Plan unlock, saved roadmaps, strategist builder, dashboard persistence ───────────────
const signUp = async (page, email = `e2e-${Date.now()}-${Math.floor(Math.random() * 1e6)}@example.com`) => {
  await page.goto("/signup");
  await page.getByPlaceholder("Robert Green").fill("E2E Tester");
  await page.getByPlaceholder("you@example.com").fill(email);
  await page.getByPlaceholder("Min 8 characters").fill("password123");
  await page.locator("input[type=password]").nth(1).fill("password123");
  await page.getByRole("button", { name: /create account — free/i }).click();
  await expect(page).toHaveURL(/\/dashboard$/);
  return email;
};

// A real (non-sample) roadmap shaped like the API's, so saving can be tested without an OpenAI key.
const stubRoadmap = async (page, request) => {
  const base = await (await request.post("http://localhost:8000/api/blueprints/generate", {
    data: { business_idea: "Mobile pressure washing" },
    headers: { "x-forwarded-for": `198.51.100.${Math.floor(Math.random() * 200)}` },
  })).json();
  const real = { ...base, is_sample: false, business_idea: "Mobile pressure washing in Dallas" };
  await page.route("**/api/blueprints/generate", (route) => route.fulfill({ json: real }));
};

const fillStarter = async (page) => {
  await page.goto("/starter");
  await page.locator("textarea").fill("Mobile pressure washing in Dallas");
  await page.locator("select").first().selectOption({ index: 1 });
  await page.getByRole("button", { name: /^continue/i }).click();
  await page.getByRole("button", { name: /\$/ }).first().click();
  await page.getByRole("button", { name: /week|month|asap|days/i }).first().click();
  await page.getByRole("button", { name: /^continue/i }).click();
  await page.getByPlaceholder("Robert Green").fill("E2E Tester");
  await page.getByPlaceholder("you@example.com").fill("lead@example.com");
  await page.getByRole("button", { name: /build my roadmap/i }).click();
  await expect(page).toHaveURL(/\/results$/, { timeout: 60000 });
};

test.describe("paid plans actually unlock", () => {
  test("a confirmed purchase unlocks the plan, and dashboard records persist across sign-out", async ({ page }) => {
    const email = await signUp(page);
    // Pro-only section is locked before payment.
    await page.goto("/dashboard/pipeline");
    await expect(page.getByText(/requires pro/i).first()).toBeVisible();

    await page.goto(`/payment-success?session_id=test_pro_${Date.now()}`);
    await expect(page.getByText("Your plan is unlocked on your account.")).toBeVisible();

    await page.goto("/dashboard/pipeline");
    await expect(page.getByText("Feature unlocked")).toBeVisible();
    await page.locator('#module-form input[name="deal"]').fill("Oak Ridge contract");
    await page.locator('#module-form select[name="stage"]').selectOption({ index: 1 });
    await page.locator('#module-form input[name="value"]').fill("4200");
    await page.getByRole("button", { name: /^Save / }).click();
    await expect(page.getByText(/record saved/i)).toBeVisible();

    // Sign out, sign back in: the record is still there (it is stored in the database, not the browser).
    await page.getByRole("button", { name: "Sign Out" }).first().click();
    await page.goto("/login");
    await page.getByPlaceholder("you@example.com").fill(email);
    await page.locator("input[type=password]").first().fill("password123");
    await page.getByRole("button", { name: /^sign in$/i }).last().click();
    await expect(page).toHaveURL(/\/dashboard$/);
    await page.goto("/dashboard/pipeline");
    await expect(page.getByText("Oak Ridge contract").first()).toBeVisible();
  });

  test("a purchase made before the account existed is attached after sign-up", async ({ page }) => {
    await page.goto(`/payment-success?session_id=test_elite_${Date.now()}`);
    await expect(page.getByText(/attach this purchase to your account/i)).toBeVisible();
    await page.getByRole("link", { name: "Create Account" }).click();
    await page.getByPlaceholder("Robert Green").fill("Late Buyer");
    await page.getByPlaceholder("you@example.com").fill(`late-${Date.now()}@example.com`);
    await page.getByPlaceholder("Min 8 characters").fill("password123");
    await page.locator("input[type=password]").nth(1).fill("password123");
    await page.getByRole("button", { name: /create account — free/i }).click();
    await expect(page).toHaveURL(/\/dashboard$/);
    await expect(page.getByText(/elite plan/i).first()).toBeVisible();
  });

  test("the plan cannot be unlocked from the URL", async ({ page }) => {
    await signUp(page);
    await page.goto("/dashboard/pipeline?plan=founders&role=admin");
    await expect(page.getByText(/requires pro/i).first()).toBeVisible();
  });
});

test.describe("saved roadmaps and PDF", () => {
  test("save, list, reopen and delete a roadmap; PDF button prints", async ({ page, request }) => {
    await stubRoadmap(page, request);
    await page.addInitScript(() => { window.__printed = 0; window.print = () => { window.__printed += 1; }; });
    await signUp(page);
    await fillStarter(page);
    await page.getByRole("button", { name: "Download PDF" }).click();
    expect(await page.evaluate(() => window.__printed)).toBe(1);
    await page.getByRole("button", { name: "Save Roadmap" }).click();
    await expect(page.getByText(/saved to your account/i)).toBeVisible();

    await page.getByRole("link", { name: "My Roadmaps" }).first().click();
    await expect(page.getByText("Mobile pressure washing in Dallas")).toBeVisible();
    await page.getByRole("button", { name: "Open", exact: true }).click();
    await expect(page).toHaveURL(/\/results$/);
    await expect(page.getByRole("button", { name: /Saved/ })).toBeVisible();

    await page.goto("/my-roadmaps");
    page.once("dialog", (d) => d.accept());
    await page.getByRole("button", { name: "Delete" }).click();
    await expect(page.getByText("You have not saved anything yet.")).toBeVisible();
  });

  test("guests are asked to sign in to save; the starter form keeps the lead", async ({ page, request }) => {
    await stubRoadmap(page, request);
    await fillStarter(page);
    await expect(page.getByRole("link", { name: "Sign in to Save" })).toBeVisible();
    const leads = await (await request.get("http://localhost:8000/api/admin/starter-leads", { headers: { "X-Admin-Key": ADMIN_KEY } })).json();
    expect(leads.leads.some((l) => l.email === "lead@example.com")).toBe(true);
  });

  test("AI refinement is offered as a paid feature to free accounts", async ({ page, request }) => {
    await stubRoadmap(page, request);
    await signUp(page);
    await fillStarter(page);
    await expect(page.getByText(/AI refinement is included with Pro, Elite and Founders/i)).toBeVisible();
  });
});

test.describe("Strategist builder", () => {
  test("builds a 12-week plan with math, flags and proof; saves it for later", async ({ page }) => {
    await page.goto("/strategist/playbook?session_id=preview");
    await page.locator("#plan-builder select").selectOption("web-design");
    await page.getByLabel(/hours a week you can work/i).fill("10");
    await page.getByRole("button", { name: "Build my plan" }).click();
    const result = page.locator("#plan-result");
    await expect(result).toContainText("Web design / development");
    await expect(result).toContainText("You cannot deliver this volume alone at this price");
    await expect(result).toContainText("12-week plan");
    await expect(result).toContainText("Proof you did it");
    await expect(result).toContainText("Verification ledger");
    await expect(page.getByRole("link", { name: "Sign in to save" })).toBeVisible();

    await signUp(page);
    await page.goto("/strategist/playbook?session_id=preview");
    await page.getByRole("button", { name: "Build my plan" }).click();
    await page.getByRole("button", { name: "Save this plan" }).click();
    await expect(page.getByText("Saved to My Roadmaps.")).toBeVisible();
    await page.goto("/my-roadmaps");
    await page.getByRole("button", { name: "Open", exact: true }).click();
    await expect(page.locator("#plan-result")).toContainText("Your path to $10,000 a month");
  });
});

test.describe("owner tools are not public", () => {
  test("voice agent data needs the owner key", async ({ request }) => {
    expect((await request.get("http://localhost:8000/api/voice-agent/calls")).status()).toBe(403);
    expect((await request.get("http://localhost:8000/api/voice-agent/calls", { headers: { "X-Admin-Key": ADMIN_KEY } })).status()).toBe(200);
  });
});
