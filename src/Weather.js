import MotionHoc from './MotionHoc'
import React, { useEffect, useState } from "react";
import axios from 'axios'
import './MyStyle.css'

const Weather = () => {
  const [urlData, seturlData] = useState({})
  const [locationName, setlocationName] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${locationName}&appid=49a280a14e84a6f2c21ccb3f1fa50ce3`

  const locationSearch = event => {
    if (event.key === 'Enter') {
      axios.get(url).then(response => {
        seturlData(response.data)
        console.log(response.data)
      })
      setlocationName('')
    }
  }

  return (
    <div>
      <h1>Weather API</h1>
      <div className='container'>
      <div className='app'>

        <div className='search'>
          <input
            value={locationName}
            onChange={e => setlocationName(e.target.value)}
            onKeyPress={locationSearch}
            placeholder='Enter location'
            type='text'
          />
        </div>
        <div className='container'>
          <div className='top'>
            <div className='location'>
              <p>{urlData.name}</p>
            </div>
            <div className='temp'>
              {urlData.main ? <h1>{urlData.main.temp.toFixed()}°F</h1> : null}
            </div>
            <div className='description'>
              {urlData.weather ? <p>{urlData.weather[0].main}</p> : null}
            </div>
          </div>

          {urlData.name !== undefined && (
            <div>
              <div>
                {urlData.main ? (
                  <p className='bold'>{urlData.main.feels_like.toFixed()}°F</p>
                ) : null}
                <p>Feels Like</p>
              </div>
              <div>
                {urlData.main ? (
                  <p className='bold'>{urlData.main.humidity}%</p>
                ) : null}
                <p>Humidity</p>
              </div>
              <div>
                {urlData.wind ? (
                  <p className='bold'>{urlData.wind.speed.toFixed()} MPH</p>
                ) : null}
                <p>Wind Speed</p>
              </div>
            </div>
          )}
        </div>
      </div>
      </div>
      
    </div>
  )
}

const weather = MotionHoc(Weather)

export default weather
