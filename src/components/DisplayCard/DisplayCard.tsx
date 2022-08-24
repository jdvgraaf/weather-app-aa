import React from "react";
import WeatherText from "../WeatherText/WeatherText";
import WeatherIcon from "../WeatherIcon/WeatherIcon";
import Temperature from "../Temperature/Tempurature";
import "./DisplayCard.css";

const roundingMap = {
    "Left": "display-card-round-bottom-left",
    "Right": "display-card-round-bottom-right",
    "Middle": ""
}

export interface DisplayCardProps {
    rounding: 'Left' | 'Middle' | 'Right'
    weekday: 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun'
    iconSrc: String
    temperature: String
    className: String
}

export const DisplayCard = ({ rounding, weekday, iconSrc, temperature, className }: DisplayCardProps) => (
    <div className={`display-card-2 ${roundingMap[rounding]} ${className || ""}`}>
        <WeatherText text={weekday}/>
        <WeatherIcon src={iconSrc} className="weather-icon-future" />
        <Temperature className="temperature-future" value={temperature}/>
    </div>
);