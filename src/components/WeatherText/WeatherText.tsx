import React from "react";
import "./WeatherText.css";

interface WeatherTextProps {
    text: String
}

export default ({ text }: WeatherTextProps) => (
    <div className="montserrat-light-onyx-30px">
        {text}
    </div>
);