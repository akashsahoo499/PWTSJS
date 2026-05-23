import test from "@playwright/test";

test('Double click Test',async({page})=>{
    await page.goto('https://demo.guru99.com/test/simple_context_menu.html')
    page.on('dialog',async dialog=>{
        console.log(dialog.type())
        console.log(dialog.message())
        await page.waitForTimeout(3000)
        dialog.accept()
    })
    //double click element
    await page.getByText("Double-Click Me To See Alert").dblclick()
    await page.waitForTimeout(3000)
})


test('right click',async({page})=>{
    await page.goto('https://demo.guru99.com/test/simple_context_menu.html')
    await page.waitForTimeout(3000)
    page.on('dialog',async dialog=>{
        console.log(dialog.type())
        console.log(dialog.message())
        dialog.accept()
    })
    await page.getByText('right click me').hover()
    await page.getByText('right click me').click({button:'right'})
    await page.getByText('Quit').last().click()
    await page.waitForTimeout(3000)
})