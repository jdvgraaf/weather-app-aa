import React from "react";
import "./CurrentText.css";

interface CurrentTextProps {
    text: String
}

export default ({ text }: CurrentTextProps) => (
    <div className="montserrat-light-onyx-37px">{text}</div>
);