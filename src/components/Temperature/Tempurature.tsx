import React from "react";
import "./Temperature.css";

interface TemperatureProps {
  className: string
  value: string
}

export default ({ className, value }: TemperatureProps) => (
  <div className={className}>
    {value}°
  </div>
);