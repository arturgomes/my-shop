import { test, expect } from '@playwright/test';

test('Add to Cart and proceed to checkout', async ({ page }) => {
  await page.goto('http://localhost:5173'); // Vite default port

  // Check if products are listed
  const product = await page.locator('text=Iphone 16');
  await expect(product).toBeVisible();

  // Add a product to cart
  await page.click('text=Add to Cart');
  await page.click('text=Cart');

  // Verify product in cart
  const cartItem = await page.locator('text=Iphone 16');
  await expect(cartItem).toBeVisible();

  // Proceed to checkout and confirm purchase
  await page.click('text=Checkout');
  await page.click('text=Confirm Purchase');
});
