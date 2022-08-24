import React from "react";

import { ForecastPanel, ForecastPanelProps} from "../../basics/ForecastPanel/ForecastPanel";
import { CityNav, CityNavProps } from "../../basics/CityNav/CityNav";

import "./IndexScreen.css";

export interface IndexScreenProps {
    cityNav: CityNavProps
    weather: ForecastPanelProps
}

export const IndexScreen = ({cityNav, weather} : IndexScreenProps) => (
    <div className="app-layout">
        <div className="pad-nav">
            <CityNav {...cityNav}/>
        </div>
        <ForecastPanel {...weather}/>    
    </div>
);