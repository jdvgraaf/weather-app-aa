import React from "react";
import "./Temperature.css";

interface TemperatureProps {
  value: String
}

export default ({ value }: TemperatureProps) => (
  <div className="teko-normal-onyx-49px">
    {value}°
  </div>
);