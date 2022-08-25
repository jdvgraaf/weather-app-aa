import React from "react";
import { ForecastPanel, ForecastPanelProps} from "../../basics/WeatherPanel/WeatherPanel";
import { CityNav, CityNavProps } from "../../basics/CityNav/CityNav";

export interface IndexScreenProps {
    className: string
    cityNav: CityNavProps
    weather: ForecastPanelProps
}

export const IndexScreen = ({className, cityNav, weather} : IndexScreenProps) => (
    <div className={`w-1/2 h-full ${className}`}>
        <CityNav className="h-[13%] px-24" {...cityNav}/>
        <ForecastPanel className="h-3/5" {...weather}/>    
    </div>
);