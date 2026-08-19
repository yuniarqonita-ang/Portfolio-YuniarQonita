import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OUT_DIR = path.join(__dirname, 'public', 'assets', '03_Proyek_Website_PPID_PKTJ');

async function testAdminLogin() {
  console.log('Launching browser to login to admin panel...');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--ignore-certificate-errors'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  try {
    console.log('Navigating to login page: https://ppid.pktj.ac.id/login');
    await page.goto('https://ppid.pktj.ac.id/login', { waitUntil: 'networkidle2', timeout: 30000 });
    await new Promise((r) => setTimeout(r, 1000));

    // Capture Login Page
    const loginImg = path.join(OUT_DIR, '25_Login_Page_Admin.jpg');
    await page.screenshot({ path: loginImg, type: 'jpeg', quality: 92 });
    console.log('  -> Saved Login Page:', loginImg);

    // Look for input fields
    const inputs = await page.$$eval('input', (els) =>
      els.map((el) => ({ name: el.name, type: el.type, id: el.id, placeholder: el.placeholder }))
    );
    console.log('Found inputs on login page:', inputs);

    // Type credentials
    const userField = await page.$('input[name="email"], input[name="username"], input[type="email"], input[type="text"]');
    const passField = await page.$('input[name="password"], input[type="password"]');

    if (userField && passField) {
      await userField.click();
      await userField.type('admin@pktj.ac.id', { delay: 50 });
      await passField.click();
      await passField.type('ppidpktj2026', { delay: 50 });

      // Click submit button or press Enter
      console.log('Submitting login form...');
      const submitBtn = await page.$('button[type="submit"], input[type="submit"], button.btn');
      if (submitBtn) {
        await Promise.all([
          page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 30000 }).catch((e) => console.log('Nav wait:', e.message)),
          submitBtn.click(),
        ]);
      } else {
        await Promise.all([
          page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 30000 }).catch((e) => console.log('Nav wait:', e.message)),
          passField.press('Enter'),
        ]);
      }

      await new Promise((r) => setTimeout(r, 2000));
      console.log('Current URL after login:', page.url());

      // Capture Admin Dashboard
      const dashImg = path.join(OUT_DIR, '26_Admin_Dashboard.jpg');
      await page.screenshot({ path: dashImg, type: 'jpeg', quality: 92 });
      console.log('  -> Saved Admin Dashboard:', dashImg);

      // Find all admin sidebar / internal links
      const adminLinks = await page.$$eval('a[href]', (links) =>
        links
          .map((a) => ({ href: a.href, text: a.innerText.trim() }))
          .filter((a) => a.href.includes('ppid.pktj.ac.id') && !a.href.includes('logout') && a.text.length > 0)
      );

      console.log('Found admin navigation links:', adminLinks);

      // Capture key admin subpages
      let count = 27;
      const visited = new Set([page.url()]);

      for (const link of adminLinks) {
        if (!visited.has(link.href) && !link.href.includes('#') && !link.href.includes('javascript:')) {
          visited.add(link.href);
          const sanitizedText = link.text.replace(/[^a-zA-Z0-9]/g, '_').substring(0, 30);
          const filename = `${count}_Admin_${sanitizedText}.jpg`;
          const target = path.join(OUT_DIR, filename);

          console.log(`Capturing admin page: ${link.text} (${link.href}) -> ${filename}`);
          try {
            await page.goto(link.href, { waitUntil: 'networkidle2', timeout: 20000 });
            await new Promise((r) => setTimeout(r, 1000));
            await page.screenshot({ path: target, type: 'jpeg', quality: 92 });
            console.log(`  -> Saved ${filename}`);
            count++;
            if (count > 32) break; // limit to top modules
          } catch (e) {
            console.log(`  -> Error visiting ${link.href}:`, e.message);
          }
        }
      }
    } else {
      console.log('Could not find login inputs!');
    }
  } catch (err) {
    console.error('Error during admin capture:', err);
  } finally {
    await browser.close();
    console.log('Browser closed.');
  }
}

testAdminLogin();
