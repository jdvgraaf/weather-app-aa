import React from "react";
import { CurrentText } from "../CurrentText/CurrentText";
import { WeatherIcon } from "../WeatherIcon/WeatherIcon";
import { Temperature } from "../TemperatureText/TempuratureText";

export interface CurrentWeatherPanelProps {
    weatherTypeText: string
    iconSrc: string
    temperature: string
}

export const CurrentWeatherPanel = ({ weatherTypeText, iconSrc, temperature }: CurrentWeatherPanelProps) => (
    <div className="rounded-t-3xl justify-center flex flex-col w-full mb-1 bg-card-background" >
        <div className="flex flex-col items-center justify-center">
            <CurrentText className="" text="Today" />
            <div className="flex items-center -ml-24 h-52">
                <WeatherIcon className="w-[250px] h-[250px]" src={iconSrc} />
                <div>
                    <Temperature className="text-8xl -mt-5 " value={temperature} />
                    <CurrentText className="" text={weatherTypeText} />
                </div>
            </div>
        </div>
    </div>
);