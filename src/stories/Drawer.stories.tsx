import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Drawer } from '../components/Drawer/Drawer';

export default {
    title: 'ReactComponentLibrary/Drawer',
    component: Drawer
} as ComponentMeta<typeof Drawer>;

const Template: ComponentStory<typeof Drawer> = (args) => <Drawer {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    align: 'left',
    // width: '1200px',
    // color: 'blue',
    // bg: 'yellow',
    drawerOpen: true
};

export const right = Template.bind({});
right.args = {
    align: 'right',
    drawerOpen: true
};
