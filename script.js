const apiKey = '75b2fda5db9b4565afb130126230311';
let city;
document.getElementById("notFound").style.display = 'none';

const getWeather = (city) =>{
fetch(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=1&aqi=yes&alerts=no`)
  .then(response => response.json())
  .then(data => {
    //Start
    let cityname = document.getElementById('cityName');
    let countryname = document.getElementById('countryName');
    cityname.innerHTML = data.location.name
    countryname.innerHTML = data.location.country

    
    console.log(data)
    feels_like.innerHTML = data.current.feelslike_c
    humidity.innerHTML = data.current.humidity
    humidity2.innerHTML = data.current.humidity
    pressure.innerHTML = data.current.pressure_in
    temp.innerHTML = data.current.temp_c
    temp2.innerHTML = data.current.temp_c
    temp_max.innerHTML = data.forecast.forecastday[0].day.maxtemp_c
    temp_min.innerHTML = data.forecast.forecastday[0].day.mintemp_c
    haze.innerHTML = data.forecast.forecastday[0].day.condition.text
    moonrise.innerHTML = data.forecast.forecastday[0].astro.moonrise
    wind.innerHTML = data.forecast.forecastday[0].day.maxwind_kph
    wind2.innerHTML = data.forecast.forecastday[0].day.maxwind_kph
    sunrise.innerHTML = data.forecast.forecastday[0].astro.sunrise
    sunset.innerHTML = data.forecast.forecastday[0].astro.sunset
    document.getElementById("notFound").style.display = 'none';
    setTimeout(() => {
        document.getElementById("weather_update").style.display = 'block';
        document.getElementById("onload").style.display = 'none';
        document.getElementById("container_main").style.display = 'block';
        document.getElementById("container_heading").style.display = 'block';

        }, 3000);
  })


  .catch((error) => {
    console.log(error);
        setTimeout(() => {
            document.getElementById("notFound").style.display = 'block';
            document.getElementById("onload").style.display = 'none';
            

        }, 3000);
        document.getElementById("container_main").style.display = 'none';
        document.getElementById("weather_update").style.display = 'none';
        document.getElementById("container_heading").style.display = 'none';
    
  });
}

let submit = document.getElementById('submit');
let city1 = document.getElementById('city');
let alert1 = document.querySelectorAll('.alert')
//Onload Function Start
    submit.addEventListener('click', (e)=>{
        e.preventDefault();
        if (city1.value.trim() === "") {
           
            alert1.forEach(alert => {
                alert.style.display = 'block';
            });
            
        } else {
            getWeather(city1.value);
            document.getElementById("weather_update").style.display = 'none';
            document.getElementById("onload").style.display = 'block';
            document.getElementById('searchcity').style.display = 'none';
            alert1.forEach(alert => {
                alert.style.display = 'none';
            });

            setTimeout(() => {
                document.getElementById("weather_update").style.display = 'block';
                document.getElementById("onload").style.display = 'none';
            }, 2999);
        }
        setTimeout(() => {
            alert1.forEach(alert => {
                alert.style.display = 'none';
            });
        }, 5000);
    
    }
    )

    city1.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (city1.value.trim() === "") {
                alert1.forEach(alert => {
                    alert.style.display = 'block';
                });
            } else {
                getWeather(city1.value);
                document.getElementById("weather_update").style.display = 'none';
                document.getElementById("onload").style.display = 'block';
                document.getElementById('searchcity').style.display = 'none';
                alert1.forEach(alert => {
                    alert.style.display = 'none';
                });
                setTimeout(() => {
                    document.getElementById("weather_update").style.display = 'block';
                    document.getElementById("onload").style.display = 'none';
                }, 2999);
            }
        }
        setTimeout(() => {
            alert1.style.display = 'none';
        }, 5000);
    });



function fetchWeatherData(cityId, cityName) {
    let cityRow = document.getElementById(cityId);
  
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityName}&days=1&aqi=yes&alerts=no`)
      .then(response => response.json())
      .then(data => {
  
        cityRow.querySelector(".weather").innerHTML = data.current.condition.text;
        cityRow.querySelector(".feels_like").innerHTML = data.current.feelslike_c;
        cityRow.querySelector(".humidity").innerHTML = data.current.humidity;
        cityRow.querySelector(".pressure").innerHTML = data.current.pressure_in;
        cityRow.querySelector(".wind").innerHTML = data.forecast.forecastday[0].day.maxwind_kph
        cityRow.querySelector(".temp").innerHTML = data.current.temp_c;
        cityRow.querySelector(".temp_max").innerHTML = data.forecast.forecastday[0].day.maxtemp_c;
        cityRow.querySelector(".temp_min").innerHTML = data.forecast.forecastday[0].day.mintemp_c;
      })
      .catch(error => console.error(error));
  }
  
  fetchWeatherData("islamabad-row", "Islamabad, Pakistan");
  fetchWeatherData("delhi-row", "Delhi, India");
  fetchWeatherData("tokyo-row", "Tokyo, Japan");
  fetchWeatherData("riyadh-row", "Riyadh, Saudi Arabia");
  fetchWeatherData("canberra-row", "Canberra");
  fetchWeatherData("baku-row", "Baku");
  // Call fetchWeatherData function for each city row with their respective IDs
  

  //About
  let popup = document.getElementsByClassName('goback')[0];
  popup.addEventListener('click',()=>{
    document.getElementById('popup').style.display = 'none';
    document.body.style.overflow = 'visible';
  })

  let about = document.getElementById('aboutthisapp');
  about.addEventListener('click', ()=>{
    document.getElementById('popup').style.cssText = "display:flex;justify-content:center;align-item:center";
    document.body.style.overflow = 'hidden';
  })


  


  //footer
  let copyright = document.getElementById('copyright');
  let time = new Date();
  let year = time.getFullYear();
  copyright.innerHTML = `Copyright &copy; ${year}, All rights reserved`;