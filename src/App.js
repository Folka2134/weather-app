import React, { useState } from 'react'

import { mainLocations } from './locations';

import { SearchBox } from './components/searchBox/searchBox.component';
import { CardList } from './components/cardList/cardList.component';

import './App.css';


const App = () => {

  const [locations, setLocation] = useState([...mainLocations])
  const [searchBox, setSearchBox] = useState("")
  const [history, setHistory] = useState([])

  // Saving Searchbox user input, to be used in filteredLocations
  const handleChange = (e) => {
    setSearchBox(e.currentTarget.value)
  }

  // Saving user input to history
  const saveHistory = (e) => {
    if (e.key === "Enter") {
      setHistory([...history, e.currentTarget.value]);
      console.log(history);
    }
  }

  // Filtering locations based on searchbox state
  const filteredLocations = locations.filter((location) => {
    if (location.city_ascii || location.country) {
      return location.city_ascii.toLowerCase().includes(searchBox.toLocaleLowerCase()) || location.country.toLowerCase().includes(searchBox.toLocaleLowerCase())
    }
    return location
  })

  return (
    <div className="App h-full min-h-screen bg-gray-800 bg-weather-background bg-cover bg-center bg-fixed">
      <div className="pt-36">
        <h1 className="text-6xl font-title bg-gray-900 bg-opacity-40 text-textTitle">Folka.WeatherFlip</h1>
          <SearchBox handleChange={handleChange} saveHistory={saveHistory}/>
          <CardList locations={filteredLocations}/>
      </div>
    </div>
  );
}

export default App;
