import React from "react";

export interface TemperatureProps {
  className: string
  value: string
}

export const Temperature = ({ className, value }: TemperatureProps) => (
  <div className={`text-text font-teko ${className}`}>
    {value}°
  </div>
);