const puppy = require("puppeteer");

const id ="99667661678";

async function main(){



    let browser = await puppy.launch({
        headless: false,
        defaultViewport: false,
    });

    let pages = await browser.pages();
    let tab = pages[0];
    await tab.goto("https://www.cowin.gov.in/home");
    await tab.click(".yellowbtn");
    await tab.type("", id);
    await tab.click(".next-btn.vac-btn.login-btn.md.button.button-solid.ion-activatable.ion-focusable.hydrated");


    
}

main();
