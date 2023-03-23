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
    onChange: function (e: any): void {
        console.log('onChange', e.target.value);
    },
    placeholder: 'I am a placeholder',
    defaultValue: 'Hello, world'
};
