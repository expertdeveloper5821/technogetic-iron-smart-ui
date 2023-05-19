import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MenuItem } from '../components/MenuItem/MenuItem';

export default {
    title: 'ReactComponentLibrary/MenuItem',
    component: MenuItem
} as ComponentMeta<typeof MenuItem>;

const Template: ComponentStory<typeof MenuItem> = (args) => <MenuItem {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    // value: 'This is MenuItem Line-2',
    children: 'This is MenuItem Line-2'
};
