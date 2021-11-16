import React, { useEffect, useState } from 'react'

import axios from 'axios';

// import { FaCloudSun } from 'react-icons/fa';
// import { WiCelsius } from 'react-icons/wi';

// var imageApi = {
//     method: 'GET',
//     url: 'https://bing-image-search1.p.rapidapi.com/images/search',
//     params: {q: '<REQUIRED>'},
//     headers: {
//       'x-rapidapi-host': 'bing-image-search1.p.rapidapi.com',
//       'x-rapidapi-key': 'adb2be8597mshe0e0403c11a441cp1f919cjsna3e48edbd0da'
//     }
//   };

export const Card = ({ location }) => {
    const [weather, setWeather] = useState(null)
    // const [image, setImage] = useState(null)
    
    // Image search API
    // useEffect(() => {
    //   const fetchData = async () => {
    //       const result = await axios(imageApi);
  
    //       setImage(result.data);
    //   };
      
    // weather API
    useEffect(() => {
      const fetchData = async () => {
          const result = await axios(
          `http://api.weatherapi.com/v1/current.json?key=8a32bc17bfde477e8d8175552211011&q=${location.city}&aqi=no`,
          );
  
          setWeather(result.data);
      };
      
  
      fetchData();
    },[location.city]);

    console.log(weather);
    

    return (
        <div>
            {weather ?<>
            
            <div className="card front">
            <img alt="monster" src={`https://robohash.org/${location.id}?set=set2&size=250x250`} className=" w-64 h-64" />
                <h1 className="bg-cardSecondary mb-3 p-3 rounded-b-full text-black border-2 border-purple-600 ">
                    {location.city}
                </h1>
                <div className="flex justify-center">
                    <span className="button"><img src={weather.current.condition.icon} alt="" /></span>
                    <span className="button text-3xl p-1">
                        {weather.current.temp_c}°
                    </span>
                </div>
            </div>
            <div className="card back">
            <h1 className="bg-cardSecondary mb-3 p-3 rounded-b-full text-black border-2 border-purple-600 ">
                    {location.city} front
                </h1>
                <div className="flex justify-center">
                    <ul className="stats">
                        <li className="stat">Cloud: {weather.current.cloud}%</li>
                        <li className="stat">Feels like: {weather.current.feelslike_c}°C</li>
                        <li className="stat">Humidity: {weather.current.humidity}%</li>
                        <li className="stat">Local time: {weather.location.localtime.slice(10)}</li>
                        <li className="stat">Wind Direction: {weather.current.wind_dir}</li>
                        <li className="stat">Wind Speed: {weather.current.wind_mph}mph</li>
                    </ul>
                    
                    
                </div>
            </div>
            
            </>:"loading..."}
        </div>
    )
}
