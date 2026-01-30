import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
});

test('Pos_Fun_0001 – Convert singular past tense sentence', async ({ page }) => {

  const inputBox = page.getByRole('textbox');
  const outputBox = page.locator('div.whitespace-pre-wrap').first();

  await inputBox.pressSequentially('mamanam udhenma poLata giyaa.', { delay: 40 });

  await expect(outputBox).toContainText('මමනම් උදෙන්ම පොළට ගියා.', { timeout: 15000 });
});


test('Pos_Fun_0002 – Mixed language informal sentence', async ({ page }) => {

  const inputBox = page.getByRole('textbox');
  const outputBox = page.locator('div.whitespace-pre-wrap').first();

  await inputBox.pressSequentially(
    'Machan, Adha lecture ekee link eka dhaapanko.',
    { delay: 40 }
  );
  await expect(outputBox).toContainText(/[අ-ෆ]/, { timeout: 15000 });

  await expect(outputBox).toContainText(/මචන්/i);
});

test('Pos_Fun_0003 – Informal Sinhala question sentence', async ({ page }) => {

  const inputBox = page.getByRole('textbox');
  const outputBox = page.locator('div.whitespace-pre-wrap').first();

  await inputBox.pressSequentially(
    'malli oyaagee ID eka naethi velaa kivvaa nee? hambunadha eeka?',
    { delay: 40 }
  );

  await expect(outputBox).toContainText(/[අ-ෆ]/, { timeout: 15000 });

  await expect(outputBox).toContainText(/මල්ලි/i);
  await expect(outputBox).toContainText(/ID|අයිඩී/i);

  // Flexible grammar check
  await expect(outputBox).toContainText(/හම්බුනද|ලැබුන/i);
});

test('Pos_Fun_0004 – Long paragraph cricket match report', async ({ page }) => {

  const inputBox = page.getByRole('textbox');
  const outputBox = page.locator('div.whitespace-pre-wrap').first();

  await inputBox.pressSequentially(
    'iiyee dhina navasiilanthaya samaga paevathi dhivaa raathrii ekdhina tharagayeedhii kaasiyee vaasiya dhinaagath shrii lQQkaa kaNdaayama palamuva pandhuvata pahara dhiimata naayaka dhasun shaanaka thiiranaya kara athara ehidhii shriiqqkaa kaNdaayama lakunu 451 k labaa gath athara aarambhaka pithikaru vana paethum nishshQQka aganaa lakunu 210 k labaagaeniimata samath viya. ohugee ema inimata 6yee pahara 10 ksaha 4 pahara 18 k labaagaeniimata samath viya.',
    { delay: 40 }
  );

  await expect(outputBox).toContainText(/[අ-ෆ]/, { timeout: 15000 });

  await expect(outputBox).toContainText(/ශ්‍රී ලංකා|ශ්රීලංකා/i);
  await expect(outputBox).toContainText(/451/);
  await expect(outputBox).toContainText(/210/);
});

