import{test,expect}from '@playwright/test'
test('general locators',async({page})=>{
    await page.goto('https://selenium.qabible.in/simple-form-demo.php')
    //const webelementname = page.locator('locatorvalue')
    const message = page.locator('#single-input-field')
    await  message.fill("hello")
    const ShowMessage = page.locator('#button-one')
    await ShowMessage.click()
})
/*
playwright provide several built-in locators such as:
1.getByRole()
2.getByText()
3.getBYLabel()
4.getByPlaceholder()
5.getByAltText()
6.getByTitle()
7.getByTestId()
We can also use page.locator() with css selectors or xpath to identify elements.

SYNTAX(general locator):
 const webelementname = page.locator('locatorvalue')
*/
//css selectors
test('css selectors',async({page})=>{
    //id=#id
 const message = page.locator('#single-input-field')
 const ShowMessage = page.locator('#button-one')
 const autoclosable_success=page.locator('#autoclosable-btn-success')
 const normal_warning=page.locator('#normal-btn-warning')
 //class-.class
 const date =page.locator('.form-control')
 const table=page.locator('.card-header')

 //tag & attribute = tagname[attribute='value']
const msg=page.locator("input[placeholder='Message']")
})

//xpath
test('xpath',async({page})=>{
/*
2 types
1.Absolute xpath-eg:/html/body/section/div/div/div[2]/div[1]/div/div[2]/form/button
    -Starts from the root node it may break easily.
2.Relative xpath
    -Starts from anywhere in the DOM.
    -Syntax: //tagname[@attribute=value]
    -text()
    -syntax://tagname[text()='value']
    -contains
    -syntax://tagname[contains(@attribute,'value')]
    -syntax://tagname[contains(text(),'value')]
    -starts-with
    -syntax://tagname[starts-with(@attribute,'value')]
    -starts-with(type())
    -syntax://tagname[starts-with(text(),'value')]
    -and-attribute()
    -syntax://tagname[@attribute='value' and @attribute='value']
    -and-text()
    -syntax://tagname[@attribute='value' and text()='value']
*/
//xpath
const msg=page.locator("//input[@placeholder='Message']")
const gettotal=page.locator('//input[@id="button-two"]')
//text()
const showmsg=page.locator("//button[text()='Show Message']")
const Gettotal=page.locator("//button[text()='Get Total']")

//contains - attribute
const mesg=page.loactor("//input[contains(@id,'single-input-f')]")
const getTotal=page.locator("//button[contains(@id,'button-t')]")

//contains - text()
const showmesg=page.loactor("//button[contains(text(),'Show Me')]")
const gEttotal=page.loactor("//button[contains(text(),'Get To')]")

//starts-with: attribute
const messg=page.locator("//input[starts-with(@id,'single-input')]")
const showmssg=page.loactor('//button[starts-with(@id,"button-o")]')

//starts-with: text()
const shwmsg=page.locator('//button[starts-with(text(),"Show Mess")]')
const button2=page.locator('//button[starts-with(text(),"Get Tot")]')

//and
//-attribute
const entervalue1=page.locator('//input[@type="text" and @id="value-a"]')
const datepicker=page.locator('//input[@type="text" and @class="form-control datepicker"]')
//-text()
const shwdate1=page.locator('//button[@id="button-one" and text()="Show Date"]')
const submit=page.loctor('//button[@type="submit" and text()="Submit data"]')
})