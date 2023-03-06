import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input } from '../components/Input/Input';

export default {
    title: 'ReactComponentLibrary/Input',
    component: Input
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    onChange: function (): void {},
    placeholder: 'I am a placeholder',
    value: 'Hello, world'
};
