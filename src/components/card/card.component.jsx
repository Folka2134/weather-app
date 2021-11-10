import React from 'react'

import { FaCloudSun } from 'react-icons/fa';
import { WiCelsius } from 'react-icons/wi';

export const Card = (props) => {

    return (
        <div className="flex flex-col bg-purple-800 hover:bg-purple-900 border-2 border-gray-300 rounded-md m-3 p-6 cursor-pointer shadow-md  w-auto h-auto transition-all duration-500 ease-linear scale-0 hover:scale-x-150">
            <img alt="monster" src={`https://robohash.org/${props.location.id}?set=set2&size=250x250`} className=" w-64 h-64" />
            <h1 className="bg-gray-700 mb-3 p-3 rounded-b-full text-white">
                location
            </h1>
            <div className="flex justify-center">
                <span className="button"><FaCloudSun size={55} color={"white"} /></span>
                <span className="button text-3xl p-3">
                    {/* {props.weather.current.temp_c}°c */}
                    3°
                </span>
            </div>
        </div>
    )
}
