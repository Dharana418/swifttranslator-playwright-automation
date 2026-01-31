import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
});

test('Neg_Fun_0001 – Inconsistency of capital letters', async ({ page }) => {
  test.fail(true, 'Negative test: expects mismatch with correct output.');

  const inputBox = page.getByRole('textbox');
  const outputBox = page.locator('div.whitespace-pre-wrap').first();

  await inputBox.pressSequentially('mAma gEdHaRa yanavaa.', { delay: 40 });

  await expect(outputBox).toContainText('මම ගෙදර යනවා.', { timeout: 15000 });
});

test('Neg_Fun_0002 – Converts a spelling mistake', async ({ page }) => {
  test.fail(true, 'Negative test: expects mismatch with correct output.');

  const inputBox = page.getByRole('textbox');
  const outputBox = page.locator('div.whitespace-pre-wrap').first();

  await inputBox.pressSequentially(
    'Machaaa API exam eka pass karanawaa nemei.',
    { delay: 40 }
  );

  await expect(outputBox).toContainText('මචන් අපි එක්සෑම් එක පාස් කරනවා නෙමෙයි', {
    timeout: 15000,
  });
});

test('Neg_Fun_0003 – Repeated words', async ({ page }) => {
  test.fail(true, 'Negative test: expects mismatch with correct output.');

  const inputBox = page.getByRole('textbox');
  const outputBox = page.locator('div.whitespace-pre-wrap').first();

  await inputBox.pressSequentially('hariiiii hondaaaaa vaedaaaaa', { delay: 40 });

  await expect(outputBox).toContainText('හරිම හොද වැඩ', { timeout: 15000 });
});

test('Neg_Fun_0004 – SMS texting message', async ({ page }) => {
  test.fail(true, 'Negative test: expects mismatch with correct output.');

  const inputBox = page.getByRole('textbox');
  const outputBox = page.locator('div.whitespace-pre-wrap').first();

  await inputBox.pressSequentially('mmn gdr ynv dn', { delay: 40 });

  await expect(outputBox).toContainText('මම ගෙදර යනවා දැන්', { timeout: 15000 });
});

test('Neg_Fun_0005 – Irregular spacing', async ({ page }) => {
  test.fail(true, 'Negative test: expects mismatch with correct output.');

  const inputBox = page.getByRole('textbox');
  const outputBox = page.locator('div.whitespace-pre-wrap').first();

  await inputBox.pressSequentially('mama    gedhara   yanavaa', { delay: 40 });

  await expect(outputBox).toContainText('මම    ගෙදර   යනවා', { timeout: 15000 });
});

test('Neg_Fun_0006 – Random capital English words', async ({ page }) => {
  test.fail(true, 'Negative test: expects mismatch with correct output.');

  const inputBox = page.getByRole('textbox');
  const outputBox = page.locator('div.whitespace-pre-wrap').first();

  await inputBox.pressSequentially('mama Zoom meetin ekta join wenne dn', {
    delay: 40,
  });

  await expect(outputBox).toContainText('මම zoom මීටින් එකට join වෙන්න යන්නේ දැන්', {
    timeout: 15000,
  });
});

test('Neg_Fun_0007 – Without spaces between words', async ({ page }) => {
  test.fail(true, 'Negative test: expects mismatch with correct output.');

  const inputBox = page.getByRole('textbox');
  const outputBox = page.locator('div.whitespace-pre-wrap').first();

  await inputBox.pressSequentially('mamagedharayanavaheta', { delay: 40 });

  await expect(outputBox).toContainText('මම ගෙදර යනවා හෙට', { timeout: 15000 });
});

test('Neg_Fun_0008 – Mixed singlish and English', async ({ page }) => {
  test.fail(true, 'Negative test: expects mismatch with correct output.');

  const inputBox = page.getByRole('textbox');
  const outputBox = page.locator('div.whitespace-pre-wrap').first();

  await inputBox.pressSequentially('exam eka pass unada nedda', { delay: 40 });

  await expect(outputBox).toContainText('exam එක පාස් වුනාද නැද්ද?', { timeout: 15000 });
});

test('Neg_Fun_0009 – Repeating English characters', async ({ page }) => {
  test.fail(true, 'Negative test: expects mismatch with correct output.');

  const inputBox = page.getByRole('textbox');
  const outputBox = page.locator('div.whitespace-pre-wrap').first();

  await inputBox.pressSequentially('adooo ela kiri machan supiriii', { delay: 40 });

  await expect(outputBox).toContainText('අඩෝ එලකිරි මචන් සුපිරි', { timeout: 15000 });
});

test('Neg_Fun_0010 – Mixed English and singlish words', async ({ page }) => {
  test.fail(true, 'Negative test: expects mismatch with correct output.');

  const inputBox = page.getByRole('textbox');
  const outputBox = page.locator('div.whitespace-pre-wrap').first();

  await inputBox.pressSequentially('api Zoom call ekata late wenne dn', {
    delay: 40,
  });

  await expect(outputBox).toContainText('අපි සූම් මීටින් එකට ලීට් වෙන්නේ දෑන්', {
    timeout: 15000,
  });
});

test('Neg_UI_0001 – Immediate typing in the typing box', async ({ page }) => {
  test.fail(true, 'Negative UI test: expects mismatch with correct output.');

  const inputBox = page.getByRole('textbox');
  const outputBox = page.locator('div.whitespace-pre-wrap').first();

  await inputBox.pressSequentially('oyaa ayi mata kathnokara inne', { delay: 40 });

  await expect(outputBox).toContainText('ඔයා ඇයි මට කතානොකර ඉන්නේ?', { timeout: 15000 });
});
