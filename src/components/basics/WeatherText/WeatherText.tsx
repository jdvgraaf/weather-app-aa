import React from "react";
import "./WeatherText.css";

export interface WeatherTextProps {
    text: string
}

export const WeatherText = ({ text }: WeatherTextProps) => (
    <div className="montserrat-light-onyx-30px">
        {text}
    </div>
);