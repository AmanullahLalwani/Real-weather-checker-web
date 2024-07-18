const APIKEY = 'YOUR_API_KEY';

let apiKey = "42aa278d2af2b62fcaea35ae8a5b9060"

function getWeather() {
    const city = document.getElementById('city').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            (data.cod === 200)
            {
                document.getElementById('location').innerText = `Weather in ${data.name}`;
                document.getElementById('description').innerText = data.weather[0].description;
                document.getElementById('temperature').innerText = `Temperature: ${data.main.temp} °C`;
                document.getElementById('humidity').innerText = `Humidity: ${data.main.humidity}%`;

                if (res.data.weather[0].description === "haze") {
                    let weatherIcon = document.getElementById("weatherIcon")
                    weatherIcon.src = ""
                } else if (res.data.weather[0].description === "overcast clouds") {
                    let weatherIcon = document.getElementById("weatherIcon")
                    weatherIcon.src =""
                }
                else {
                    let weatherIcon = document.getElementById("weatherIcon")
                    weatherIcon.src = ""
                }

            }
        })
}