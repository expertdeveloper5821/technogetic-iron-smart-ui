import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Stack } from '../components/Stack/Stack';

export default {
    title: 'ReactComponentLibrary/Stack',
    component: Stack
} as ComponentMeta<typeof Stack>;

const Template: ComponentStory<typeof Stack> = (args) => <Stack {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    align: 'center',
    direction: 'column',
    isInline: false,
    justify: 'center',
    shouldWrapChildren: false,
    spacing: 2,
    wrap: true
};

export const Row = Template.bind({});
Row.args = {
    align: 'center',
    direction: 'row',
    isInline: false,
    justify: 'start',
    shouldWrapChildren: false,
    spacing: 2,
    wrap: true
};
