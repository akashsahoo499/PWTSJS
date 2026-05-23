import test from "@playwright/test";

test('Verify Url Protocol',async({page})=>{
    //launch url
    await page.goto("http://tatacliq.com")
    await page.waitForTimeout(3000)
    const Expected : string="https://";
    const Actual=await page.url()
    if(Actual.startsWith(Expected))
    {
        console.log("url is secured:"+Expected+" "+Actual+" "+"Test Pass")
    }
    else
    {
        console.log("Url is not Secured:"+Expected+" "+Actual+" "+"Test Fail")
    }
})