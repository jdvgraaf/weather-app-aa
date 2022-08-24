import React from "react";
import { CurrentWeatherPanel, CurrentWeatherPanelProps } from "../CurrentWeatherPanel/CurrentWeatherPanel";
import { FutureWeatherPanel, FutureWeatherPanelProps } from "../FutureWeatherPanel/FutureWeatherPanel";

export interface ForecastPanelProps {
    currentWeather: CurrentWeatherPanelProps
    futureWeather: FutureWeatherPanelProps
}

export const ForecastPanel = ({ currentWeather, futureWeather }: ForecastPanelProps) => (
    <div className="p-1.5 bg-background rounded-3xl shadow-2xl h-[689px]">
        <div className="flex h-3/5">
            <CurrentWeatherPanel {...currentWeather} />
        </div>
        <div className="flex h-2/5">
            <FutureWeatherPanel {...futureWeather} />
        </div>
    </div>
);