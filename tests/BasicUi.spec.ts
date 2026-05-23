import test from "@playwright/test";

test("Login Test",async({page})=>{
//Launch Url
await page.goto('http://orangehrm.qedgetech.com')
const username=page.locator('input#txtUsername')
//clear text
await username.clear();
await username.fill('Admin')
const password=page.locator('input#txtPassword')
await password.clear()
await password.fill('Qedge123!@#')
await page.locator('input.button').click({force:true})
})


test("Using cssSelector",async function({page}){
    await page.goto('https://flights.qedgetech.com/')
    await page.waitForTimeout(2000)
    await page.locator("[class^='form']").nth(1).fill('ranga@qedgetech.com')
    await page.locator("[type*='pas']").fill('Qedge123')
    await page.locator("[class$='btn-flat']").click({force:true})
    
})
