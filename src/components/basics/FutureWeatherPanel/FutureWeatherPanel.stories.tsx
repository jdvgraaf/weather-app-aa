import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { FutureWeatherPanel, FutureWeatherPanelProps } from "./FutureWeatherPanel";

export default {
    title: 'FutureWeatherPanel',
    component: FutureWeatherPanel
} as ComponentMeta<typeof FutureWeatherPanel>;


const forecast = [{
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


const Template = (args: FutureWeatherPanelProps) => (
    <FutureWeatherPanel {...args} />
);

export const Default = Template.bind({});
Default.args = {
    forecast: forecast
};

