import test from "@playwright/test";

test("Handling non select listbox",async function({page}){
    //navigate url
    await page.goto("http://gmail.com")
    await page.waitForTimeout(2000)
    await page.locator("//div[@class='VfPpkd-aPP78e']").click()
   // await page.locator("[role='option']").click()
   await page.waitForTimeout(2000)
   const alloptions=await page.locator("//div[@jsname='xl07Ob']/ul/li").allInnerTexts()
   console.log("no of options are::",alloptions.length)
   for(const eachoption of alloptions){
    console.log(eachoption)
   }
})