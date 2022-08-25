import React from "react";

export interface WeatherIconProps {
    src: string
    className: string
}

export const WeatherIcon = ({ src, className }: WeatherIconProps) => (
    <img src={src} 
        className={`bg-center ${className || ""}`}/>
);