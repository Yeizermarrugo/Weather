import React, { useEffect, useState } from 'react'

const CardWeather = ({ weather, celcius, temp, click }) => {

  const [photoBackground, setPhotoBackground] = useState('soleado')

  const date = new Date().toDateString()
  const hour = new Date().getHours()
  const minute = new Date().getMinutes()
  const imgurl = "http://openweathermap.org/img/wn/"
  const iconurl = imgurl + weather?.weather[0].icon + ".png"

  useEffect(() => {
    if (weather?.weather[0].description.includes("rain") || ("thunderstorm")) {
      setPhotoBackground('rain')
    } else if (weather?.weather[0].description.includes("clear sky")) {
      setPhotoBackground('soleado')
    } else if (weather?.weather[0].description.includes('clouds')) {
      setPhotoBackground('nubes')
    }
    else if (weather?.weather[0].description.includes("clear sky") && `${hour}` > 18) {
      setPhotoBackground('noche')
    } else if (weather?.weather[0].description.includes("clouds") && `${hour}` > 18) {
      setPhotoBackground('nochenubes')
    }
  }, [weather])


  return (
    <div className={`${photoBackground}`}>
      <div className="App" >
        <h1 className="city">{weather?.name}, {weather?.sys.country}</h1>
        <h3 className="description">{`"${weather?.weather[0].description}"`}</h3>
        <p className="description"><b>Wind speed:</b>{weather?.wind.speed} m/s</p>
        <p className="description"><b>Cloud:</b>{weather?.clouds.all}%</p>
        <p className="description"><b>Pressure:</b>{weather?.main.pressure} mb</p>
        <img className="img" src={iconurl} />
        <h6 className="time">{date}</h6>
        <h6 className="time">Hora: {`${hour}:${minute}`}</h6>
        <h6 className="degrees">{celcius}{temp}</h6>
        <button onClick={click}>Degrees: ºF/ºC</button>
      </div>
    </div>
  )
}

export default CardWeather