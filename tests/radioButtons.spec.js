import{test,expect} from '@playwright/test'
test('radio buttons',async({page})=>{
    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    const green=page.locator("input[value='green']")
    //await green.check()
    await green.click()
})

test('radioButtons1',async({page})=>{
    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    const orange=page.locator("input[value='orange']")
    await orange.click()
    const status=await orange.isChecked()//check whether orange radiobutton is selected 
    console.log(status)  
})
test('radiobuttonvalidation',async({page})=>{ 
    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html') 
    const blue=page.locator('//input[@value="blue"]') 
    await blue.click() 
    await expect(blue).toBeChecked() 
})

/*Methods for radio buttons
check()- select radio button
click()-select radio button
isChecked()-returns true/false
toBeChecked()-validation
isVisible()-to check whether the radio button is visible or not
isEnabled()-to verify whether the radio button is enabled
isDisabled()-to verify whether the radio button is diasabled
*/
//check box
test('formSumbit',async({page})=>{
    await page.goto('https://selenium.qabible.in/form-submit.php')
    const firstName=page.locator("input[placeholder='First name']")
    await firstName.fill("Blair")
    const lastName=page.locator("input[placeholder='Last name']")
    await lastName.fill("Waldorf")
    const username=page.locator("input[placeholder='Username']")
    await username.fill("queenB")
    const city=page.locator("input[placeholder='City']")
    await city.fill("Manhattan")
    const state=page.locator("input[placeholder='State']")
    await state.fill("NY")
    const zip=page.locator("input[placeholder='Zip']")
    await zip.fill("6920")
    const terms=page.locator('#invalidCheck')
    await terms.check()
    const submit=page.locator('button[class="btn btn-primary"]')
    await submit.click()
})

//HW
test('HW',async({page})=>{
    await page.goto('https://selenium.qabible.in/radio-button-demo.php')
    const male=page.locator('#inlineRadio1')
    if(await male.isVisible())
    {
        console.log("Male button is visible")
        await male.check()
    }
    else{
        console.log("Male button is not visbile")
    }
})

test.only('HW1',async({page})=>{
    await page.goto('https://selenium.qabible.in/radio-button-demo.php')
    const female=page.locator('#inlineRadio2')
    if(await female.isVisible() && await female.isEnabled())
    {
        console.log("Female button is visible and enabled")
        await female.check()
    }
    else{
        console.log("Female button is not visbile and enabled")
    }
})