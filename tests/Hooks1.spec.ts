import test from "@playwright/test";

test.beforeEach(async({page})=>{
    await page.goto('http://orangehrm.qedgetech.com/')
    await page.locator('#txtUsername').fill('Admin')
    await page.locator('#txtPassword').fill('Qedge123!@#')
    await page.locator('#btnLogin').click()
    await page.waitForTimeout(2000)
    console.log('Running in Beforeeach')
})
test('click Admin',async({page})=>{
    await page.locator('#menu_admin_viewAdminModule').click()
    await page.waitForTimeout(2000)
    console.log("Executing Admin test")
})
test('click Pim',async({page})=>{
    await page.locator('#menu_pim_viewPimModule').click()
    await page.waitForTimeout(2000)
    console.log("Executing pim test")
})
test('click leave',async({page})=>{
    await page.locator('#menu_leave_viewLeaveModule').click()
    await page.waitForTimeout(2000)
    console.log("Executing leave test")
})
test.afterEach(async({page})=>{
    await page.waitForTimeout(2000)
    page.close()
    console.log('Running in aftereach')
})