import{test,expect}from '@playwright/test'
import {LoginPage} from '../pages/loginPage'

test('verify login with valid credentials',async({page})=>{
    const loginpage=new LoginPage(page)
    const usernameValue='standard_user'
    const passwordValue='secret_sauce'
    await loginpage.openApplication()
    await loginpage.login(usernameValue,passwordValue)
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
    await page.waitForTimeout(3000)
})