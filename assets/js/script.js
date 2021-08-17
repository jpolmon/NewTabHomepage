var currentDay = moment().format('dddd') + " " + moment().format('MMMM Do YYYY');
var currentClockTime = moment().format('h:mm:ss a');


var interval = setInterval(function() {
    var rightNow = moment()
    $('#currentDay').html(rightNow.format("YYYY MMMM DD") + " "
    + rightNow.format("dddd")
    .substring(0,3).toLocaleUpperCase());
    $("#currentDay"). html(currentDay + " " + rightNow.format("hh:mm:ss A"));
}, 1000);


//    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
//     <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>



// <h1 class = "header">Welcome "user's name"</h1>
// <p> Welcome to your homepage! I hope you have a wonderful day! </p>
// <p id="currentDay"></p>

generateBackground();

function generateBackground() {

    let queryUrl = 'https://picsum.photos/1920/1080?grayscale&blur=2'
    
    fetch(queryUrl)
    .then(response => {
        if(response.ok) {
            console.log(response);
            document.body.style.backgroundImage = `url(${response.url})`
        }
    })
    .catch(error => {
        console.log(error);
    })  
}

getWeatherInfo();

function getWeatherInfo() {
    
    let lat;
    let long;
    let apiKey = "2c8a59c12a0f5d478caa56dfd4887203";            
    let queryUrl1 = `http://ip-api.com/json/`;
    
    fetch(queryUrl1)
        .then(response => {
            if(response.ok) {
                response.json()
                .then(data => {
                    console.log(data);
                    lat = data.lat;
                    long = data.lon;
                    console.log(lat);
                    console.log(long);
                    let queryurl2 = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely,hourly,alerts&appid=${apiKey}`;
                    return fetch(queryurl2);
                })
                .then(response => {
                    if (response.ok) {
                        response.json()
                        .then(data => {
                            console.log(data);
                            renderWeather(data);
                        })
                    }
                })
                .catch(error => {
                    console.log(error);
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
}    
    
    
      
