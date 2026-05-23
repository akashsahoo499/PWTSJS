import test from "@playwright/test";

test('Verify Title of the page',async function({page}) {
    //launch url in browser
    await page.goto('http://google.com')
    //override default time(hard time)
    await page.waitForTimeout(2000)
    const Expected_Title="Google"
    const Actual_Title=await page.title();
    if(Actual_Title.includes(Expected_Title))
    {
        console.log("Title is Matching :"+Expected_Title+" "+Actual_Title+" "+"Test Pass")
    }
    else
    {
        console.log("Title is Not Matching :"+Expected_Title+" "+Actual_Title+" "+"Test Fail")
    }
    
}

)