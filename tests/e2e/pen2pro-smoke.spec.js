const { test, expect } = require('@playwright/test');

const FRONTEND_URL = process.env.FRONTEND_URL;

test('PEN2PRO homepage loads', async ({ page }) => {
  await page.goto(FRONTEND_URL);
  await expect(page.locator('body')).toBeVisible();
});

test('Starter page loads', async ({ page }) => {
  await page.goto(`${FRONTEND_URL}/starter`);
  await expect(page.locator('body')).toBeVisible();
});

test('Pricing or plans are visible', async ({ page }) => {
  await page.goto(FRONTEND_URL);
  await expect(page.locator('body')).toContainText(/Pro|Elite|Founder|Free/i);
});

test('Command Center route loads', async ({ page }) => {
  await page.goto(`${FRONTEND_URL}/command-center`);
  await expect(page.locator('body')).toBeVisible();
});

test('AI Voice Agent route loads', async ({ page }) => {
  await page.goto(`${FRONTEND_URL}/ai-voice-agent`);
  await expect(page.locator('body')).toBeVisible();
});
