Webontwikkeling Groep 02: Orry En Tim
=====================================

What is the goal of our application?
------------------------------------

This application is designed to automatically track the user's location in order to show him the personalized weather forecast for today and tomorrow on that location. This should give the user a quick and easy view of the weather forecast without too much effort.

What is the goal of this file?
------------------------------

This file should show the owner of a website how he can implement our application into his website without too much effort. We will also explain how the code works.

==============================================

### Usage 

To implement our code, simply copy the img and lib folder into the folder of your website. Now open our index.html file and open the .html file of the web page on which you want a weather forecast. You need to link all of our scripts and css files in this page (this can be done by copy-pasting the scirpt and css sources from our .html file to yours if you have pasted the two folders correctly) and paste the html code of our page that you want on your site into your site. 

Besides the copying there's one very important change you will have to make: the site you get your weather information from requires developers to create an account in order to be able to receive the forecast you want. This means you will have to create a new account on [www.developer.forecast.io](https://developer.forecast.io/). When you do this, you will get an API key which allows you to use their content. You can choose a free account for 1000 uses per day or pay for more uses if you have a popular website. Paste your personal api key in the weather.js code, where the api key is initialized: `var apiKey = '(your personal key)';`

An example of a working impelementation of our code can be found [here](http://orry.verpoort.be/weer/).

Feel free to edit the code to to make sure it fits into your web page!

### Implementation

#### Javascript

 * The javascript code has a few important functions: the function getLocation tracks the current location of the user:

		function getLocation() {
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(getWeather);
			}
			else {
				x.innerHTML="Geolocation is not supported by this browser.";
			}
		}


    
 * The function GetWeather uses your location to show the current weather. This is where the API key you generated from making an account is used.

		function getWeather(position) {
			var lat = position.coords.latitude;
			var lng = position.coords.longitude;
			var apiKey = 'd0da67dad49acebbde1dd6620a325c31';
			var url = 'https://api.forecast.io/forecast/';
			var data;
			var d=new Date();
			var weekday=new Array(7);
				weekday[0]="Sunday";
				weekday[1]="Monday";
				weekday[2]="Tuesday";
				weekday[3]="Wednesday";
				weekday[4]="Thursday";
				weekday[5]="Friday";
				weekday[6]="Saturday";
			$.getJSON(url + apiKey + "/" + lat + "," + lng + "?callback=?",
				function (data) {
					$('#weather').append("<div id='today'><h1 class='textWeatherMain'>" + DegreesCelsius(data.currently.temperature) + "&deg</h1><p class='textWeatherMinMax whiteText'>" + DegreesCelsius(data.daily.data[0].temperatureMin) + "&deg - "+ DegreesCelsius(data.daily.data[0].temperatureMax) + "&deg</p></div><div id='otherDays'><p class='alignRight'>" + weekday[d.getDay() + 1] + "</p><p class='textWeatherMinMax whiteText alignRight'>" + DegreesCelsius(data.daily.data[1].temperatureMin) + "&deg - "+ DegreesCelsius(data.daily.data[1].temperatureMax) + "&deg</p><p class='alignRight'>" + weekday[d.getDay() + 2] + "</p><p class='textWeatherMinMax whiteText alignRight'>" + DegreesCelsius(data.daily.data[2].temperatureMin) + "&deg - "+ DegreesCelsius(data.daily.data[2].temperatureMax) + "&deg</p><p class='alignRight'>" + weekday[d.getDay() + 3] + "</p><p class='textWeatherMinMax whiteText alignRight'>" + DegreesCelsius(data.daily.data[3].temperatureMin) + "&deg - "+ DegreesCelsius(data.daily.data[3].temperatureMax) + "&deg</p></div>");
				}
			);
		}

  
#### Design 

For the design, we've chosen for a small popup window. On the example site, click one of the clouds at the top right of the screen, the window will pop up. Once again, feel free to edit our design to match your site layout.


================

This project was created by Orry Verpoort and Tim Dekiere. If you have any questions, feel free to contact us.

  







