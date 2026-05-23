import test, { expect } from "@playwright/test";
 import * as dotenv from 'dotenv';
 dotenv.config()
test('Using Environment',async({page})=>{
    await page.goto(process.env.Base_Url!)
    await page.waitForTimeout(2000)
    await page.locator(process.env.user_Loc!).fill(process.env.User_name!)
    await page.locator(process.env.pass_Loc!).fill(process.env.Pass_Word!)
    await page.locator(process.env.Login_btn!).click()
    //verify successful login
    await expect(page).toHaveURL(/.*dashboard/)
})