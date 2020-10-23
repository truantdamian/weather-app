import React from 'react'
import { getFormatDay } from '../../helpers/Time';
import { IDailyWeather } from '../../interfaces/DailyWeather.interface'

const WeatherItem: React.FC<IDailyWeather> = ({dt,temp,weather}) => {
    const {icon, description} = weather[0];
    const {min,max}= temp;
    return (
        <div className="m-2 shadow-xl bg-white p-2 rounded flex flex-col items-center justify-center">
            {getFormatDay(dt)===getFormatDay(Date.now()/1000)?
                <p className="text-gray-600 font-bold mb-2">Hoy</p>:
                <p className="text-gray-600 font-bold mb-2">{getFormatDay(dt)}</p>
            }
            <div className="flex">
            <p className="font-bold text-blue-500 p-1">{Math.round(min)}°C</p>
            <p className="font-bold text-red-600 p-1">{Math.round(max)}°C</p>
            </div>
            <div>
                <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather"/>
            </div>
            <div>
                <p className="text-sm text-gray-600">{description}</p>
            </div>
        </div>
    )
}

export default WeatherItem
