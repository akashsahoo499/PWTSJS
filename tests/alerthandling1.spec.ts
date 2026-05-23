import test from "@playwright/test";

test("Handling alert",async function({page}){
    await page.goto("https://mail.rediff.com/cgi-bin/login.cgi")
    await page.waitForTimeout(2000)
    page.on('dialog',async dialog=>{
        //return type of alert
        const alerttype= dialog.type()
        console.log("Alert type is::"+alerttype)
        const alertmessage=dialog.message()
        console.log("Alert message is::"+alertmessage)
        dialog.accept()
         await page.waitForTimeout(2000)
    })
    await page.getByText("Log In",{exact:true}).click()
    await page.waitForTimeout(2000)

})