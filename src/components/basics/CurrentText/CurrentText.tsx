import React from "react";
import "./CurrentText.css";

export interface CurrentTextProps {
    text: string
}

export const CurrentText = ({ text }: CurrentTextProps) => (
    <div className="montserrat-light-onyx-37px">{text}</div>
);