import React from "react";
import Link from 'next/link';

export interface CityNavProps {
    className: string
    cities: Array<string>
    selectedCity: string
}

export const CityNav = ({ className, cities, selectedCity }: CityNavProps) => (
    <div className={`grid grid-cols-3 items-center text-center ${className}`}>
        {cities.map((city, index) => (
            <h1 key={index} className={city === selectedCity ? "font-arboria-medium text-selected-nav-text text-3xl" : "font-arboria-light text-text text-3xl"}>
                <Link href={`/${city}`}>
                    {city.toUpperCase()}
                </Link>
            </h1>)
        )}
    </div>
);