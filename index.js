const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: true});
  const page = await browser.newPage();
  await page.setViewport({ width: 1800, height: 768});
  await page.goto('https://my.yad2.co.il/login.php');
  await page.waitForSelector('#userName');
  await page.$eval('#userName', el => el.value = 'USERNAME YAD2');
  await page.waitForSelector('#password');
  await page.$eval('#password', el => el.value = 'PASSWORD YAD 2');
  await page.click('#submitLogonForm');
  await page.waitForSelector('.content-wrapper.active');
  await page.goto('https://my.yad2.co.il/newOrder/index.php?action=personalAreaViewDetails&CatID=3&SubCatID=0&OrderID=42548191');
  await page.waitForSelector('#bounceRatingOrderBtn');
  await page.click('#bounceRatingOrderBtn');
  await page.waitForSelector('.viewCommandGreenBtn');
  await page.screenshot({path: (new Date().toLocaleString().split('/').join('-').split(':').join('-').replace(', ', '-').replace(' PM', '').replace(' AM') +'.png')});
  await browser.close();
})();