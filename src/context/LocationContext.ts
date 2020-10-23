import React from 'react';
import { ILocation } from './../interfaces/Location.interface';

export interface ILocationContext {
    selectedLocation: ILocation;
    setSelectedLocation: (value: ILocation) => void;
};

export const LocationContext = React.createContext<ILocationContext|undefined>(undefined);