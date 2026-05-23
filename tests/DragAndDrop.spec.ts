import test, { expect } from "@playwright/test";

test('Drag and Drop',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/drag_and_drop')
    await page.waitForTimeout(3000)
    //store source which you want to drag
    const source=page.locator('#column-a')
    //store target where you want to drop
    const target=page.locator('#column-b')
    //drag source into target
    await source.dragTo(target)
    await page.waitForTimeout(3000)
})


test.only('Drag and Drop1',async({page})=>{
    await page.goto('https://jqueryui.com/resources/demos/droppable/default.html')
    await page.waitForTimeout(3000)
    const source=page.locator('#draggable')
    const target=page.locator('#droppable')
    await source.dragTo(target)
    //capture text
    const message:any=await page.getByText('Dropped!',{exact:true}).last().textContent()
    console.log(message)
    //assert element contains text
    await page.waitForTimeout(3000)
    await expect.soft(page.getByText('Dropped')).toBeVisible()
})


test('Scroll to',async({page})=>{
    await page.goto('https://www.flipkart.com/')
    await page.getByText('✕').click()
    await page.waitForTimeout(3000)
   // await page.getByText('About Us').last().click()
    await page.getByText('About Us').scrollIntoViewIfNeeded()
   // await page.getByText('About Us').last().click()
    await page.waitForTimeout(3000)
    await page.getByText('Mobiles').nth(1).scrollIntoViewIfNeeded()
    await page.waitForTimeout(3000)
    await page.locator("[aria-label='Press']").scrollIntoViewIfNeeded()
    await page.waitForTimeout(3000)

})