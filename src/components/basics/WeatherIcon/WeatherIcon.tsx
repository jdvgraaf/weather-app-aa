import React from "react";
import "./WeatherIcon.css";

export interface WeatherIconProps {
    src: string
    className: string
}

export const WeatherIcon = ({ src, className }: WeatherIconProps) => (
    <div 
        className={`${className || ""}`} 
        style={{ backgroundImage: `url(${src})` }}/>
);