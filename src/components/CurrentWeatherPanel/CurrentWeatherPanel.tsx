import React from "react";
import CurrentText from "../CurrentText/CurrentText";
import WeatherIcon from "../WeatherIcon/WeatherIcon";
import Temperature from "../Temperature/Tempurature";
import "./CurrentWeatherPanel.css";


export interface CurrentWeatherPanelProps {
    weatherTypeText: string
    iconSrc: string
    temperature: string
}

export const CurrentWeatherPanel = ({ weatherTypeText, iconSrc, temperature }: CurrentWeatherPanelProps) => (
    <div className="current-panel">
        <CurrentText text="Today" />
        <div className="flex-row">
            <WeatherIcon className="weather-icon-current" src={iconSrc} />
            <div className="overlap-group">
                <div className="temperature-panel-current">
                    <Temperature className="temperature-current" value={temperature} />
                </div>
                <div>
                    <CurrentText text={weatherTypeText} />
                </div>
            </div>
        </div>
    </div>
);