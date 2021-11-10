import React, { useEffect, useState } from 'react'

import axios from 'axios';

import { SearchBox } from './components/searchBox/searchBox.component';
import { CardList } from './components/cardList/cardList.component';

import './App.css';


const App = () => {

  const [data, setData] = useState([])
  const [searchBox, setSearchBox] = useState("")

  const handleChange = (e) => {
    setSearchBox(e.currentTarget.value)
  }

  useEffect(() => {
      const fetchData = async () => {
        const result = await axios(
          'https://jsonplaceholder.typicode.com/users',
        );
   
        setData(result.data);
      };
   
      fetchData();
    }, []);

    
  // useEffect(() => {
  //     const fetchData = async () => {
  //       const result = await axios(
  //         'http://api.weatherapi.com/v1/current.json?key=8a32bc17bfde477e8d8175552211011&q=London&aqi=no',
  //       );
   
  //       setWeather(result.data);
  //     };
   
  //     fetchData();
  //   }, []);


  const filteredLocations = data.filter((location) => {
    return location.name.toLowerCase().includes(searchBox.toLocaleLowerCase())
  })
 
  return (
    <div className="App h-full min-h-screen bg-gray-800">
      <div className="pt-36 fs">
        <h1 className="text-6xl font-title">Folka.Weather</h1>
        <SearchBox handleChange={handleChange}/>
        <CardList locations={filteredLocations}/>
      </div>
    </div>
  );
}

export default App;
