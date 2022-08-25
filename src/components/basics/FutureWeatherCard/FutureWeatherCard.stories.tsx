import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { DisplayCard, DisplayCardProps } from "./FutureWeatherCard";

export default {
    title: 'DisplayCard',
    component: DisplayCard
} as ComponentMeta<typeof DisplayCard>;


const templateProps = {
    weekday: "Wed", 
    iconSrc: "http://openweathermap.org/img/wn/10d@2x.png", 
    temperature: "-18", 
    className: "display-card-1"
}

const Template : ComponentStory<typeof DisplayCard> = (args: DisplayCardProps) => (
    <DisplayCard {...Object.assign(args, templateProps)} />
);

export const Middle = Template.bind({});
Middle.args = {
    rounding:"Middle"
};

export const Right = Template.bind({});
Right.args = {
    rounding:"Right",
};

export const Left = Template.bind({});
Left.args = {
    rounding:"Left",
};
