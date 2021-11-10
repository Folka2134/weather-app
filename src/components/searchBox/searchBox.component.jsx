import React from 'react'

export const SearchBox = ({ handleChange }) => {
    return (
        <input type="search" placeholder="search city" className="border-none outline-none p-4 w-64 leading-4 my-5" onChange={handleChange}/>
    )
}
