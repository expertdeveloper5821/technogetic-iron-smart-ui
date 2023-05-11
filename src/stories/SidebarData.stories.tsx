import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Sidebar } from '../components/Sidebar/Sidebar';

export default {
    title: 'ReactComponentLibrary/Sidebar',
    component: Sidebar
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    align: 'left'
    // width: '1200px',
    // color: 'blue',
    // bg: 'yellow',
};

export const right = Template.bind({});

right.args = {
    align: 'right'
};
