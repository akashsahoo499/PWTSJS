import test from "@playwright/test";

test("Counting Links in web page",async function({page}){
    //launch url
    await page.goto("https://www.facebook.com/")
    await page.waitForTimeout(3000)
    //get all collection of links which are stored into <a>
    const alllinks=await page.locator('a')
    //count no of links
    const count=await alllinks.count()
    console.log(`No of links ${count}`)
    //iterate all links 
     for(let i=0;i<count;i++)
     {
       // const linkname=await alllinks.nth(i).textContent()
        const linkname=await alllinks.nth(i).innerText()
        console.log(`Link No ${i} linkname ${linkname}`)
     }
})


test("Counting links",async function({page}){
  await page.goto('http://ebay.com')
  await page.waitForTimeout(2000)
  //get all links in webpage which are stored into html tag<a>
  const alllinks=page.locator('a')
  const count=await alllinks.count()
  console.log("No of Links are::"+count)
  //count all links into array collection
  const arraylinks=await alllinks.all()
  for(const eachlink of arraylinks){
    //print each link text
    console.log(await eachlink.textContent())
    //print each link url
    console.log(await eachlink.getAttribute('href'))
  }

  
})