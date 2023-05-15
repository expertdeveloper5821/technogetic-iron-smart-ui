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

Primary.args = {};

export const Contained = Template.bind({});
Contained.args = {
    varient: 'contained'
};

export const Outline = Template.bind({});
Outline.args = {
    varient: 'outline'
};
