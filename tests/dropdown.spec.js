import{test,expect}from '@playwright/test'
test('drop down- by index',async({page})=>{
    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    const java=page.locator('#dropdowm-menu-1')
    //index : await webelementname.selectOption({index:index position})
    await java.selectOption({index:1})
})

test('drop down-by value',async({page})=>{
    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    const eclipse=page.locator('#dropdowm-menu-2')
    //value : await webelementname.selectOption({value:"value name"})
    await eclipse.selectOption({value:"testng"})
})

test('drop down-by text',async({page})=>{
    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    const html=page.locator('#dropdowm-menu-3')
    //text : 
    await html.selectOption({label:'JavaScript'})
})

//custom dropdown
test('custom dropdown',async({page})=>{
    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    const java =page.locator('#dropdowm-menu-1')
    await java.click()
    const python =page.locator('option[value="python"]')
    await python.click()
})