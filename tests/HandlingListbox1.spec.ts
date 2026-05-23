import test, { expect } from "@playwright/test";

test("Handling Listbox",async({page})=>{
    //navigate url 
    await page.goto('https://practice.expandtesting.com/dropdown')
    //override default timeout
    await page.waitForTimeout(2000)
    //store listbox into element
    const dropdown=page.locator('#country')
    //select option by value
    await dropdown.selectOption('India')//select with default
    await page.waitForTimeout(3000)
    //select by label
    await dropdown.selectOption({label:'Mongolia'})
    await page.waitForTimeout(3000)
    //select by index
    await dropdown.selectOption({index:50})
    await page.waitForTimeout(3000)
    //select by value
    await dropdown.selectOption({value:'MO'})
    //verify dropdown have expected value
    await expect(dropdown).toHaveValue('MO')
    await page.waitForTimeout(3000)
})


test("Counting No of options in listbox",async({page})=>{
    //navigate url
    await page.goto('https://www.ebay.com/')
    await page.waitForTimeout(2000)
    //store dropdown into element
    const dropdown=page.locator('#gh-cat')
    //get options from listbox
    const options=await dropdown.locator('option')
    //count no of options in listbox
    const count =await options.count()
    console.log("No of options in listbox is::"+count)
    //assert count of options in listbox
    await expect(dropdown).toHaveCount
    //get all option text from listbox
    const alloptiontext=await options.allInnerTexts()
    for(const element of alloptiontext)
    {
        console.log(element)
    }

})


test("Counting No of options in listbox1",async({page})=>{
    //navigate url
    await page.goto('https://practice.expandtesting.com/dropdown')
    await page.waitForTimeout(2000)
    //store dropdown into element
    const dropdown= page.locator('#country')
    //get options from listbox
    const options=await dropdown.locator('option')
    //count no of options in listbox
    const count =await options.count()
    console.log("No of options in listbox is::"+count)
    //assert count of options in listbox
    //await expect(dropdown).toHaveCount
    //get all option text from listbox
    const alloptiontext=await options.allInnerTexts()
    for(const element of alloptiontext)
    {
        console.log(element.trim())
    }

})