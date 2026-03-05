const { chromium } = require('playwright');
const path = require('path');

async function capture(page, url, name) {
    console.log(`Navigating to ${url}...`);
    try {
        await page.goto(url, { waitUntil: 'load', timeout: 60000 });
        await page.waitForTimeout(5000); // Wait for shaders and animations
        console.log(`Taking screenshot for ${name}...`);
        await page.screenshot({ path: `public/verify_${name}.png`, fullPage: false });
        console.log(`Saved verify_${name}.png`);
    } catch (e) {
        console.error(`Failed to capture ${name}:`, e);
    }
}

(async () => {
    console.log('Starting full site verification (Resilient Mode)...');
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.setViewportSize({ width: 1440, height: 900 });

    try {
        await capture(page, 'http://localhost:3000', 'home');
        await capture(page, 'http://localhost:3000/artesania', 'artesania');
        await capture(page, 'http://localhost:3000/archivo', 'archivo');
    } finally {
        await browser.close();
    }
})();
