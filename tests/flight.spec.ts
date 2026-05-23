import test from "@playwright/test";

test("Get All Labels",async function({page}){
    await page.goto("http://flights.qedgetech.com/")
    await page.waitForTimeout(2000)
    await page.getByText('Register ',{exact:true}).click()
    //get all labels from page
    const allelements=await page.locator('#identicalForm label').allTextContents()
    console.log("No of labels"+allelements.length)
    console.log(allelements)
})