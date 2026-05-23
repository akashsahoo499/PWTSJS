import test from "@playwright/test";
test.describe.configure({timeout:50000})
test('Verify Option in Listbox',async function({page}){
    //store expected option
    const Expected_option:string='crafts'
    //const Expected_option:string='cars'
    let Item_Exist:boolean=false
    //navigate url
    await page.goto('https://www.ebay.com/')
    await page.waitForTimeout(3000)
    //store listbox into one variable
    const dropdown=await page.locator('#gh-cat')
    //get all option text from drop down
    const alloptions=await dropdown.locator('option')
    //get all option text from drop down
    const alloptiontext=await alloptions.allTextContents()
    //print length of all option 
    console.log("No of options in dropdown::"+alloptiontext.length)
    //iterate all option in listbox
    for(const ActualItems of alloptiontext){
        await page.waitForTimeout(1000)
        console.log(ActualItems)
        //Verify actualitems === to Expected options
        if(ActualItems.trim().toLowerCase()===Expected_option.toLowerCase())
        {
            Item_Exist=true
            break
        }
    }
        if(Item_Exist)//it is holding true or false
        {
            console.log(Expected_option+" "+"Item_Exist In Listbox"+"Test Pass")
        }
        else{
            console.log(Expected_option+" "+"Item Not EXist In Listbox"+"Test Fail")
        }
})