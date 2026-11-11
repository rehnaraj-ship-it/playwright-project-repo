# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: jsonPara_login.spec.js >> login using valid credentials standard_user1 secret_sauce
- Location: tests\jsonPara_login.spec.js:5:5

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected: "https://www.saucedemo.com/inventory.html"
Received: "https://www.saucedemo.com/"
Timeout:  5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    14 × locator resolved to <html lang="en">…</html>
       - unexpected value "https://www.saucedemo.com/"

```

```yaml
- text: Swag Labs
- main:
  - form "Login":
    - textbox "Username": standard_user1
    - textbox "Password": secret_sauce
    - alert:
      - button "Dismiss error"
      - text: "Epic sadface: Username and password do not match any user in this service"
    - button "Login"
  - heading "Accepted usernames are:" [level=4]
  - text: standard_user locked_out_user problem_user performance_glitch_user error_user visual_user
  - heading "Password for all users:" [level=4]
  - text: secret_sauce
```

# Test source

```ts
  1  | import {test,expect}from '@playwright/test'
  2  | import { LoginPage } from '../pages/loginPage'
  3  | import validLogindata from '../utils/parameterizedTestdata.json'
  4  | for (const data of validLogindata ){
  5  | test(`login using valid credentials ${data.username} ${data.password}`,async({page})=>{
  6  |     const lp = new LoginPage(page)
  7  |     await lp.openApplication() 
  8  |     await lp.login(data.username,data.password)
> 9  |     await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
     |                        ^ Error: expect(page).toHaveURL(expected) failed
  10 |     await page.waitForTimeout(3000)
  11 | })}
```