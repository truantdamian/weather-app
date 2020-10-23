import React, { useContext, useEffect, useState } from 'react'
import { ILocationContext, LocationContext } from '../../context/LocationContext';
import { IDailyWeather } from '../../interfaces/DailyWeather.interface';
import WeatherItem from '../weatherItem/WeatherItem';



const Weather = () => {

    const [dailyWeather, setDailyWeather] = useState([])
    const [currentWeather, setCurrentWeather] = useState<IDailyWeather>();
    const [loading, setLoading] = useState(false);
    const  {selectedLocation,setSelectedLocation}:ILocationContext = useContext(LocationContext)!;

    const {name,lat,long} = selectedLocation;

    useEffect(() => {   
        const getWeather = async()=>{
            setLoading(true);
            const apiKey = '43f645eb5c838f7270e1f78893a2c271';
            const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=hourly,current,minutely,alerts&units=metric&lang=es&appid=${apiKey}`;
            const result = await fetch(apiUrl);
            const weather = await result.json();
            const {daily} = weather;
            setCurrentWeather({...daily[0]});
            setDailyWeather(daily.slice(1,6));
            setLoading(false);
        }

        getWeather();
        

    }, [lat,long]);

    return (
        <>
        {loading ?
            <div className="flex items-center  justify-center">
                <p className="font-bold text-indigo-600 text-2xl animate-pulse">Obteniendo datos del clima...</p>
            </div>
        :
        <div className="flex flex-col flex-1">
            <p className="italic text-center text-indigo-500 mb-3">Clima para la ciudad de <span className="font-bold">{name}</span></p>
            
            <div className="mb-5 flex items-center justify-center">
                <div className="w-10/12 lg:w-64">
                {currentWeather && <WeatherItem  {...currentWeather}/>}
                </div>
            </div>
            
            <div className="flex flex-col lg:flex-row flex-1 items-center justify-center">
                
                    {dailyWeather.map((item:IDailyWeather)=>(
                        <div className="w-48" key={item.dt}>
                            <WeatherItem  {...item}/>
                        </div>
                    ))}
                
            </div>


            
        </div>

        
        
        }
        </>
    )
}

export default Weather
