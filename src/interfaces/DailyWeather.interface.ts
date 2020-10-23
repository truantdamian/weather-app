import { ITemp } from "./Temp.interface";
import { IWeather } from "./Weather.interface";

export interface IDailyWeather {
    dt:number;
    temp: ITemp;
    weather:IWeather[];
}