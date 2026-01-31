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

  await expect(outputBox).toContainText(/[අ-ෆ]/, { timeout: 30000 });

  await expect(outputBox).toContainText(/ශ්‍රී ලංකා|ශ්රීලංකා/i);
  await expect(outputBox).toContainText(/451/);
  await expect(outputBox).toContainText(/210/);
});

test('Pos_Fun_0005 – Casual greeting with problem statement', async ({ page }) => {

  const inputBox = page.getByRole('textbox');
  const outputBox = page.locator('div.whitespace-pre-wrap').first();

  await inputBox.pressSequentially(
    'Adoo machan kohomadha kaalekin nee ubata edhaa Thx karala yandath baeri vunaanee ithin ithin mokadha vennee',
    { delay: 40 }
  );

  await expect(outputBox).toContainText(/[අ-ෆ]/, { timeout: 15000 });
  await expect(outputBox).toContainText(/අඩෝ|මචන්/i);
});

test('Pos_Fun_0006 – Informal location question', async ({ page }) => {

  const inputBox = page.getByRole('textbox');
  const outputBox = page.locator('div.whitespace-pre-wrap').first();

  await inputBox.pressSequentially('Adoo uba kohedha yannee?', { delay: 40 });

  await expect(outputBox).toContainText(/[අ-ෆ]/, { timeout: 15000 });
  await expect(outputBox).toContainText(/අඩෝ|උබ/i);
});

test('Pos_Fun_0007 – Polite request for ID number', async ({ page }) => {

  const inputBox = page.getByRole('textbox');
  const outputBox = page.locator('div.whitespace-pre-wrap').first();

  await inputBox.pressSequentially('karuNaakaralaa mata ID Number eka kiyanna?', { delay: 40 });

  await expect(outputBox).toContainText(/[අ-ෆ]/, { timeout: 15000 });
  await expect(outputBox).toContainText(/කරුණාකරලා|ID/i);
});

test('Pos_Fun_0008 – Past tense with quantity', async ({ page }) => {

  const inputBox = page.getByRole('textbox');
  const outputBox = page.locator('div.whitespace-pre-wrap').first();

  await inputBox.pressSequentially('mama iiyee kiloo 50k issuvaa.', { delay: 40 });

  await expect(outputBox).toContainText(/[අ-ෆ]/, { timeout: 15000 });
  await expect(outputBox).toContainText(/ඊයේ|50/i);
});

test('Pos_Fun_0009 – Institution description with parentheses', async ({ page }) => {

  const inputBox = page.getByRole('textbox');
  const outputBox = page.locator('div.whitespace-pre-wrap').first();

  await inputBox.pressSequentially(
    'shrii lqqkaa thorathuru thaakShaNa aayathanaya(SLIIT) shrii laqqkaavee mulu vishvavidhYaala athurin 2 vana sThaanayata path vii aethi athara UGC anumatha vishvavidhYaalayaki.',
    { delay: 40 }
  );

  await expect(outputBox).toContainText(/[අ-ෆ]/, { timeout: 30000 });
  await expect(outputBox).toContainText(/SLIIT|UGC/i);
});

test('Pos_Fun_0010 – Blessing with spacing', async ({ page }) => {

  const inputBox = page.getByRole('textbox');
  const outputBox = page.locator('div.whitespace-pre-wrap').first();

  await inputBox.pressSequentially('dhiirgaayusha       laebeevaa!', { delay: 40 });

  await expect(outputBox).toContainText(/[අ-ෆ]/, { timeout: 30000 });
  await expect(outputBox).toContainText(/දීර්ගායුශ|ලැබේවා/i);
});

test('Pos_Fun_0011 – Historical disaster reference with date', async ({ page }) => {

  const inputBox = page.getByRole('textbox');
  const outputBox = page.locator('div.whitespace-pre-wrap').first();

  await inputBox.pressSequentially(
    '2004/12/26 vana dhina shrii lqqkaavata aethivuu sunaami thathvayen pudhgalayin 1700 kata vadaa vaedipirisak maraNayata pathviyalaksha3kata vadaa vaedi pirisak Avathaen viya.',
    { delay: 40 }
  );

  await expect(outputBox).toContainText(/[අ-ෆ]/, { timeout: 15000 });
  await expect(outputBox).toContainText(/2004|1700/i);
});

test('Pos_Fun_0012 – Casual what question', async ({ page }) => {

  const inputBox = page.getByRole('textbox');
  const outputBox = page.locator('div.whitespace-pre-wrap').first();

  await inputBox.pressSequentially('machan mokadha vennee?', { delay: 40 });

  await expect(outputBox).toContainText(/[අ-ෆ]/, { timeout: 15000 });
  await expect(outputBox).toContainText(/මචන්|මොකද/i);
});

test('Pos_Fun_0013 – Greeting with exclamation marks', async ({ page }) => {

  const inputBox = page.getByRole('textbox');
  const outputBox = page.locator('div.whitespace-pre-wrap').first();

  await inputBox.pressSequentially('suBha anaagathayak obata!jayaveevaa!', { delay: 40 });

  await expect(outputBox).toContainText(/[අ-ෆ]/, { timeout: 15000 });
  await expect(outputBox).toContainText(/සුභ|ජයවේවා/i);
});

