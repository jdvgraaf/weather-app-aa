import React from "react";
import { DisplayCard, DisplayCardProps } from "../FutureWeatherCard/FutureWeatherCard";

const roundingMap = {
    "Left": "display-card-round-bottom-left",
    "Right": "display-card-round-bottom-right",
    "Middle": ""
}

interface SizeFour {
    0: DisplayCardProps,
    1: DisplayCardProps,
    2: DisplayCardProps,
    3: DisplayCardProps
}

export interface FutureWeatherPanelProps {
    forecast: SizeFour
}

export const FutureWeatherPanel = ({ forecast }: FutureWeatherPanelProps) => (
    <div className="grid grid-cols-4 gap-x-1 w-full h-full">
        <div className="w-full h-full">
            <DisplayCard
                rounding="Left"
                weekday={forecast[0].weekday}
                iconSrc={forecast[0].iconSrc}
                temperature={forecast[0].temperature}
                className="display-card-1"
            />
        </div>
        <div className="w-full h-full">
            <DisplayCard
                rounding="Middle"
                weekday={forecast[1].weekday}
                iconSrc={forecast[1].iconSrc}
                temperature={forecast[1].temperature}
                className="display-card-1"
            />
        </div>
        <div className="w-full h-full">
            <DisplayCard
                rounding="Middle"
                weekday={forecast[2].weekday}
                iconSrc={forecast[2].iconSrc}
                temperature={forecast[2].temperature}
                className="display-card-1"
            />
        </div>
        <div className="w-full h-full">
            <DisplayCard
                rounding="Right"
                weekday={forecast[3].weekday}
                iconSrc={forecast[3].iconSrc}
                temperature={forecast[3].temperature}
                className="display-card-1"
            />
        </div>
    </div>
);