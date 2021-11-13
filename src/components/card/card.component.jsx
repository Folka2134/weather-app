import React, { useEffect, useState } from 'react'

import axios from 'axios';

import { FaCloudSun } from 'react-icons/fa';
import { WiCelsius } from 'react-icons/wi';

export const Card = ({ location }) => {
    const [weather, setWeather] = useState([])

    // weather API
    useEffect(() => {
      const fetchData = async () => {
          const result = await axios(
          `http://api.weatherapi.com/v1/current.json?key=8a32bc17bfde477e8d8175552211011&q=${location.city}&aqi=no`,
          );
  
          setWeather(result.data);
          
      };
  
      fetchData();
    }, []);

    return (
        <div>
            <div className="card front">
            <img alt="monster" src={`https://robohash.org/${location.id}?set=set2&size=250x250`} className=" w-64 h-64" />
                <h1 className="bg-cardSecondary mb-3 p-3 rounded-b-full text-black border-2 border-purple-600 ">
                    {location.city}
                </h1>
                <div className="flex justify-center">
                    <span className="button"><FaCloudSun color={"white"} /></span>
                    <span className="button text-3xl p-1">
                        {/* <WiCelsius size={55}/> */}
                        {weather.current.temp_c}°
                    </span>
                </div>
            </div>
            {/* <div className="card back">
            <h1 className="bg-cardSecondary mb-3 p-3 rounded-b-full text-black border-2 border-purple-600 ">
                    {location.city} front
                </h1>
                <div className="flex justify-center">
                    Loading data...
                </div>
            </div> */}
        </div>
    )
}
