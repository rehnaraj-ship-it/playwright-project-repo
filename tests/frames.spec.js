import{test,expect}from '@playwright/test'
test('frames',async({page})=>{
    await page.goto('https://demoqa.com/frames')
    const frameElement=page.frameLocator('#frame1')
    console.log(await frameElement.locator('#sampleHeading').textContent())
    
})
/*
=> What is a frame in playwright?
    A frame is a html document embedded inside another webpage, usually through an iframe 
    element.
=> How do u handle frames in playwright?
    We can use page.frameLocator() to locate elements inside an iframe and perform actions
    such as clicking, filling text and validating text.
=> What is the differnce btw page.locator() and page.frameLocator()?
    page.locator()- Locate elements in the main page.
    page.frameLocator() - Locate elements inside an iframe.
*/