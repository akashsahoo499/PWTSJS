import test, { expect } from "@playwright/test";
import path from "node:path";

test('Handling hidden Element',async({page})=>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')
    //assert element is visible or not
    await expect(page.locator('#displayed-text')).toBeVisible()
    await page.locator('#hide-textbox').click()
    //assert element to be hidden
    await expect(page.locator('#displayed-text')).toBeHidden()
    await page.waitForTimeout(2000)
    await page.locator('#show-textbox').click()
    await page.locator('#displayed-text').fill('Testing')
    await page.waitForTimeout(2000)
    //assert textbox is having expected value
    await expect(page.locator('#displayed-text')).toHaveValue('Testing')
    await page.waitForTimeout(2000)
})


test('Upload single file',async({page})=>{
    //const path1=path.join(__dirname,"./TestData/TestDataFile.xlsx")
    await page.goto('https://qa-practice.netlify.app/file-upload')
    const path1=path.join(__dirname,"./TestData/TestDataFile.xlsx")
    await page.waitForTimeout(3000)
    await page.locator('#file_upload').setInputFiles(path1)
    //await page.locator('#file_upload').setInputFiles("./TestData/TestDataFile.xlsx")
    await page.waitForTimeout(3000)
    await expect(page.locator('#file_upload')).toBeVisible()
    //await expect(page.locator('#file_upload')).toContainText("TestDataFile")
    await page.waitForTimeout(3000)
    await page.getByText('Submit').last().click()
    const fileText=await page.locator('#file_upload_response').textContent()
    console.log(fileText)
    await page.waitForTimeout(3000)
})


test('Upload Multiple files',async({page})=>{
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')
    await page.waitForTimeout(3000)
    const path1="./TestData/TestDataFile.xlsx"
    const path2="./TestData/StudentsDetails.xlsx"
    const path3="./TestData/Results.xlsx"
    await page.locator('#filesToUpload').setInputFiles([path1,path2,path3])
    await page.waitForTimeout(2000)
    await expect(page.getByText('TestDataFile.xlsx')).toContainText('TestDataFile.xlsx');
    await expect(page.getByText('StudentsDetails.xlsx')).toContainText('StudentsDetails.xlsx')
    await expect(page.getByText('Results.xlsx')).toContainText('Results.xlsx')
    const firstfile=await page.getByText('TestDataFile.xlsx').textContent();
    const secondfile=await page.getByText('StudentsDetails.xlsx').textContent();
    const thirdfile=await page.getByText('Results.xlsx').textContent();
    console.log(firstfile+" "+secondfile+" "+thirdfile)
    await page.waitForTimeout(5000)
})