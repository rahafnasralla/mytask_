import React, { useState } from 'react'

const Search = (props) => {

    const [city, setCity] = useState("");

    const FindWeatherClicked = () => props.searchClicked(city)
    

    const onCityChanged = (e) => setCity(e.target.value)

    return (
        <div className="search">
            <input 
                className="search-input" 
                value={city} 
                onChange={onCityChanged}
                placeholder="Type in a city name"
            />

            <input 
                type="button"
                className="find-weather-button"
                onClick={FindWeatherClicked}
                value="FIND WEATHER"
            />
               
        </div>
    )
}

export default Search
