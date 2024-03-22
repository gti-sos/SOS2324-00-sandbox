// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('http://localhost:10000');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Contact Manager/);
});

test('list contacts', async ({ page }) => {
  await page.goto('http://localhost:10000/contacts');

  //await page.waitForTimeout(2000);

  // Expects the number of contacts to be more than 0
  let contactCount =  (await page.locator('.contactItem').all()).length;  
  expect(contactCount).toBeGreaterThan(0);

});
