//"type": "common.js"
const {Given,When,Then,Before,After,BeforeAll,AfterAll,BeforeStep,AfterStep}=require('@cucumber/cucumber')
const {chromium}=require('playwright')
const assert=require( 'assert')
let browser,page,context
BeforeAll(async function(){
browser=await chromium.launch({headless:false})
}) 
AfterAll(async function(){
await browser.close()
})
Before(async function(){
context=await browser.newContext()
page=await context.newPage()
})
After(async function(scenario){
try{
if(scenario.result.status===Status.FAILED)
{
    await page.screenshot({
    path:`screenshot/${Date.now}.png`
    })
}
}
catch(error){
console.log("error taking screenshot",error)
}
finally{
    if(context)
    {
        await context.close()
    }
}

})
BeforeStep(async function(){
console.log("executing new step")
})
AfterStep(async function(){
console.log("execution completed")
})
Given('user is on saucedemo application page',async function(){
    await page.goto('https://www.saucedemo.com/')
})
When('user logs in the username {string} and {string}',async function(username,password){
await page.locator('#user-name').fill(username)
await page.locator('#password').fill(password)
await page.locator('#login-button').click()
})
Then('user should see the {string}',async function(result){
if(result==='inventory page')
{
    await page.waitForSelector('//span[@data-test="title"]')
}
else if(result==='error message')
{
  const error=await page.locator('//h3[@data-test="error"]').textContent()
  assert.ok(error.includes('Epic sadface:'))
}
})
Then('inventory item count should be {string}',async function(count){
if(count==='0')return
const items=await page.locator('.inventory_item').count()
assert.strictEqual(items,Number(count))
})