import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Switch } from '../components/Switch';

export default {
    title: 'ReactComponentLibrary/Switch',
    component: Switch
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    checked: true
};
