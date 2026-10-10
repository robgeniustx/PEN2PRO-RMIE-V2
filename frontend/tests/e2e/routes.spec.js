import { test, expect } from "@playwright/test";

const ROUTES = [
  "/", "/about", "/login", "/signin", "/signup", "/starter", "/roadmap", "/pricing", "/pro", "/elite",
  "/founders", "/builder", "/accelerator", "/legacy-founder", "/dashboard", "/affiliate", "/funding",
  "/credit-repair", "/admin", "/strategist", "/strategist/playbook", "/privacy", "/terms", "/disclaimer",
  "/command-center", "/voice-agent", "/website-builder", "/domain-search", "/rmie", "/businessos",
];

// Collect uncaught page errors so a crashing page fails the test instead of passing as "loaded".
const watchErrors = (page) => {
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  return errors;
};

test.describe("every route renders a real page", () => {
  for (const route of ROUTES) {
    test(`${route}`, async ({ page }) => {
      const errors = watchErrors(page);
      const res = await page.goto(route, { waitUntil: "networkidle" });
      expect(res?.status()).toBeLessThan(400);
      const text = await page.locator("body").innerText();
      // /admin intentionally shows only a short key gate until unlocked.
      expect(text.length, "page has real content").toBeGreaterThan(route === "/admin" ? 60 : 150);
      expect(text).not.toMatch(/page not found|cannot get/i);
      expect(text).toContain("PEN2PRO");
      expect(errors).toEqual([]);
    });
  }

  test("unknown route shows the 404 page, not a blank screen", async ({ page }) => {
    await page.goto("/this-route-does-not-exist");
    await expect(page.locator("body")).toContainText(/not found|404/i);
    await expect(page.locator("a[href='/']").first()).toBeVisible();
  });

  test("/waitlist no longer exists and sends visitors to the free roadmap", async ({ page }) => {
    await page.goto("/waitlist");
    await expect(page).toHaveURL(/\/starter$/);
  });
});

test.describe("waitlist and countdown are gone", () => {
  for (const route of ["/", "/pricing", "/founders", "/pro", "/elite", "/about", "/affiliate", "/funding", "/credit-repair", "/starter"]) {
    test(`${route} has no waitlist, countdown, or launch-date copy`, async ({ page }) => {
      await page.goto(route, { waitUntil: "networkidle" });
      const text = (await page.locator("body").innerText()).toLowerCase();
      expect(text).not.toMatch(/waitlist|countdown|june 1[05]|launching /);
    });
  }
});

test("crawl: every internal link on every reachable page resolves to a real page", async ({ page }) => {
  test.setTimeout(240000);
  const errors = watchErrors(page);
  const seen = new Set();
  const queue = ["/"];
  const broken = [];

  while (queue.length && seen.size < 80) {
    const path = queue.shift();
    if (seen.has(path)) continue;
    seen.add(path);
    await page.goto(path, { waitUntil: "networkidle" });
    const text = await page.locator("body").innerText();
    if (/page not found|404/i.test(text) && path !== "/this-route-does-not-exist") broken.push(path);
    const hrefs = await page.$$eval("a[href]", (as) => as.map((a) => a.getAttribute("href")));
    for (const href of hrefs) {
      if (!href || !href.startsWith("/") || href.startsWith("//") || href.startsWith("/api/")) continue;
      const clean = href.split("#")[0].split("?")[0] || "/";
      if (!seen.has(clean)) queue.push(clean);
    }
  }

  expect(broken, `links leading to a 404 page: ${broken.join(", ")}`).toEqual([]);
  expect(errors).toEqual([]);
  expect(seen.size).toBeGreaterThan(15);
});

test.describe("navigation", () => {
  test("desktop nav links work", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto("/");
    const nav = page.locator("nav").first();
    for (const [label, url] of [["About", /\/about$/], ["Starter", /\/starter$/], ["Builder", /\/builder$/], ["Accelerator", /\/accelerator$/], ["Pricing", /\/pricing$/], ["$100 Plan", /\/strategist$/]]) {
      await nav.getByRole("link", { name: label, exact: true }).first().click();
      await expect(page).toHaveURL(url);
    }
  });

  test("mobile hamburger opens and every link works", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");
    await page.getByRole("button", { name: /toggle menu/i }).click();
    for (const [label, url] of [["About", /\/about$/], ["Pricing", /\/pricing$/], ["Pro", /\/pro$/], ["Elite", /\/elite$/]]) {
      const link = page.getByRole("link", { name: label, exact: true }).first();
      await expect(link).toBeVisible();
      await link.click();
      await expect(page).toHaveURL(url);
      await page.getByRole("button", { name: /toggle menu/i }).click();
    }
  });

  test("footer links go to real pages", async ({ page }) => {
    await page.goto("/");
    const footer = page.locator("footer");
    for (const [label, url] of [["Privacy", /\/privacy$/], ["Terms", /\/terms$/], ["Disclaimer", /\/disclaimer$/]]) {
      await footer.getByRole("link", { name: label, exact: true }).click();
      await expect(page).toHaveURL(url);
      await expect(page.locator("h1")).toBeVisible();
      await page.goto("/");
    }
  });
});
