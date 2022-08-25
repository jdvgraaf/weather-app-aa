import React from "react";
import { WeatherText } from "../WeatherText/WeatherText";
import { WeatherIcon } from "../WeatherIcon/WeatherIcon";
import { Temperature } from "../Temperature/Tempurature";

const roundingMap = {
    "Left": "rounded-bl-3xl",
    "Right": "rounded-br-3xl",
    "Middle": ""
}

export interface DisplayCardProps {
    rounding: 'Left' | 'Middle' | 'Right'
    weekday: 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun'
    iconSrc: string
    temperature: string
    className: string
}

export const DisplayCard = ({ rounding, weekday, iconSrc, temperature, className }: DisplayCardProps) => (
    <div className={`flex flex-col bg-card-background h-full justify-center items-center ${roundingMap[rounding]}`}>
        <WeatherText text={weekday} />
        <WeatherIcon src={iconSrc} className="w-32 h-32" />
        <Temperature className="text-6xl" value={temperature} />
    </div>
);