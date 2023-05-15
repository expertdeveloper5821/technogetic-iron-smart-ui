import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Alert } from '../components/Alert/Alert';

export default {
    title: 'ReactComponentLibrary/Alert',
    component: Alert
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    // timeout: 300,
    // message: 'I am a Alert',
    type: 'success'
};

export const failure = Template.bind({});
failure.args = {
    // timeout: 300,
    // message: 'I am a Alert',
    type: 'failure'
};

export const warning = Template.bind({});
warning.args = {
    // timeout: 300,
    // message: 'I am a Alert',
    type: 'warning'
};
