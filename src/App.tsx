import React, { useState } from 'react';
import Header from './components/header/Header';
import Weather from './components/weather/Weather';
import { LocationContext } from './context/LocationContext';
import { cities } from './data/cities';
import { ILocation } from './interfaces/Location.interface';

function App() {

  const defaultLocation:ILocation = cities.find(x=>x.code ==='bsas')!;
  
  const [selectedLocation, setSelectedLocation] = useState(defaultLocation);

  return (
        <LocationContext.Provider value={{selectedLocation, setSelectedLocation}}>
          <div className="overflow-auto bg-gray-300 h-screen">
            <Header />
            <div className="flex flex-col mt-24">
              <Weather/>
            </div>
          </div>
        </LocationContext.Provider>
  );
}

export default App;
