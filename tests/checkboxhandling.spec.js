import{test,expect}from '@playwright/test'
test('checkboxhandling',async({page})=>{
    page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    const option1= page.locator('input[value="option-1"]')
    await option1.click()
    const status = await option1.isChecked()
    console.log(status)
    await expect(option1).toBeChecked()
})
//if accidently use click() twice the checkbox will be unchecked
test('check2',async({page})=>{
    page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    const option2=page.locator('input[value="option-2"]')
    await option2.click()
    await option2.click()
})

//if accidently use check() twice the checkbox will remain as checked.
test('check3',async({page})=>{
    page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    const option4=page.locator('input[value="option-4"]')
    await option4.check()
    await option4.check()
})

//uncheck
test('check4',async({page})=>{
    page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    const option3=page.locator('input[value="option-3"]')
    await option3.uncheck()
    })

    //HW
test.only('HW',async({page})=>{
    page.goto('https://selenium.qabible.in/check-box-demo.php')
    const check4=page.locator('#gridCheck')
    if( await check4.isEnabled() && await check4.isVisible())
    {
        await check4.click()
        console.log("option 4 is visible n enabled")
    }
    else{
        console.log("option 4 is not visible n enabled")
    }
    await page.waitForTimeout(3000)
})