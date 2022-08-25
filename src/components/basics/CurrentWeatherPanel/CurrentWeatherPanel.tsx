import React from "react";
import { CurrentText } from "../CurrentText/CurrentText";
import { WeatherIcon } from "../WeatherIcon/WeatherIcon";
import { Temperature } from "../Temperature/Tempurature";

export interface CurrentWeatherPanelProps {
    weatherTypeText: string
    iconSrc: string
    temperature: string
}

export const CurrentWeatherPanel = ({ weatherTypeText, iconSrc, temperature }: CurrentWeatherPanelProps) => (
    <div className="rounded-t-3xl items-center justify-center flex flex-col w-full mb-1 bg-card-background" >
        <CurrentText text="Today" />
        <div className="flex mt-2 items-center -mt-12 -ml-16">
            <WeatherIcon className="w-[400px] h-[400px]" src={iconSrc} />
            <div className="ml-6">
                <Temperature className="text-[150px] -mt-10 -mb-10" value={temperature} />
                <CurrentText text={weatherTypeText} />
            </div>
        </div>
    </div>
);