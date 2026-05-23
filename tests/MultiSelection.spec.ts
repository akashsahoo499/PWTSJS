import test from "@playwright/test";

test("Handling MultiListbox",async function({page}){
    //navigate url
    await page.goto('file:///D:/RECORDED%20VIDEOS/PLAYWRIGHT/MultiListboxHtmlpage_lyst1777619509289.html')
    //select option with default values
    await page.locator("[name='multiSelection']").selectOption(['Yellow','brown'])
    await page.waitForTimeout(3000)
    //select option with label
    await page.locator("[name='multiSelection']").selectOption([{label:'Blue'},{label:'purple'}])
    await page.waitForTimeout(3000)
    //select with value
    await page.locator("[name='multiSelection']").selectOption([{value:'green'},{value:'white'}])
    await page.waitForTimeout(3000)
    await page.locator("[name='multiSelection']").selectOption([{index:0},{index:5},{index:3}])
    await page.waitForTimeout(3000)
})


test('counting items in listbox',async function({page}){
    //navigate url
    await page.goto("file:///D:/RECORDED%20VIDEOS/PLAYWRIGHT/MultiListboxHtmlpage_lyst1777619509289.html")
    await page.waitForTimeout(3000)
    //store multilistbox into one variable
    const multilistbox=page.locator("[name='multiSelection']")
    //get all option from listbox
    const alloptions=multilistbox.locator('option')
    const alltextoptions=await alloptions.allInnerTexts()
    console.log('Number of items are::'+alltextoptions.length)
    //iterate all option
    for(const eachoption of alltextoptions){
        console.log(eachoption)
    }
    await page.waitForTimeout(3000)
})