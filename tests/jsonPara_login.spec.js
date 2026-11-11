import {test,expect}from '@playwright/test'
import { LoginPage } from '../pages/loginPage'
import logindata from '../utils/parameterizedTestdata.json'
for (const data of logindata ){
test(`login using valid credentials ${data.username} ${data.password}`,async({page})=>{
    const lp = new LoginPage(page)
    await lp.openApplication() 
    await lp.login(data.username,data.password)
    //await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
    await page.waitForTimeout(3000)
})}