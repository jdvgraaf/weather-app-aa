import React from "react";
import { CurrentWeatherPanel, CurrentWeatherPanelProps } from "../CurrentWeatherPanel/CurrentWeatherPanel";
import { FutureWeatherPanel, FutureWeatherPanelProps } from "../FutureWeatherPanel/FutureWeatherPanel";
import "./ForecastPanel.css";

export interface ForecastPanelProps {
    currentWeather: CurrentWeatherPanelProps
    futureWeather: FutureWeatherPanelProps
}

export const ForecastPanel = ({ currentWeather, futureWeather }: ForecastPanelProps) => (
    <div className="weather-panel">
        <div className="current-weather-panel-container">
            <CurrentWeatherPanel {...currentWeather} />
        </div>
        <div className="future-weather-panel-container">
            <FutureWeatherPanel {...futureWeather} />
        </div>
    </div>
);