test('Pos_Fun_0014 – Class schedule announcement', async ({ page }) => {

  const inputBox = page.getByRole('textbox');
  const outputBox = page.locator('div.whitespace-pre-wrap').first();

  await inputBox.pressSequentially(
    'Ada class eka 2025/01/30 ta thiyenavaa, ehema nisaa 10.30 a.m. ta enna!',
    { delay: 40 }
  );

  await expect(outputBox).toContainText(/[අ-ෆ]/, { timeout: 15000 });
  await expect(outputBox).toContainText(/class|2025|10\.30/i);
});

test('Pos_Fun_0015 – Question about food', async ({ page }) => {

  const inputBox = page.getByRole('textbox');
  const outputBox = page.locator('div.whitespace-pre-wrap').first();

  await inputBox.pressSequentially('uba kaeevadha?kohomadha kaeema?', { delay: 40 });

  await expect(outputBox).toContainText(/[අ-ෆ]/, { timeout: 15000 });
  await expect(outputBox).toContainText(/උබ|කෑවද/i);
});

test('Pos_Fun_0016 – URL and OTP instruction', async ({ page }) => {

  const inputBox = page.getByRole('textbox');
  const outputBox = page.locator('div.whitespace-pre-wrap').first();

  await inputBox.pressSequentially('oya URL eken gihillaa OTP eka send karanna.', { delay: 40 });

  await expect(outputBox).toContainText(/[අ-ෆ]/, { timeout: 15000 });
  await expect(outputBox).toContainText(/URL|OTP/i);
});

test('Pos_Fun_0017 – Affirmation capability statement', async ({ page }) => {

  const inputBox = page.getByRole('textbox');
  const outputBox = page.locator('div.whitespace-pre-wrap').first();

  await inputBox.pressSequentially('ov oyaata puluvan!', { delay: 40 });

  await expect(outputBox).toContainText(/[අ-ෆ]/, { timeout: 15000 });
  await expect(outputBox).toContainText(/ඔව්|පුලුවන්/i);
});

test('Pos_Fun_0018 – Government salary increase announcement', async ({ page }) => {

  const inputBox = page.getByRole('textbox');
  const outputBox = page.locator('div.whitespace-pre-wrap').first();

  await inputBox.pressSequentially(
    'labana vasaree mula sita apeekshitha paridhi siyaluma raajya seevayee niyuthu guru bavathungee vaetupa2.5%kin ihala naeqqviimata rajaya piyavara ganii.',
    { delay: 40 }
  );

  await expect(outputBox).toContainText(/[අ-ෆ]/, { timeout: 30000 });
  await expect(outputBox).toContainText(/2\.5|රාජ්ය/i);
});

test('Pos_Fun_0019 – Math question with fractions', async ({ page }) => {

  const inputBox = page.getByRole('textbox');
  const outputBox = page.locator('div.whitespace-pre-wrap').first();

  await inputBox.pressSequentially('puthee, 4veni gaanata aapu uththaree (2/4)/2 needha?', { delay: 40 });

  await expect(outputBox).toContainText(/[අ-ෆ]/, { timeout: 30000 });
  await expect(outputBox).toContainText(/පුතේ|2\/4/i);
});

test('Pos_Fun_0020 – Negation statement', async ({ page }) => {

  const inputBox = page.getByRole('textbox');
  const outputBox = page.locator('div.whitespace-pre-wrap').first();

  await inputBox.pressSequentially('ooka ohoma karanda baehae.', { delay: 40 });

  await expect(outputBox).toContainText(/[අ-ෆ]/, { timeout: 15000 });
  await expect(outputBox).toContainText(/ඕක|බැහැ/i);
});

test('Pos_Fun_0021 – Weather forecast with measurement', async ({ page }) => {

  const inputBox = page.getByRole('textbox');
  const outputBox = page.locator('div.whitespace-pre-wrap').first();

  await inputBox.pressSequentially(
    'Adha dhina varShaapathanaya 50mm pamaNa vana bava kaalaguNa dhepaarthameenthuva pavasayi.',
    { delay: 40 }
  );

  await expect(outputBox).toContainText(/[අ-ෆ]/, { timeout: 30000 });
  await expect(outputBox).toContainText(/50|වර්ෂාපතනය/i);
});

test('Pos_Fun_0022 – Cabinet meeting decisions', async ({ page }) => {

  const inputBox = page.getByRole('textbox');
  const outputBox = page.locator('div.whitespace-pre-wrap').first();

  await inputBox.pressSequentially(
    'Adha dhina kaebinat maNdalaya raesvuu athara ehidhii vaedhagath thiirana raesak ganu laebiiya.',
    { delay: 40 }
  );

  await expect(outputBox).toContainText(/[අ-ෆ]/, { timeout: 15000 });
  await expect(outputBox).toContainText(/කැබිනට්|තීරන/i);
});

test('Pos_Fun_0023 – Casual opportunity reference', async ({ page }) => {

  const inputBox = page.getByRole('textbox');
  const outputBox = page.locator('div.whitespace-pre-wrap').first();

  await inputBox.pressSequentially('eeka maru chance eka.', { delay: 40 });

  await expect(outputBox).toContainText(/[අ-ෆ]/, { timeout: 15000 });
  await expect(outputBox).toContainText(/ඒක|chance/i);
});

test('Pos_Fun_0024 – Affirmation of correctness', async ({ page }) => {

  const inputBox = page.getByRole('textbox');
  const outputBox = page.locator('div.whitespace-pre-wrap').first();

  await inputBox.pressSequentially('oyaa hari kaethayi', { delay: 40 });

  await expect(outputBox).toContainText(/[අ-ෆ]/, { timeout: 15000 });
  await expect(outputBox).toContainText(/ඔයා|හරි/i);
});
