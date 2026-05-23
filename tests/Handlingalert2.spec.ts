import test, { expect } from "@playwright/test";
import { assert } from "node:console";

test("Handling Alert",async({page})=>{
//navigate url
await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
await page.waitForTimeout(3000)
//create dialog listener
page.on('dialog',async dialog=>{
    //return type of alert
    const alerttype=await dialog.type()
    console.log(`Alert type is::${alerttype}`)
    //return alert message
    const alertmessage=await dialog.message()
    console.log(`Alert message::${alertmessage}`)
    //accept alert click ok button
    await dialog.accept()
})
//click on click for alert
await page.getByText('Click for JS Alert').click()
await page.waitForTimeout(3000)
const elementText=await page.locator('#result').textContent()
console.log(elementText)
//assert text is visible
await expect(page.locator('#result')).toBeVisible()
})


test("Handling confirm",async({page})=>{
    //navigate url
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
    await page.waitForTimeout(3000)
    //create dialog listner
    page.on('dialog',async dialog=>{
        //capture alert type
        const alerttype=await dialog.type()
        console.log(`Alert type is::${alerttype}`)
        //capture alert message
        const alertmessage=await dialog.message()
        console.log(`Alert message:::${alertmessage}`)
        //click cancel button
        await dialog.dismiss()
    })
    //click on confirm alert
    await page.getByText('Click for JS Confirm').click()
    await page.waitForTimeout(3000)
    //capture text from webpage
    const elementText=await page.locator('#result').innerText()
    console.log(`web page message:::${elementText}`)
    //assert element contains you clicked:cancel text
    await expect(page.locator('#result')).toContainText('You clicked: Cancel')
})


test("Handling prompts",async function({page}){
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
    await page.waitForTimeout(3000)
    page.on('dialog',async dialog=>{
        //capture type of alert
        console.log(`Alert type ${await dialog.type()}`)
        //capture alert message
        console.log(`Alert message::${await dialog.message()}`)
        //enter text into promt
        dialog.accept('Welcome to Playwright')
        await page.waitForTimeout(3000)
    })
    await page.getByText('Click for JS Prompt').click()
    await page.waitForTimeout(3000)
    //capture text
    const message:any=await page.locator('#result').textContent()
    console.log(`message is::${message}`)
    await expect(page.locator('#result')).toContainText(message)
})