import{test,expect}from'@playwright/test'
import { LoginPage } from '../pages/loginPage'
import validLoginDatas from '../utils/testdata_credentials.json'
test('login using valid credentials',async({page})=>{
    const lp = new LoginPage(page)
    await lp.openApplication()
    const usernameValue=validLoginDatas.username
    const passwordValue=validLoginDatas.password
    await lp.login(usernameValue,passwordValue)
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
    await page.waitForTimeout(3000)
})