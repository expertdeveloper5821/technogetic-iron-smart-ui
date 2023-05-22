import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NavBar } from '../components/NavBar/NavBar';
import { MenuItem } from '../components/MenuItem/MenuItem';

export default {
    title: 'ReactComponentLibrary/NavBar',
    component: NavBar
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    children: (
        <>
            <MenuItem
                onClick={(e) => {
                    console.log(e);
                }}
            >
                Item-1
            </MenuItem>
            <MenuItem
                onClick={(e) => {
                    console.log(e);
                }}
            >
                Item-2
            </MenuItem>
            <MenuItem
                onClick={(e) => {
                    console.log(e);
                }}
            >
                Item-3
            </MenuItem>
            <MenuItem
                onClick={(e) => {
                    console.log(e);
                }}
            >
                Item-4
            </MenuItem>
            <MenuItem
                onClick={(e) => {
                    console.log(e);
                }}
            >
                Item-5
            </MenuItem>
        </>
    )
};
