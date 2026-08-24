import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('https://yuniarqonita-ang.github.io/Portfolio-YuniarQonita/', { waitUntil: 'networkidle2', timeout: 30000 });
  
  await page.screenshot({ path: 'live_screenshot_hero.png' });
  console.log('Hero screenshot taken');
  
  // Find all buttons
  const buttons = await page.$$eval('button', els => els.map(e => ({ text: e.innerText, class: e.className })));
  console.log('Buttons found:', buttons);

  // Click the CV button
  const cvBtn = await page.$('.btn-primary');
  if (cvBtn) {
    await cvBtn.click();
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({ path: 'live_screenshot_modal.png' });
    console.log('Modal screenshot taken');
  }

  // Also check if Experience section has PPID PKTJ
  const expText = await page.$eval('#experience', el => el.innerText);
  console.log('Experience section snippet:', expText.substring(0, 300));

  await browser.close();
})();
