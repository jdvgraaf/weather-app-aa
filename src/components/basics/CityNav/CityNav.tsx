import React from "react";
import Link from 'next/link';

export interface CityNavProps {
    cities: Array<string>
    selectedCity: string
}

export const CityNav = ({ cities, selectedCity }: CityNavProps) => (
        <div className="grid grid-cols-3 items-center text-center">
        {cities.map((city, index) => (
            <h1 key={index} className={city === selectedCity ? "arboria-medium-onyx-45px" : "arboria-light-onyx-45px"}>
                <Link href="/posts/first-post">
                    {city.toUpperCase()}
                </Link>
            </h1>)
        )}
    </div>
);