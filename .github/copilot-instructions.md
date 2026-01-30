# SwiftTranslator Playwright Test Automation

## Project Overview
End-to-end testing suite for SwiftTranslator (https://www.swifttranslator.com/), a Sinhala-English language translator. Tests verify romanized Sinhala input converts correctly to Sinhala Unicode script.

## Test Architecture

### Key Files
- **[tests/translator.spec.js](../tests/translator.spec.js)**: All test specs live here
- **[playwright.config.js](../playwright.config.js)**: Multi-browser config (Chromium, Firefox, WebKit)
- Test artifacts: `playwright-report/` (HTML reports), `test-results/` (screenshots/traces)

### Test Structure Pattern
All tests follow this common pattern:
```javascript
test.beforeEach(async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
});
```

**Standard locators:**
- Input: `page.getByRole('textbox')`
- Output: `page.locator('div.whitespace-pre-wrap').first()`

**Input simulation:** Always use `pressSequentially()` with `{ delay: 40 }` to trigger real-time translation

**Assertions:** Set `{ timeout: 15000 }` for translation to complete

**CRITICAL:** Tests MUST run with `workers: 1` (sequential execution). The translation API cannot handle parallel requests from multiple browsers - this causes all tests to fail with empty outputs. Config is already set to `workers: 1`.

## Language-Specific Testing

### Sinhala Unicode Validation
Tests verify Sinhala character range using regex: `/[අ-ෆ]/`

### Mixed Language Handling
Tests check for both romanized and Sinhala text. Examples:
- `ID` may appear as `ID` or `අයිඩී` 
- Use case-insensitive regex: `/ID|අයිඩී/i`
- For flexible grammar variations: `/හම්බුනද|ලැබුන/i` (multiple valid translations)

## Running Tests

**Execute tests:**
```powershell
npx playwright test
```

**View HTML report:**
```powershell
npx playwright show-report
```

**Run specific browser:**
```powershell
npx playwright test --project=chromium
```

## Test Naming Convention
Format: `{Status}_{Type}_{ID} – {Description}`
- Status: `Pos` (Positive), `Neg` (Negative)
- Type: `Fun` (Functional)
- ID: Sequential number (e.g., `0001`, `0002`)

Example: `Pos_Fun_0001 – Convert singular past tense sentence`

## Common Patterns

### Adding New Test Cases
1. Follow the existing test structure in [translator.spec.js](../tests/translator.spec.js)
2. Use `pressSequentially()` with 40ms delay for input
3. First assertion should check for Sinhala characters: `await expect(outputBox).toContainText(/[අ-ෆ]/, { timeout: 15000 })`
4. Add specific validations for expected translations (case-insensitive when checking informal terms)
5. Use flexible regex for words with multiple valid translations

### Debugging Failed Tests
- Check `test-results/` for screenshots and traces
- Use `--debug` flag: `npx playwright test --debug`
- Verify 15-second timeout is sufficient for translation API response
