import React from "react";

export interface CurrentTextProps {
    className: string
    text: string
}

export const CurrentText = ({ className, text }: CurrentTextProps) => (
    <div className={`text-text font-montserrat text-3xl ${className}`}>{text}</div>
);