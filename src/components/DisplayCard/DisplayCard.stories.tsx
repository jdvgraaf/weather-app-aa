import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { DisplayCard, DisplayCardProps } from "./DisplayCard";

export default {
    title: 'DisplayCard',
    component: DisplayCard
} as ComponentMeta<typeof DisplayCard>;


const Template = (args: DisplayCardProps) => (
    <DisplayCard {...args} />
);

export const Middle = Template.bind({});
Middle.args = {
    rounding:"Middle",
    week: "Wed", 
    iconSrc: "http://openweathermap.org/img/wn/10d@2x.png", 
    temperature: "-18", 
    className: "display-card-1"
};

export const Right = Template.bind({});
Right.args = {
    rounding:"Right",
    text: "Wed", 
    iconSrc: "http://openweathermap.org/img/wn/10d@2x.png", 
    temperature: "-18", 
    className: "display-card-1"
};

export const Left = Template.bind({});
Left.args = {
    rounding:"Left",
    text: "Wed", 
    iconSrc: "http://openweathermap.org/img/wn/10d@2x.png", 
    temperature: "-18", 
    className: "display-card-1"
};

