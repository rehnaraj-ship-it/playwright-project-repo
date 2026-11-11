# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginTest.spec.js >> verify login with valid credentials
- Location: tests\loginTest.spec.js:3:5

# Error details

```
Error: locator.fill: Target page, context or browser has been closed
Call log:
  - waiting for locator('#user-name')

```

# Test source

```ts
  1  | export class LoginPage
  2  | {
  3  |     constructor(page)
  4  |     {
  5  |         this.page=page
  6  |         this.username=page.locator('#user-name')
  7  |         this.password=page.locator('#password')
  8  |         this.loginButton=page.locator('login-button')
  9  |         this.errorMsg=page.locator('.error-message-container error')
  10 |     }
  11 |     async openApplication()
  12 |     {
  13 |         await this.page.goto('https://www.saucedemo.com/')
  14 |     }
  15 |     async login()
  16 |     {
> 17 |         await this.username.fill('standard_user')
     |                             ^ Error: locator.fill: Target page, context or browser has been closed
  18 |         await this.password.fill('secret_sauce')
  19 |         await this.loginButton.click()
  20 |     }
  21 | }
```