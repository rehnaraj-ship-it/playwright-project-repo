/*special locators in playwright are built-in locator methods such as getByRole(), getByText(), getByLabel() & getByPlaceholder()
that help us locate elements using user-facing properties and accessibilty information
They make automation scripts more readable and maintainable. */
/*getByRole()- Special locator in playwright used to locate a webelement based on its accessible role.
syntax: 
page.getByRole('role')
        OR
page.getByRole('role,{name:'accessible name'}')*/
import{test,expect} from '@playwright/test'
test('Special Locators:getByRole',async({page})=>{
const ShowMessage=page.getByRole('button',{name:'Show Message'})
})
/*getByText(): Is a special locator in playwright used to locate an element based on the visible text displayed on the web page
syntax: page.getByText('text')
 */
test('Special locators:getByText',async({page})=>{
    const getTotal=page.getByText('Get Total')
})
/*getByLabel()- Is a special locator to locate form elements such as inputfield, checkbox and radiobuttons using their associate
label text
syntax:
page.getByLabel('labeltext')
*/
test('specialLocator:getByLabel',async({page})=>{
    const enterMsg=page.getByLabel('Enter Message')
})
/*getByPlaceholder()-Is a special locator in playwright used to locate an inputelement using its placeholder text
syntax:
page.getByPlaceholder('placeholder text')
 */
test('specialocators',async({page})=>{
    const msg=page.getByPlaceholder('Message')
})
/*getByAltText()-is a spcl locator in playwright used to locate an element using its Alt attribure
syntax:page.getByAltText('alt text')
 */
test('specialLocaor:getByAltText',async({page})=>{
    const logo=page.getByAltText('logo')
})
/*getByTitle()-is aspcl locator in playwright used to locate an element using its title attribute
syntax:
page.getByTitle('title text') */
test('specialLocator-getByTitle',async({page})=>{
    const close=page.getByTitle('close')
})
/*getByTestId()- is a special locator in playwright used to locate an element using its test id
syntax:
page.getByTestId('test-id')
*/
test('specialLocator-getByTestId',async({page})=>{
    const button=page.getByTestId('login-button')
})