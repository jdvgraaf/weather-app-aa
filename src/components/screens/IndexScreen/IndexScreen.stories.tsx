import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { IndexScreen, IndexScreenProps } from "./IndexScreen";

export default {
    title: 'IndexScreen',
    component: IndexScreen
} as ComponentMeta<typeof IndexScreen>;


const Template: ComponentStory<typeof IndexScreen> = (args: IndexScreenProps) => (
    <IndexScreen {...args} />
);

export const Default = Template.bind({});
Default.args = {
    cityNav: {
        selectedCity: "Ottawa",
        cities: ["Ottawa", "Moscow", "Tokyo"]
    },
    weather: {
        currentWeather: {
            weatherTypeText: "Cloudy",
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
    }
};


