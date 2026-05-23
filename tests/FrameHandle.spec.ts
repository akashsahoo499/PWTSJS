import test, { expect } from "@playwright/test";

test('Handling frame',async({page})=>{
    await page.goto('https://jqueryui.com/droppable/')
    await page.waitForTimeout(2000)
    //store frame into one variable
    const frame=page.frameLocator('.demo-frame')
    const source=frame.locator('#draggable')
    const target=frame.locator('#droppable')
    await source.dragTo(target)
    await expect(frame.getByText('Dropped!',{exact:true}).last()).toHaveText('Dropped!')
    //come back to main html page and click button
    await page.getByText('Button').last().click()
    await page.waitForTimeout(4000)
})


test('Handling frame1',async({page})=>{
    await page.goto('https://jqueryui.com/checkboxradio/')
    await page.waitForTimeout(2000)
    //store frame into one variable
    const frame=page.frameLocator('.demo-frame')
    //assert checkbox is not checked
    await expect(frame.getByText('2 Star').first()).toBeChecked({checked:false})
    //await frame.getByText('2 Star').first().check({force:true})
    //await expect(frame.getByText('2 Star').first()).toBeChecked({checked:true})
    //count all checkboxes
    const all_checkbox=frame.locator("//label[@class='ui-checkboxradio-label ui-corner-all ui-button ui-widget']")
    const count=await all_checkbox.count()
    console.log("checkbox name::"+count)
    for(let i=0;i<count;i++)
    {
        const eachcheckbox=await all_checkbox.nth(i)
        const statuscheck=await all_checkbox.nth(i).isChecked()
        const checkboxname=await eachcheckbox.textContent()
        console.log(statuscheck+"  "+checkboxname)
    }
    await page.waitForTimeout(4000)
})