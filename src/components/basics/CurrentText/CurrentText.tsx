import React from "react";

export interface CurrentTextProps {
    text: string
}

export const CurrentText = ({ text }: CurrentTextProps) => (
    <div className="text-text font-montserrat text-4xl">{text}</div>
);