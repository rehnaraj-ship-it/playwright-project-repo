import{test,expect}from '@playwright/test'
test('calender-validation',async({page})=>{
    await page.goto('https://selenium.qabible.in/date-picker.php')
    page.locator('#single-input-field').click()
    const targetYear=1997
    await expect(page.locator('.datepicker-dropdown ')).toBeVisible()
    //wait until the calender popup element is visible on the page, and verify that it is displayed
    //we do not immediately interact with calender bcoz, UI may take time to load
    const switchBUtton=page.locator('.datepicker-switch:visible')
    //visible is used to filter n select only visible elements
    await switchBUtton.click()
    await switchBUtton.click()
    let attempt=10 //to avoid infinite loop
    while(attempt--)
    {
        const decades=await switchBUtton.innerText() 
        //innertext()- gets the text visible on the screen
        //reads the current calender header text(2020-2029)
        const startYear = parseInt(decades.split('-')[0].trim())
        /*decades="2020-2029"
        decades.split('-')=[" 2020 "," 2029 "]
        trim()=["2020","2029"] -> remove the extra space from the beginning and end of a string
        parseInt()-> converts string into integer
        [0]-> so that it only takes data in th 0th position which is 2020
        */
    
        if(targetYear>=startYear && targetYear<=startYear+9)
        {
            break
        }
        await page.locator('.prev:visible').click()
    }
    /*
        if loop:
        1997>=2020 false
        1997>=2010 false
        1997>=2000 false
        1997>=1990 true && 1997<=1990+9 true  => break*/
    await page.locator('.year:visible').filter({hasText:"1997"}).click()
    //hasText()-> to filter currently visible
    await page.locator('.month:visible').filter({hasText:"Aug"}).click()
    await page.locator(".day:not(.old):not(.new)").filter({ hasText:/^6$/ }).click()
    await page.locator('#button-one').click()
})