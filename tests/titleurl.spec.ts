import test from "@playwright/test";


test("Getting title and url",async({page})=>{
//launch url
await page.goto("http://flipkart.com")
//print page title and length of title
const Page_Title=await page.title()
console.log(Page_Title)
console.log(Page_Title.length)
//print url and length of url
const str_url=await page.url()
console.log(str_url)
console.log(str_url.length)
})