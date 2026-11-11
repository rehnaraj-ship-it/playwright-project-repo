import{test,expect}from'@playwright/test'
test('simple alert',async({page})=>{
    await  page.goto('https://selenium.qabible.in/javascript-alert.php')
    page.on('dialog',async dialog=>{
        expect(dialog.message()).toBe('I am a Javascript alert box!')
        console.log(dialog.message())
        console.log(dialog.type())
        await dialog.accept()
    })
    const clickMe=page.locator('button[onclick="jsAlert()"]')
     await clickMe.click()


})
/*on() is used to listen for events. When an alert appears,run this function
'dialog' = event, used to detect or listen when an alert appears.
dialog = object,used to handle or cntrl the alert.
toBe()=is used to check whether two values are exactly equal
dialog.message()=is used to get the text inside the alert popup
 */
test('confirmation alert',async({page})=>{
    await  page.goto('https://selenium.qabible.in/javascript-alert.php')
    page.on('dialog',async dialog=>{
        expect(dialog.message()).toBe('Press a button!')
        console.log(dialog.message())
        console.log(dialog.type())
        await dialog.dismiss()
    })
    const clickME=page.locator('button[onclick="jsConfirm()"]')
    await clickME.click()
})
test.only('promt',async({page})=>{
    await page.goto('https://selenium.qabible.in/javascript-alert.php')
    page.on('dialog', async dialog=>{
        expect(dialog.message()).toBe('Please enter your name')
        console.log(dialog.message())
        console.log(dialog.type())
        await dialog.accept('Rachel')
    })
    const clickme=page.locator('button[onclick="jsPrompt()"]')
    await clickme.click()
})