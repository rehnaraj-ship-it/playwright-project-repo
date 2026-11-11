/*Visual testing in playwright verifies the visual appearence of a web page by com[paring 
the current screenshot with a previously saved baseline screenshot.
For a static page, capture the baseline using toHaveScreenshot(), then run the test again 
to detect unexpected changes
-color chng
-layout issue
-allignment issue
-font changes
-missing or extra elements
-space issues etc
How does visual testing work?
1.Capture the baseline screenshot:
    Take the first scrnsht of the page,this becomes the expected appearence, called the 
    baseline scrnsht.
2.Run the test again:
    Playwright captures a new screenshot of the same page.
3.Compare scrnshts:
    Playwright compare the new scrnshts with the baseline and report the visual 
    differences.*/

import{test,expect}from'@playwright/test'
test('visual-testing',async({page})=>{
    await page.goto('https://www.saucedemo.com/')
    await page.waitForLoadState('networkidle')
    await expect(page).toHaveScreenshot('sourcedemo.png',{threshold:1})
})
/**
 threshold:0 -> no difffernce allowed
 0.1-> very small difference allowed
 0.2->small dfrnc allowed
 1->large dfrnc allowed
 */