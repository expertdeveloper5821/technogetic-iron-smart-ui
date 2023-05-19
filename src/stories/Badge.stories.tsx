import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Badge } from '../components/Badge/Badge';

export default {
    title: 'ReactComponentLibrary/Badge',
    component: Badge
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    label: 10,
    max: 8,
    type: 'primary'
};
export const Success = Template.bind({});

Success.args = {
    type: 'success',
    style: { height: '2px', width: '2px' }
};
export const Warning = Template.bind({});

Warning.args = {
    label: 10,
    type: 'warning'
};
export const Danger = Template.bind({});

Danger.args = {
    label: 5,
    type: 'danger'
};
