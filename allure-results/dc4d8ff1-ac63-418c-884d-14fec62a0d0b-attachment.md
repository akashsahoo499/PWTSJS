# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginenv.spec.ts >> Using Environment
- Location: tests\loginenv.spec.ts:3:5

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('#menu_dashboard_index')
Expected substring: "Dashboard"
Error: element(s) not found

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('#menu_dashboard_index')

```

# Test source

```ts
  1  | import test, { expect } from "@playwright/test";
  2  | 
  3  | test('Using Environment',async({page})=>{
  4  |     await page.goto(process.env.Base_Url!)
  5  |     await page.waitForTimeout(2000)
  6  |     await page.locator(process.env.user_Loc!).fill(process.env.User_name!)
  7  |     await page.locator(process.env.pass_Loc!).fill(process.env.Pass_Word!)
  8  |     await page.locator(process.env.Login_btn!).click()
  9  |     //verify successful login
> 10 |     await expect(page.locator('#menu_dashboard_index')).toContainText('Dashboard')
     |                                                         ^ Error: expect(locator).toContainText(expected) failed
  11 | })
```