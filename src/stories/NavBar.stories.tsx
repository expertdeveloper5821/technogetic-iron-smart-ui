import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NavBar } from '../components/NavBar/NavBar';

export default {
    title: 'ReactComponentLibrary/NavBar',
    component: NavBar
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    // align: 'top'
};
export const Bottom = Template.bind({});

Bottom.args = {
    align: 'bottom'
};
