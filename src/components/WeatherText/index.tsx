import React from "react";
import "./WeatherText.css";

interface props {
    className: String
    text: String
}

export default ({ className, text } : WeatherTextProps) => (
    <div className={`future-weekday-2 ${className || ""}`}>
        <div className="wed montserrat-light-onyx-30px">{text}</div>
    </div>
);