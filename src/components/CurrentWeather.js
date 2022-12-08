import React from 'react'

const CurrentWeather = (props) => {
  return (
    <div className="weather-now">
      <img
        className="now-img"
        src={`./img/weather-icons/${props.img}.svg`}
        alt=""
      />
      <p className="description">{props.forcast?.weather[0]?.description}</p>
      <p className='temperature'><strong>Temperature  </strong>
      {Math.round(props.forcast?.main?.temp_min)}&deg;C to {Math.round(props.forcast?.main?.temp_max)}&deg;C</p>
      <p className='humidity'><strong>Humidity  </strong>
        {props.forcast?.main?.humidity}%  <strong>Pressure  </strong>  {props.forcast?.main?.pressure}</p>
    </div>
  )
}

export default CurrentWeather
