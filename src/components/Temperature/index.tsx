import React from "react";
import "./Temperature.css";

interface TemperatureProps {
  value: String
}

export default ({ value }: TemperatureProps) => (
  <div className="future-degrees-1">
    <div className="text teko-normal-onyx-49px">{value}°</div>
  </div>
);