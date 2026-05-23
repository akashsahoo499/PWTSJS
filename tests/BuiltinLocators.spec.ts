import test from "@playwright/test";

test("Built in Locators",async function({page}) {
    //launch url
    await page.goto("https://flights.qedgetech.com/")
    await page.waitForTimeout(3000)
    await page.getByText('Register ',{exact:true}).click()
    await page.getByRole('checkbox',{name:'Name',exact:true}).fill("Akhilesh")
    await page.getByPlaceholder('Contact Number').last().fill('8765651234')
    await page.getByRole('textbox',{name:'Email',exact:true}).fill("test234@gmail.com")
    await page.getByPlaceholder('Password').last().fill('test@345')
    await page.getByRole('combobox').selectOption('M');
    await page.getByPlaceholder('Date of Birth in DD-MM-YYYY').fill('02-02-2001')
    await page.getByLabel('By Clicking Register button you agree to the QEdge privacy policy').click()
    await page.getByRole('button',{name:'Register'}).click()
    
})