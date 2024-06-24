const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const apiKey = "7bb4d3c36e6dab648570b8fa10d28669"


let search = document.querySelector(".search input")
let srcBtn = document.querySelector('.search button')
let weatherImg = document.querySelector(".weather-icon")


async function getWeather(city){
    const response = await fetch(url + city + `&appid=${apiKey}`)
    var data = await response.json()
    console.log(data)

    let temp =document.querySelector('.temp1').innerHTML = Math.round(data.main.temp)  + ` °C`
    let city2 = document.querySelector('.city2').innerHTML = data.name;
    let humidity =document.querySelector('.humidity').innerHTML = data.main.humidity + `%`
    let wind = document.querySelector('.wind').innerHTML = data.wind.speed + ` km/h`

    if(data.weather[0].main == "Clouds"){
        weatherImg.src = 'images/clouds.png'
    }
    else if(data.weather[0].main == "Rain") {
        weatherImg.src = 'images/rain.png'
    }
    else if(data.weather[0].main == "Clear") {
        weatherImg.src = 'images/clear.png'
    }
    else if(data.weather[0].main == "Drizzle") {
        weatherImg.src = 'images/drizzle.png'
    }
    else if(data.weather[0].main == "Mist") {
        weatherImg.src = 'images/Mist.png'
    }
    else if(data.weather[0].main == "Snow") {
        weatherImg.src = 'images/snow.png'
    }
    else if(data.weather[0].main == "Haze") {
        weatherImg.src = 'images/haze.png'
    }
    document.querySelector('.card').style.display = "flex"
}

srcBtn.addEventListener('click', ()=>{
    getWeather(search.value)
})