import React from 'react'

import { FaCloudSun } from 'react-icons/fa';
import { WiCelsius } from 'react-icons/wi';

export const Card = ({ location, handleChoice}) => {

    return (
        <div>
            <div className="card front">
                <h1 className="bg-cardSecondary mb-3 p-3 rounded-b-full text-black border-2 border-purple-600 ">
                    location front
                </h1>
                <div className="flex justify-center">
                    Loading data...
                </div>
            </div>
            <div className="card back" onClick={handleClick}>
                <img alt="monster" src={`https://robohash.org/${location.id}?set=set2&size=250x250`} className=" w-64 h-64" />
                <h1 className="bg-cardSecondary mb-3 p-3 rounded-b-full text-black border-2 border-purple-600 ">
                    location back
                </h1>
                <div className="flex justify-center">
                    <span className="button"><FaCloudSun size={55} color={"white"} /></span>
                    <span className="button text-3xl p-1">
                        <WiCelsius size={55}/>
                    </span>
                </div>
            </div>
        </div>
    )
}
