import React from "react";
import { ForecastPanel, ForecastPanelProps} from "../../basics/ForecastPanel/ForecastPanel";
import { CityNav, CityNavProps } from "../../basics/CityNav/CityNav";

export interface IndexScreenProps {
    cityNav: CityNavProps
    weather: ForecastPanelProps
}

export const IndexScreen = ({cityNav, weather} : IndexScreenProps) => (
    <div className="w-[970px]">
        <div className="pb-12">
            <CityNav {...cityNav}/>
        </div>
        <ForecastPanel {...weather}/>    
    </div>
);