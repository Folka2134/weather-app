import React, { useEffect, useState } from 'react'

import axios from 'axios';

export const Card = ({ location, handleChoice, flipped }) => {
    const [weather, setWeather] = useState(null)

    // weather API
    useEffect(() => {
        let apiSubscribed = true
        const fetchData = async () => {
            const result = await axios(
            `http://api.weatherapi.com/v1/current.json?key=8a32bc17bfde477e8d8175552211011&q=${location.city_ascii}&aqi=no`,
            );
            if (apiSubscribed) {
                setWeather(result.data);
            }
      };
      
      fetchData();
      return () => {
          apiSubscribed = false
      }
    },[location.city_ascii]);

    const handleClick = () => {
        handleChoice(location)  
    }

    return (
        <div className="card">
            {weather ?
            <div>
                <div className={flipped ? "flipped" : "front"} >
                    <h1 className="grid bg-cardSecondary mb-3 p-3 rounded-b-full text-black border-2 border-purple-600 ">
                        <span>{location.city}</span> 
                        <span>{location.country}</span> 
                    </h1>
                    <div className=" justify-center">
                        <ul className="stats">
                            <li className="stat">Cloud: {weather.current.cloud}%</li>
                            <li className="stat">Feels like: {weather.current.feelslike_c}°C</li>
                            <li className="stat">Humidity: {weather.current.humidity}%</li>
                            <li className="stat">Local time: {weather.location.localtime.slice(10)}</li>
                            <li className="stat">Wind Direction: {weather.current.wind_dir}</li>
                            <li className="stat">Wind Speed: {weather.current.wind_mph}mph</li>
                        </ul>
                    </div>
                    <div className="flex justify-center">
                        <span className="button"><img src={weather.current.condition.icon} alt="" /></span>
                        <span className="button text-3xl p-1">
                            {weather.current.temp_c}°c
                        </span>
                    </div>
                </div>
                <div className={flipped ? "back" : "flipped"} onClick={handleClick}>
                    {/* <img alt="monster" src={`https://robohash.org/${location.id}?set=set2&size=250x250`} className=" w-64 h-64" /> */}
                    <img alt="monster" src={location.image} className=" w-full h-64" />
                    <h1 className="grid bg-cardSecondary mb-3 p-3 rounded-b-full text-black border-2 ">
                        <span>{location.city}</span> 
                        <span>{location.country}</span> 
                    </h1>
                    <div className="flex justify-center">
                        <span className="button"><img src={weather.current.condition.icon} alt="" /></span>
                        <span className="button text-3xl p-1">
                            {weather.current.temp_c}°c
                        </span>
                    </div>
                </div>
            </div>
            
            :[]}
        </div>
    )
}
