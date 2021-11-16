import React, { useState } from 'react'

// import axios from 'axios';
import { mainLocations } from './locations';

import { SearchBox } from './components/searchBox/searchBox.component';
import { CardList } from './components/cardList/cardList.component';

import './App.css';


const App = () => {

  const [locations, setLocation] = useState([...mainLocations])
  const [searchBox, setSearchBox] = useState("")

  const handleChange = (e) => {
    setSearchBox(e.currentTarget.value)
    // setLocation(e.currentTarget.value)
  }

  // dummy data

    // weather API
  // useEffect(() => {
  //     const fetchData = async () => {
  //       const result = await axios(
  //         'http://api.weatherapi.com/v1/current.json?key=8a32bc17bfde477e8d8175552211011&q=London&aqi=no',
  //       );
   
  //       setWeather(result.data);
  //     };
   
  //     fetchData();
  //   }, []);


  const filteredLocations = locations.filter((location) => {
    if (location.city || location.Continent || location.country) {
      return location.city.toLowerCase().includes(searchBox.toLocaleLowerCase()) || location.Continent.toLowerCase().includes(searchBox.toLocaleLowerCase()) || location.country.toLowerCase().includes(searchBox.toLocaleLowerCase())
    }
    return location
  })
 
  return (
    <div className="App h-full min-h-screen bg-gray-800 bg-weather-background bg-cover bg-center bg-fixed">
      <div className="pt-36">
        <h1 className="text-6xl font-title">Folka.WeatherFlip</h1>
          <SearchBox handleChange={handleChange}/>
          <CardList locations={filteredLocations}/>
      </div>
    </div>
  );
}

export default App;
