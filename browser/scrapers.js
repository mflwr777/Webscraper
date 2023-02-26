const puppeteer = require('puppeteer');

const url = 'https://www.cefconnect.com/fund/USA'

async function scrapeProduct(url){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const [el] = await page.$x('//*[@id="pricing-history"]/tbody/tr[1]/td[2]'); 
    const src = await el.getProperty('src');
    const srcTxt = await src.jsonValue();

    console.log({srcTxt});

    /* browser.close(); */
}