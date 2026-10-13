document.getElementById('myform').addEventListener('submit',function(e){
    e.preventDefault()
    // to prevent the page from auto refresh
    var city = document.getElementById('city').value;
    var apiKey = "b43e9f8798f48fc828f4002dd017df36";

    // get requset response status code
    // CURD - POST,GET,PUT,DELETE
    // -AXIOS-RETURNS PROMISE
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(function(res){
        console.log(res)
        //Get temperature 
        var temperature = res.data.main.temp;

        //get weather details  
        var cityName = res.data.name;
        var country = res.data.sys.country;
        var humidity = res.data.main.humidity;
        var description = res.data.weather[0].description;

        //Display result 
        document.getElementById('weather').innerHTML = 
        `
            <div class="location-card">
        <h2>${cityName}, ${country}</h2>
    </div>

    <div class="weather-details">

        <div class="weather-card">
            <p>Temperature</p>
            <h1>${temperature}°C</h1>
        </div>

        <div class="weather-card">
            <p>Humidity</p>
            <h1>${humidity}%</h1>
        </div>

        <div class="weather-card description-card">
            <p>Weather</p>
            <h1>${description}</h1>
        </div>

    </div>  `;

    })
    
    .catch(function(res){
        console.log(res)
        document.getElementById('weather').innerHTML =
            `<div class="location-card">
                <h2>City not found,Please enter a valid city name.</h2>
            </div>`;
    })
    
})