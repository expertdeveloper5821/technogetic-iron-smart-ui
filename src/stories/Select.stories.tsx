import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Select } from '../components/Select/Select';

export default {
    title: 'ReactComponentLibrary/Select',
    component: Select
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
{
    Primary.args = {
        option: ['orange', 'apple', 'mango'],
        onChange: function (value: string | number) {
            console.log(value);
        }
    };
}
