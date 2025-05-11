import React, {useEffect, useState} from "react"
import weatherService from '../services/weather'

const Weather = ({cityName, latlng}) => {
    const [weatherInfo, setWeatherInfo] = useState(null)

    useEffect(() => {
        weatherService
            .getByGeo(latlng)
            .then(info => {
                setWeatherInfo(info)
            })
    }, [])

    return (
        <>
            {
                weatherInfo && 
                <div>
                    <h1>Weather in {cityName}</h1>
                    <div>Temperature {weatherInfo.temperature} Celsius</div>
                    <img 
                        src={weatherInfo.icon.src} 
                        alt={weatherInfo.icon.alt}
                    />
                    <div>Wind {weatherInfo.wind} m/s</div>
                </div>
            }
        </>
    )
}

export default Weather