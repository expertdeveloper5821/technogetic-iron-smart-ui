import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Stack } from '../components/Stack/Stack';
import { MenuItem } from '../components/MenuItem/MenuItem';

export default {
    title: 'ReactComponentLibrary/Stack',
    component: Stack
} as ComponentMeta<typeof Stack>;

const Template: ComponentStory<typeof Stack> = (args) => (
    <Stack {...args}>
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
    </Stack>
);

export const Primary = Template.bind({});
Primary.args = {
    align: 'start',
    direction: 'column',
    isInline: false,
    justify: 'center',
    spacing: 2
};

export const Row = Template.bind({});
Row.args = {
    align: 'center',
    direction: 'row',
    isInline: false,
    justify: 'start',
    spacing: 2
};

export const RowReverse = Template.bind({});
RowReverse.args = {
    align: 'end',
    direction: 'row-reverse',
    isInline: false,
    justify: 'end',
    spacing: 2
};
