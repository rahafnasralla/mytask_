import React from 'react'
import { getWeather } from '../utils/getWeather'

const FutureWeather = (props) => {
  const hours = ["03:00","06:00","09:00","12:00","15:00","18:00","21:00"]
  return (
    <div className='weather-3-hour'>
      {props.forcast?.map((item, idx) => {
        if(idx>=0&&idx<=6)
          return (
            <div key={idx}>
              <div>
                  {hours[idx]}
              </div>
              <br />
              <div>
                <img
                  src={`./img/weather-icons/${getWeather(item?.weather[0]?.id)?.name}.svg`} 
                  alt=""
                />
              </div>
              <br />
              <div>
                  {Math.round(item?.main?.temp)}&deg;C
              </div>
            </div>
          )        
        })
      }
    </div>
  )
}

export default FutureWeather
