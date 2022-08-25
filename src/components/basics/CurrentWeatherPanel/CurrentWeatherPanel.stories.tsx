import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CurrentWeatherPanel, CurrentWeatherPanelProps } from "./CurrentWeatherPanel";

export default {
    title: 'CurrentWeatherPanel',
    component: CurrentWeatherPanel
} as ComponentMeta<typeof CurrentWeatherPanel>;


const Template : ComponentStory<typeof CurrentWeatherPanel> = (args: CurrentWeatherPanelProps) => (
    <CurrentWeatherPanel {...args} />
);

export const Default = Template.bind({});
Default.args = {
    weatherTypeText: "Clouds", 
    iconSrc: "http://openweathermap.org/img/wn/10d@4x.png", 
    temperature: "19", 
};


