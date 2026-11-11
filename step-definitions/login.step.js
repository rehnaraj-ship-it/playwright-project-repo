//import { Given,When,Then }from "@cucumber/cucumber"
//import { chromium, expect } from "@playwright/test"
const{Given,When,Then}=require('@cucumber/cucumber')
const{chromium}=require('playwright')
let browser
let page
Given('User is on the login page',async function(){
    browser = await chromium.launch({headless:false})
    page = await browser.newPage() 
    await page.goto('https://www.saucedemo.com/')
})
When('User enters valid user-name and password',async function() {
    await page.locator('#user-name').fill('standard_user')
    await page.locator('#password').fill('secret_sauce')
    await page.locator('.login-button').click()
    
})
Then('User should be logged in',async function(){
    await page.locator('.inventory_item').first().isVisible()
})