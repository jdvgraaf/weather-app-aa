import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ForecastPanel, ForecastPanelProps } from "./ForecastPanel";

export default {
    title: 'ForecastPanel',
    component: ForecastPanel
} as ComponentMeta<typeof ForecastPanel>;


const Template: ComponentStory<typeof ForecastPanel> = (args: ForecastPanelProps) => (
    <ForecastPanel {...args} />
);

export const Default = Template.bind({});
Default.args = {
    currentWeather: {
        weatherTypeText: "Clouds",
        iconSrc: "http://openweathermap.org/img/wn/10d@4x.png",
        temperature: "19"
    },
    futureWeather: {
        forecast: [{
            weekday: "Wed",
            iconSrc: "http://openweathermap.org/img/wn/10d@2x.png",
            temperature: "-18",
        },
        {
            weekday: "Thu",
            iconSrc: "http://openweathermap.org/img/wn/11d@2x.png",
            temperature: "0",
        },
        {
            weekday: "Fri",
            iconSrc: "http://openweathermap.org/img/wn/13d@2x.png",
            temperature: "6",
        },
        {
            weekday: "Sat",
            iconSrc: "http://openweathermap.org/img/wn/50d@2x.png",
            temperature: "70",
        }]
    }
};