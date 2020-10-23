import React, { useContext } from 'react'
import { ILocationContext, LocationContext } from '../../context/LocationContext'
import { cities } from '../../data/cities'
import { ILocation } from '../../interfaces/Location.interface'

const Location:React.FC<any> = ({setShowLocationForm}) => {

    const  {selectedLocation,setSelectedLocation}:ILocationContext = useContext(LocationContext)!;

    const {code} = selectedLocation;


    const handleClick=(city:ILocation)=>{
        setSelectedLocation(city);
        setShowLocationForm(false);
    }

    return (
        <div className="flex flex-1 flex-col">
            <div className="w-full my-3 mb-3">
                <p
                    className="ml-2 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Ciudades
                </p>
                <ul>

                    {
                        cities.map(item=>
                            <li 
                                key={item.code} 
                                className={`hover:bg-indigo-400 hover:text-white p-2 cursor-pointer
                                            ${code===item.code?'bg-indigo-500 text-white':''}
                                            `} 
                                onClick={()=>handleClick(item)}
                            >
                                {item.name}
                            </li>
                        )
                    }


                </ul>
            </div>
        </div>
    )
}

export default Location
