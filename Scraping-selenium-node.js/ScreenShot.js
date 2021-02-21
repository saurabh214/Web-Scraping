var webdriver = require('selenium-webdriver') , //including webdriver
fs = require('fs');  //file related operation
 By = webdriver.By; //obj have properties  -> id xpath classname name
 var chrome = require('chromedriver'); //requiring chrome driver via npm command
var driver = new webdriver.Builder() // driver provide interaction with hardware
.forBrowser('chrome') //mentioning the browser
.build();  // Opening the browser6

driver.get('https://jazebakram.com/coupon'); //getting the url

// calls the method after 2 seconds of delay

    Pause(1,ScreenShot);

// Scraping the page of the demonstratio  of various selenium elements and methods

function ScreenShot(){
// statement
console.log("Taking a screenshot ! 3  2  1..");
driver.takeScreenshot().then(function(image,err){
        fs.writeFile('./files/ScreenShots/JazebCoupon.png',image,'base64',function(err){
            console.log(err);
            if(err == null){
                console.log("ScreenShot has been taken and saved in desired image directory!");
            }
        });
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
