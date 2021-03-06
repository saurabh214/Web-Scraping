var webdriver = require('selenium-webdriver') , //including webdriver
 By = webdriver.By; //obj have properties  -> id xpath classname name
var driver = new webdriver.Builder() // driver provide interaction with hardware
.forBrowser('chrome') //mentioning the browser
.build();  // Opening the browser6

driver.get('file://' + __dirname + '/Example.html'); //getting the url

// calls the method after 2 seconds of delay

    Pause(1,ScrapeExample);

// Scraping the page of the demonstratio  of various selenium elements and methods

function ScrapeExample(){
// statement
console.log("Scraping the page...");
             driver.findElement(By.xpath('//input[@value="male"]')).click();
             driver.findElement(By.id('name')).sendKeys("Saurabh Kumar student ");
             driver.findElement(By.name('vehicle1')).click();

            // Get the text from multiple elements

             driver.findElements(By.id('fruits')).then(function(elements){
                                 for( var i =0; i< elements.length;i++){
                                     elements[i].getText().then(function(text){
                                       console.log('List of Fruits \n' + text)
                                     });
                                 }
                                });
            
            driver.findElement(By.xpath('//select[@id="cars"]/option[@value="BMW"]')).click();
            
            // getting the href based on search query parameter using partial link

            driver.findElement(By.partialLinkText('Jazeb'))
            .getAttribute('href').then(function(value){
                console.log('1st link' + value); 
            });

            // getting the href based on anchor tag value using linkText

            driver.findElement(By.linkText('Jazeb Akram'))
            .getAttribute('href').then(function(value){
                console.log('2nd link' + value);
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
