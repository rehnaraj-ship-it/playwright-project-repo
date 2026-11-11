import{test,expect}from '@playwright/test'
//'@playwright/test' =>official playeright test runner.Used to write , exceute and validate
//test => to import testcase
//expect => to validate
test('url launch',async({browser})=>{
    const context=await browser.newContext()
    const page=await context.newPage()
    await page.goto('https://www.flipkart.com/')
})
/*async-marks a func as asynchronous
await-waits for an asynchronous operation to finish 
browser-playwright fixture: fixture in plawright is a reusable setup mechanism that provide 
a required environment to a test.
playwright provides built in fixtures such as: page,browser,context and request
fixtures improve codes reusability, reduce duplicate setup code n make test scripts easier to
maintain.
browser: provides the browser instance
context:provides a browser context or version(eg.incognito : clear env without any cookies or
history)
page:provides a browser page or tab

*/
test('url launch shortcut',async({page})=>{
    await page.goto('https://selenium.qabible.in/')
})

/* WEBELEMENTS:
Webelements are the building blocks of a web page, representing individual elements such as buttons,
 links, test etc.
 In playwright automation webelemnets are used interact with a webpage, enabling actions like 
 clicking buttons or links, entering test into input fields etc.
 LOCATOR:
 Locator is used in playwright to find and interact with webelements.
*/
