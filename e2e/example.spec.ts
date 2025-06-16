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
test('test empty sign in', async ({ page }) => {
  await page.goto('https://ipseeta.com/');
  await page.getByRole('button', { name: 'Toggle sign-up options' }).click();
  await page.getByRole('menuitem', { name: 'hashnode.com sign in, opens' }).click();
  await expect(page.locator('[id="__next"]')).toContainText('Continue with Google');
  await page.getByRole('button', { name: 'Continue with Google' }).click();
  await page.getByRole('textbox', { name: 'Email or phone' }).click();
  await expect(page.locator('#identifierNext')).toContainText('Next');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByText('Enter an email or phone number').click();
  await expect(page.locator('section')).toMatchAriaSnapshot(`- text: Enter an email or phone number`);
});
