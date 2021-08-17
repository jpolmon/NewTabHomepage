let weatherBtn = document.querySelector("#weatherBtn")

var currentDay = moment().format('dddd') + " " + moment().format('MMMM Do YYYY');
var currentClockTime = moment().format('h:mm:ss a');
var greetingText = document.querySelector(".header");
var morningHours = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var afternoonHours = [12, 13, 14, 15, 16, 17];
var eveningHours = [18, 19, 20, 21, 22, 23];

var interval = setInterval(function() {
    var rightNow = moment()
    $('#currentDay').html(rightNow.format("YYYY MMMM DD") + " "
    + rightNow.format("dddd")
    .substring(0,3).toLocaleUpperCase());
    $("#currentDay"). html(currentDay + " " + rightNow.format("hh:mm:ss A"));
}, 1000);

if (morningHours.includes(moment().format("h"))){
greetingText.textContent = "Good Morning"
console.log(greetingText)
console.log(moment().format("h"))}
else if (afternoonHours.includes(moment().format("h")) ){
    greetingText.textContent = "Good Afternoon"
console.log(greetingText)
console.log(moment().format("h"))}
else {
    greetingText.textContent = "Good Evening"
console.log(greetingText)
console.log(moment().format("h"))
}



generateBackground();

function generateBackground() {

    let queryUrl = 'https://picsum.photos/1920/1080?grayscale&blur=2'
    
    fetch(queryUrl)
    .then(response => {
        if(response.ok) {
            console.log(response);
            document.body.style.backgroundImage = `url(${response.url})`;
        }
    })
    .catch(error => {
        console.log(error);
    })  
}

let lat; 
let long;
navigator.geolocation.getCurrentPosition(function(position) {
    lat = position.coords.latitude;
    long = position.coords.longitude;
})

function getWeatherInfo() {
    
    console.log("why tho?");
    let apiKey = "2c8a59c12a0f5d478caa56dfd4887203";
    let queryUrl1 = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely,hourly,alerts&appid=${apiKey}`;           
    
    fetch(queryUrl1)
        .then(response => {
            if(response.ok) {
                response.json()
                .then(data => {
                    console.log(data);
                    renderWeather(data);
                })
            }
        })
    .catch(error => {
        
        console.log(error);
    });
}
    

function renderWeather(weatherData) {
    
    let weatherArray = [
        {
            day: "0",
            icon: "",
            temp: "",
        },
        {
            day: "1",
            icon: "",
            temp: "",
        },
        {
            day: "2",
            icon: "",
            temp: "",
        },
        {
            day: "3",
            icon: "",
            temp: "",
        },
        {
            day: "4",
            icon: "",
            temp: "",
        }];
    
    for (let i = 0; i < weatherArray.length; i++) {
        weatherArray[i].icon = weatherData.daily[i].weather["0"].icon;
        weatherArray[i].temp = Math.round(((weatherData.daily[i].temp.day - 273.15) * (9/5)) + 32);

        let updateDay = document.getElementById(`day${i}`);
        let updateDate = document.getElementById(`date${i}`);
        let udpateIcon = document.getElementById(`icon${i}`);
        let updateTemp = document.getElementById(`temp${i}`);

        if (i === 0) {
            updateDay.textContent = moment().format('ddd');
            updateDate.textContent = moment().format('M/D');
        }
        else {
            updateDay.textContent = moment().add(i, 'days').format('ddd');
            updateDate.textContent = moment().add(i, 'days').format('M/D');
        }
        
        udpateIcon.innerHTML = `<img src="http://openweathermap.org/img/wn/${weatherArray[i].icon}@2x.png" alt="current weather icon">`;
        updateTemp.textContent = `${weatherArray[i].temp}°F`;
    }

    document.getElementById("weatherCards").style.display = "flex";
    document.getElementById("weatherBtn").style.display = "none";
}    
    
weatherBtn.addEventListener("click", getWeatherInfo);
      
