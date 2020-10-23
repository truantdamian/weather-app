import React, { useState } from 'react'
import Location from '../location/Location'

const Header= () => {
    const [showLocationForm, setShowLocationForm] = useState(false);
    return (
        <header className="bg-indigo-400 w-full flex flex-row justify-center py-4 fixed">
            <div className="flex flex-1 justify-center">
                <h1 className="text-2xl text-indigo-100 font-bold">Weather App</h1>
                
                <nav className="absolute right-0 mr-8">
                    <div className="relative">    
                        <button className="p-2 border rounded bg-indigo-400 focus:outline-none"
                                onClick={()=>setShowLocationForm(!showLocationForm)}>
                            <svg className="w-6 h-6 text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        </button>
                        {showLocationForm &&
                            <div className="bg-white rounded p-2 shadow-xl absolute right-0 mt-1 w-64">
                                <Location setShowLocationForm={setShowLocationForm}/>
                            </div>
                        }
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header
