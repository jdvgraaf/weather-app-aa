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
        <div className="flex mt-2 items-center">
            <WeatherIcon className="w-64 h-64" src={iconSrc} />
            <div className="ml-6">
                <div className="-mb-5">
                    <Temperature className="text-8axl" value={temperature} />
                </div>
                <div>
                    <CurrentText  text={weatherTypeText} />
                </div>
            </div>
        </div>
    </div>
);