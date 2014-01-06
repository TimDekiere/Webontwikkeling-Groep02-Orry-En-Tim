// Orry Verpoort JS - Forecast API 
// weather

var x=document.getElementById("demo");
function getLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(getWeather);
	}
	else {
		x.innerHTML="Geolocation is not supported by this browser.";
	}
}
function showPosition(position) {
	console.log("check");
	console.log("Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude);	
}

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

function DegreesCelsius(degrees) {
	var c = (degrees - 32) * 5 / 9;
	return c.toFixed(1);
}