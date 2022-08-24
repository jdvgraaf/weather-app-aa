import React from "react";
import "./CityNav.css";

const getText = (selectedCity: string) => (city: string) => <h1 className={city === selectedCity ? "arboria-medium-onyx-45px" : "arboria-light-onyx-45px"}>{city.toUpperCase()}</h1>

export interface CityNavProps {
    cities: Array<string>
    selectedCity: string
}

export const CityNav = ({ cities, selectedCity }: CityNavProps) => (
    <div className="city-nav">
        {cities.map(getText(selectedCity))}
    </div>
);