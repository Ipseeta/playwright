import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://ipseeta.com');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Ipseeta/);
});

test('click a topic', async ({ page }) => {
  await page.goto('https://ipseeta.com/');
  await expect(page.locator('[id="__next"]')).toMatchAriaSnapshot(`
    - link "Pm2 Cheat Sheet":
      - /url: https://ipseeta.com/pm2-cheat-sheet
    `);
  await page.getByText('Pm2 Cheat Sheet').click();

});