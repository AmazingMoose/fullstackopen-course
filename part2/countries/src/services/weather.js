import axios from "axios"

const apiKey = import.meta.env.VITE_OPEN_WEATHER_KEY
const weatherBaseUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&'
const iconBaseUrl = 'https://openweathermap.org/img/wn/'

const getWeather = url => {
    return axios
    .get(url)
    .then(response => response.data)
    .then(data => {
        return {
            temperature: data.main.temp,
            icon: {
                src: `${iconBaseUrl}${data.weather[0].icon}@2x.png`,
                alt: data.weather[0].description
            },
            wind: data.wind.speed
        }
    })
}

const getByCity = city => {
    return getWeather(`${weatherBaseUrl}q=${city}&appid=${apiKey}`)
}

const getByGeo = latlng => {
    console.log(latlng)
    const [lat, lon] = latlng
    return getWeather(`${weatherBaseUrl}lat=${lat}&lon=${lon}&appid=${apiKey}`)
}

export default { getByCity, getByGeo }