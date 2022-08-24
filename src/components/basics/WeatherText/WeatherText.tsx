import React from "react";

export interface WeatherTextProps {
    text: string
}

export const WeatherText = ({ text }: WeatherTextProps) => (
    <div className="text-text font-montserrat text-3xl">
        {text}
    </div>
);