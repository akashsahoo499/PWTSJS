import test, { expect } from "@playwright/test";

test('Mouse Hover',async function({page}){
    //navigate url
    await page.goto('https://www.spicejet.com/')
    //mouse hover to Add-ons
    await page.getByText('Add-ons',{exact:true}).hover()
    //asert Extra Seat is visible
    await expect(page.getByText('Extra Seat').nth(1)).toBeVisible()
    await page.waitForTimeout(3000)
})


test("Multiple Actions",async function({page}){
    await page.goto('https://www.myntra.com/')
    await page.waitForTimeout(2000)
    //mouse hover to mens
    await page.locator('//*[@id="desktop-header-cnt"]/div[2]/nav/div/div[1]/div/a').hover()
    await page.waitForTimeout(2000)
    await page.locator("//a[@href='/men-tshirts']").click()
    await page.waitForTimeout(2000)
    console.log(await page.title())
    await page.waitForTimeout(2000)
    //mouse hover to kids & Toys
    await page.locator('//*[@id="desktop-header-cnt"]/div[2]/nav/div/div[3]/div/a').hover()
    await page.waitForTimeout(3000)
    await page.locator('//*[@id="desktop-header-cnt"]/div[2]/nav/div/div[3]/div/div/div/div/li[1]/ul/li[3]/a').click()
    //mouse hover toHome & Kitchen
    await page.locator('//*[@id="desktop-header-cnt"]/div[2]/nav/div/div[4]/div/a').hover()
    await page.waitForTimeout(3000)
    await page.locator('//*[@id="desktop-header-cnt"]/div[2]/nav/div/div[4]/div/div/div/div/li[1]/ul/li[2]/a').click()
    console.log(await page.title())
    await page.waitForTimeout(2000)
})