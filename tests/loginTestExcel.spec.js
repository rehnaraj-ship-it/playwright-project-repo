import {test,expect}from '@playwright/test'
import { LoginPage } from '../pages/loginPage'
import { getData } from '../utils/excelReader'
const credential = getData()
test('login using valid credentials',async({page})=>{
    for (const data of credential ){
    const lp = new LoginPage(page)
    await lp.openApplication() 
    await lp.login(data.username,data.password)
    //await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
    await page.waitForTimeout(3000)
}
})