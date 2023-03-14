import puppeteer from 'puppeteer';

describe('Page start', () => {
  let browser;
  let page;

  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      devtools: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    page = await browser.newPage();
  });

  test('Кнопка есть на странице', async () => {
    await page.goto('http://localhost:9000');

    await page.waitForSelector('.popover');
  });

  test('Появляется подсказка', async () => {
    jest.setTimeout(20000);
    await page.goto('http://localhost:9000');

    const submit = await page.$('.popover');

    await submit.click();

    await page.waitForSelector('.popover-info');
  });

  afterEach(async () => {
    await browser.close();
  });
});