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
        <div className="card" onClick={handleClick} >
                                 {/* <img src="https://flagcdn.com/32x24/za.png" alt="" className="mx-4"/> */}
            {weather ?
            <div>
                
                <div className={flipped ? "flipped" : "front"} >
                    <div className="justify-center align py-11">
                        <ul className="stats">
                            <li className="stat">Cloud: {weather.current.cloud}%</li>
                            <li className="stat">Feels like: {weather.current.feelslike_c}°C</li>
                            <li className="stat">Humidity: {weather.current.humidity}%</li>
                            <li className="stat">Wind Direction: {weather.current.wind_dir}</li>
                            <li className="stat">Wind Speed: {weather.current.wind_mph}mph</li>
                        </ul>
                    </div>
                 </div>
                <div className={flipped ? "back" : "flipped"} >
                    <img alt="monster" src={location.image} className=" w-full h-52" />
                </div>
                <div className="grid bg-cardThird my-3 text-white border-2 rounded-lg">
                    <img src={`https://flagcdn.com/64x48/${location.iso2.toLowerCase()}.png`} alt="" className="absolute"/>
                    <span>{location.city}</span> 
                    <span>{location.country}</span> 
                    <span className="bg-gray-900"> {weather.location.localtime.slice(10)}</span> 
                </div>
                <div className="flex justify-center">
                    <span className="button"><img src={weather.current.condition.icon} alt="" /></span>
                    <span className="button text-3xl p-1">
                        {weather.current.temp_c}°c
                    </span>
                </div>
            </div>
            
            :[]}
        </div>
    )
}
