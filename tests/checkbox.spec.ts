import test, { expect } from "@playwright/test";

test("Handle checkbox",async({page})=>{
    //navigate url
    await page.goto('https://mail.rediff.com/cgi-bin/login.cgi')
    await page.waitForTimeout(3000)
    //verify checkbox is checked or unchecked
    const checkbox =page .getByText('Remember my email ID on this computer')
    const status:boolean=await checkbox.isChecked()
    console.log("check box True/False::"+status)
    //assert checkbox to be checked
    await expect(checkbox).toBeChecked()
    //uncheck from check
    await checkbox.uncheck()
    //assert check box should be checked
    await expect(checkbox).not.toBeChecked()
    await page.waitForTimeout(3000)
})


test("counting checkboxes",async({page})=>{
    //navigate url
    await page.goto('file:///D:/RECORDED%20VIDEOS/PLAYWRIGHT/checkbox_1_lyst1778139173032.html')
    //get collection of all checkboxes
    const allcheckboxes=page.locator("//input[@type='checkbox']")
    //count all checkboxes
    const countcheck=await allcheckboxes.count()
    console.log(`No of checkboxes ${countcheck}`)
    //iterate all checkboxes    
    for(let i=0;i<countcheck;i++)
    {
        const eachcheckbox=await allcheckboxes.nth(i)
        //verify each checkbox which is checked or not
        const checkbox_status:boolean=await eachcheckbox.isChecked()
        //get each checkbox name from collection 
        const eachcheckboxname=await eachcheckbox.getAttribute("value")
        console.log(checkbox_status+" "+eachcheckboxname)
        if(checkbox_status)
        {
            await eachcheckbox.uncheck()
        }
        else{
            await eachcheckbox.click()
        }
        await page.waitForTimeout(3000)
    }
})