import{test,expect}from '@playwright/test'
test('title-validation',async({page})=>{
    await page.goto('https://selenium.qabible.in')
    const title= await page.title()
    console.log(title)
    await expect(page).toHaveTitle(title)
})

test.only('url-validation',async({page})=>{
    await page.goto('https://selenium.qabible.in')
    const url=page.url()
    await expect(page).toHaveURL(url)
})