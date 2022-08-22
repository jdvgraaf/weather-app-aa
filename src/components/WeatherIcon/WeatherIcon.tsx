import React from "react";
import "./WeatherIcon.css";

interface WeatherIconProps {
    src: String
    className: String
}

export default ({ src, className }: WeatherIconProps) => (
    <div 
        className={`weather-icon-2 ${className || ""}`} 
        style={{ backgroundImage: `url(${src})` }}/>
);