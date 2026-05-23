import test, { expect } from "@playwright/test";

test("Handling Multiple tabs",async({page})=>{
    //navigate to url
    await page.goto("https://gmail.com")
    //Handle the "Help" popup
    const helpPagePromise=page.waitForEvent("popup")
    //click help link to open in new tab
    await page.getByText('Help').click()
    await page.waitForTimeout(3000)
    const helppage=await helpPagePromise;
    await helppage.getByText('Community').nth(2).click()
    console.log('help page title is::',await helppage.title())
    helppage.close()
    //handle privacy tab
    const privacypromise=page.waitForEvent('popup')
    //click privacy link in gmail
    await page.getByText('Privacy',{exact:true}).nth(0).click()
    await page.waitForTimeout(3000)
    const privacypage=await privacypromise
    //assert visible of FAQ text
    await expect(privacypage.getByText('FAQ').nth(0)).toBeVisible()
    await page.waitForTimeout(3000)
    console.log('privacy page title is::',await privacypage.title())
    privacypage.close()
    //handle popup
    const termspromise= page.waitForEvent('popup')
    //perform the action that troggers the popup
    await page.getByText('Terms',{exact:true}).click();
    //Now await the promise to get the page object
    const termspage=await termspromise;
    await termspage.waitForLoadState()
    console.log("terms page title::",await termspage.title());
    await page.waitForTimeout(3000)
    await termspage.close();
    await page.bringToFront()
    await page.locator('#identifierId').fill('pranga2010@gmail.com')
    await page.waitForTimeout(3000)
    page.close()
})