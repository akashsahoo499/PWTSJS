import test, { expect } from "@playwright/test";

test("Calender handling",async({page})=>{
    await page.goto("https://www.hyrtutorials.com/p/calendar-practice.html")
    //click calender icon
    await page.locator('.ui-datepicker-trigger').click()
    await page.waitForTimeout(2000)
    const day="29"
    const month="August"
    const year="2025"
    const monthpicker=page.locator('.ui-datepicker-month')
    const yearpicker=page.locator('.ui-datepicker-year')
    while((await yearpicker.textContent()!=year)||(await monthpicker.textContent()!=month))
    {
        await page.locator("//span[text()='Prev']").click()
    }
    await page.getByText(day,{exact:true}).last().click()
    await page.waitForTimeout(2000)
    await expect(page.locator("#sixth_date_picker")).toHaveValue(`08/29/2025`)
    await page.waitForTimeout(5000)
    const datavalue=await page.locator("#sixth_date_picker").inputValue()
    console.log(datavalue)
})


test('Calender2',async({page})=>{
    await page.goto('https://jqueryui.com/datepicker/')
    await page.waitForTimeout(3000)
    const frame=await page.frameLocator('.demo-frame')
    await frame.locator("#datepicker").click()
    const day="20"
    const month="December"
    const year="2025"
    //store month
    const calmonth=await frame.locator(".ui-datepicker-month")
    //store year
    const calyear=await frame.locator(".ui-datepicker-year")
    while((await calyear.textContent()!=year)||(await calmonth.textContent()!=month))
    {
        //click prv button
        await frame.getByText('Prev').last().click()
    }
    await frame.getByText(day,{exact:true}).last().click()
    await page.waitForTimeout(3000)
    await expect(frame.locator('#datepicker')).toHaveValue(`12/20/2025`)
    await page.waitForTimeout(3000)
    const datavalue=await frame.locator('#datepicker').inputValue()
    console.log(datavalue)
    await page.waitForTimeout(3000)
})