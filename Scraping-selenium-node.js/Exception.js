var webdriver = require('selenium-webdriver') , //including webdriver
 By = webdriver.By; //obj have properties  -> id xpath classname name
var driver = new webdriver.Builder() // driver provide interaction with hardware
.forBrowser('chrome') //mentioning the browser
.build();  // Opening the browser6

driver.get('file://' + __dirname + '/Exception.html'); //getting the url

// calls the method after 2 seconds of delay

    Pause(1,ScrapeExample);

// Scraping the page of the demonstratio  of various selenium elements and methods

function ScrapeExample(){
// statement
console.log("Scraping the page...");

             driver.findElement(By.id('name')).sendKeys("Saurabh Kumar student ").then(null,function(exception){
                 console.log(exception.name);
             });
             driver.findElement(By.xpath('//input[@value="male"]')).click().then(null,function(exception){
                 console.log(exception.name);
             });
             driver.findElement(By.name('vehicle2')).click().then(function(success){
                 console.log("click Successfull");
             },function(exception){
                 console.log(exception.name);
             });

    

Pause(3,QuitDriver);
}

/*
adding selenium wait 
    * Delay in seconds
    * @param int time
    * @param function func
*/
function Pause(Time, FuncName){
    setTimeout(FuncName, Time*1000);
}



/* 
* Closing and then quiting the driver after scraping has been done
*/
function QuitDriver(){
    driver.close();
    driver.quit();
}
