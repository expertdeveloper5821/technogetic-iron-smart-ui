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
    isOpen: true,
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

export const right = Template.bind({});
right.args = {
    align: 'right',
    isOpen: true,
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
