import React from "react";
import "./Temperature.css";

export interface TemperatureProps {
  className: string
  value: string
}

export const Temperature = ({ className, value }: TemperatureProps) => (
  <div className={className}>
    {value}°
  </div>
);