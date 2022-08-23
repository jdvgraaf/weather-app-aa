import React from "react";
import "./WeatherText.css";

interface WeatherTextProps {
    className: String
    text: String
}

export default ({ className, text } : WeatherTextProps) => (
    <div className={`${className || ""}`}>
        <div className="montserrat-light-onyx-30px">{text}</div>
    </div>
);