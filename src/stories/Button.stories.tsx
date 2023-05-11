import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../components/Button/Button';

export default {
    onClick: function (e: any): void {
        console.log('onClick', e.target.value);
    },
    title: 'ReactComponentLibrary/Button',
    component: Button
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    children: 'Hello world!',
    disabled: false,
    bg: 'red'
};

export const outline = Template.bind({});
outline.args = {
    outline: 'primary',
    children: 'outline Button'
};
