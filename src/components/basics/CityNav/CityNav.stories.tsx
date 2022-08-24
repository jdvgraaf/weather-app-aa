import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CityNav, CityNavProps } from "./CityNav";

export default {
    title: 'CityNav',
    component: CityNav
} as ComponentMeta<typeof CityNav>;


const Template : ComponentStory<typeof CityNav> = (args: CityNavProps) => (
    <CityNav {...args} />
);

export const Default = Template.bind({});
Default.args = {
    selectedCity: "Ottawa",
    cities:["Ottawa", "Moscow", "Tokyo"]
};


