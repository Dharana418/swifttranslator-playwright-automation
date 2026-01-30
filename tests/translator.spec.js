import { test, expect } from '@playwright/test';

test('Pos_Fun_0001 – Convert singular past tense sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();

  await inputBox.fill('mamanam udhenma poLata giyaa.');

  // wait for auto-translation
  await expect(outputBox).toContainText(
    'මමනම් උදෙන්ම පොළට ගියා.',
    { timeout: 15000 }
  );
});


test('Pos_Fun_0002 – Mixed language informal sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea').first();
  const outputBox = page
    .locator('div.whitespace-pre-wrap.overflow-y-auto')
    .first();

  await inputBox.fill('Machan, Adha lecture ekee link eka dhaapanko.');

 
  await expect(outputBox).not.toBeEmpty({ timeout: 15000 });

 
  await expect(outputBox).toContainText(/මචන්/i);
  await expect(outputBox).toContainText('අද');
  await expect(outputBox).toContainText('එක');

  await expect(outputBox).toContainText(/lecture|ලෙක්චර්/i);
  await expect(outputBox).toContainText(/link|ලින්ක්/i);
});

