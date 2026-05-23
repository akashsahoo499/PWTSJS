import test, { expect } from "@playwright/test";

test('Validate Login Test',async function({page}){
    await page.goto('http://orangehrm.qedgetech.com/')
    await page.waitForTimeout(2000)
    //store username text
    const username=page.locator('#txtUsername')
    await username.clear()
    await username.fill('Admin3')
    //inputvalue() returns the value for the matching <input> or <textarea> or <select> element
     const usernametext=await username.inputValue()
     console.log(usernametext)
     await expect(username).toHaveValue('Admin3')
     //store password into one element
     const password=page.locator('#txtPassword')
     await password.clear()
     await password.fill('Qedge123!@#')
     //return password
     const passwordtext=await password.inputValue()
     console.log(passwordtext)
     //assert password textbox have expect value
     await expect(password).toHaveValue('Qedge123!@#')
     await page.locator('#btnLogin').click()
     await page.waitForTimeout(2000)
     const Expected="dashboard"
     const Actual=await page.url()
     if(Actual.endsWith(Expected))
     {
        console.log("Valid Credentials"+Expected+" "+Actual+" "+"Test PASS")
     }
     else
     {
        //capture error message
        const errormessage=await page.locator('#spanMessage').innerText()
         console.log(errormessage+" "+Expected+" "+Actual+" "+"Test FAIL")
     }
     await page.waitForTimeout(3000)
})