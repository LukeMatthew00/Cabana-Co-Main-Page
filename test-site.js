import puppeteer from 'puppeteer';
import path from 'path';

(async () => {
  console.log('Starting local website automation check...');
  
  // Launch headless browser
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  
  // Capture page logs and errors
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', err => console.error('PAGE ERROR:', err));
  
  // Set a premium high-res viewport
  await page.setViewport({ width: 1440, height: 900 });

  try {
    // Navigate to local dev server
    console.log('Navigating to http://localhost:3000/...');
    await page.goto('http://localhost:3000/', { waitUntil: 'networkidle2' });
    
    // Wait for preloader to fade out
    console.log('Waiting for preloader...');
    await page.waitForFunction(() => {
      const preloader = document.getElementById('preloader');
      return preloader && preloader.style.display === 'none';
    }, { timeout: 10000 });

    // Wait a brief moment for entry animations to settle
    await page.evaluate(() => new Promise(resolve => setTimeout(resolve, 1500)));

    // Take screenshot of Hero Section
    const heroPath = 'C:/Users/XxX/.gemini/antigravity/brain/40794207-1621-450a-9154-5c80bc379473/screenshot_hero.png';
    console.log(`Capturing Hero screenshot to ${heroPath}...`);
    await page.screenshot({ path: heroPath });

    // Scroll down slightly to trigger doors opening and zoom
    console.log('Scrolling to zoom past the doors...');
    await page.evaluate(() => {
      window.scrollTo(0, 1000); // Scroll down 1000px to trigger the zoom and text reveal
    });
    await page.evaluate(() => new Promise(resolve => setTimeout(resolve, 1500)));

    // Take screenshot of zoomed balcony state with texts
    const zoomPath = 'C:/Users/XxX/.gemini/antigravity/brain/40794207-1621-450a-9154-5c80bc379473/screenshot_hero_zoomed.png';
    console.log(`Capturing Zoomed Hero screenshot to ${zoomPath}...`);
    await page.screenshot({ path: zoomPath });

    // Scroll down to about section
    console.log('Scrolling to about...');
    await page.evaluate(() => {
      window.scrollTo(0, 1600); // Increased because pinning section length is now +=150%
    });
    await page.evaluate(() => new Promise(resolve => setTimeout(resolve, 800)));
    const aboutPath = 'C:/Users/XxX/.gemini/antigravity/brain/40794207-1621-450a-9154-5c80bc379473/screenshot_about.png';
    await page.screenshot({ path: aboutPath });

    // Open Modal
    console.log('Triggering "Initiate Brief" Modal...');
    await page.click('#briefBtn');
    await page.evaluate(() => new Promise(resolve => setTimeout(resolve, 600))); // Wait for fade in
    
    const modalFormPath = 'C:/Users/XxX/.gemini/antigravity/brain/40794207-1621-450a-9154-5c80bc379473/screenshot_modal_form.png';
    console.log(`Capturing Modal Form screenshot to ${modalFormPath}...`);
    await page.screenshot({ path: modalFormPath });

    // Fill in the Onboarding Form
    console.log('Filling form fields...');
    await page.type('#clientName', 'James Cabana');
    await page.type('#clientEmail', 'james@cabana.co');
    await page.type('#clientCompany', 'Cabana & Co. International');
    
    // Select Scale A: Enterprise Domination
    await page.select('#targetScale', 'scale-a');
    
    // Check consent checkbox by clicking label
    await page.click('.checkbox_label');
    
    // Submit
    console.log('Submitting marketing brief...');
    await page.click('#submitBriefBtn');
    
    // Wait for boarding pass ticket reveal animations
    await page.evaluate(() => new Promise(resolve => setTimeout(resolve, 1500)));
    
    const successPath = 'C:/Users/XxX/.gemini/antigravity/brain/40794207-1621-450a-9154-5c80bc379473/screenshot_modal_success.png';
    console.log(`Capturing virtual Boarding Pass ticket to ${successPath}...`);
    await page.screenshot({ path: successPath });

    console.log('Automation checks completed successfully!');
  } catch (error) {
    console.error('Automation error occurred:', error);
  } finally {
    await browser.close();
    console.log('Browser closed.');
  }
})();
