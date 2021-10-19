// const puppeteer=require('puppeteer')

// async function scrapeProduct(url){
// //launch the browser
//  const browser=await puppeteer.launch()
//  //open a new page(onglet)
//  const page=await browser.newPage()
//  page.goto(url)

//  //Airpods image
//  const [el] = await page.$x("/html/body/div[4]/div[2]/div[3]/div[9]/div[3]/div[1]/div/div/div[2]/div[1]/div[1]/ul/li[5]/span/span/div/img")

//  //get the image src
//  const src=await el.getProperties('src')
//  const srcTxt=await src.jsonValue()

//  console.log(srcTxt);
// }

 
// scrapeProduct("https://www.amazon.com/Apple-AirPods-Wireless-Charging-Latest/dp/B07PYLT6DN/ref=lp_16225009011_1_4?dchild=1")









const body=document.querySelector('.body')
const toggle=document.getElementById('toggle')

toggle.addEventListener('click',function(){
 body.classList.toggle('light-mode')
})