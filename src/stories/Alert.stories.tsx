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
    message: 'I am a Alert',
    type: 'success'
};
