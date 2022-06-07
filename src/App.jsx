import axios from 'axios'
import { useState, useEffect } from 'react'
import './App.css'
import CardWeather from './components/CardWeather'
import Loader from './components/Loader'


function App() {
  const [latLon, setLatLon] = useState()
  const [weather, setweather] = useState()
  const [celcius, setCelcius] = useState((weather?.main.temp -273.15).toFixed(2))
  const [temp, setTemp] = useState('ºF')
  const [isLoading, setIsLoading] = useState(true)
  
 
  useEffect(()=>{
  
    const success = pos => {
      const lat = pos.coords.latitude
      const lon = pos.coords. longitude
      setLatLon({ lat, lon })

     
}
  navigator.geolocation.getCurrentPosition(success)
}, [])
  

  useEffect(() => {
   
    if(latLon !== undefined ){
      const API_KEY = 'c80bc4abcf698f4b20a838e3e64d66cf'
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latLon.lat}&lon=${latLon.lon}&appid=${API_KEY}`   
    axios.get(URL)
    .then(res=> {
      setweather(res.data)
      setIsLoading(false)
    })
    .catch(err => console.log(err))
  }
  }, [latLon])

  console.log(weather)

  

  
  const click = () => {
    if(celcius === (weather?.main.temp -273.15).toFixed(1)){
      setCelcius((((weather?.main.temp -273.15)*9/5)+32 ).toFixed(1))
    } else  {
      setCelcius(((weather?.main.temp -273.15)).toFixed(1))
    }
    if(temp === 'ºF'){
      setTemp('ºC')
    } else {
      setTemp('ºF')
    }
  }
  

  



  return (
    <>
    {
      isLoading ?
      <Loader/>
      :
      <CardWeather 
      click={click}
      temp={temp}
      celcius={celcius}
      weather={weather}/>
    }

    </>

  )
}

export default App
