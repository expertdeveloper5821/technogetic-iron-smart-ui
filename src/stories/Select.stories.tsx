import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Select } from '../components/Select/Select';

export default {
    title: 'ReactComponentLibrary/Select',
    component: Select
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    options: ['Green', 'Red', 'Yellow', 'Blue', 'Pink', 'Black', 'Orange'],
    placeholder: 'Select...',
    onChange: function (val: any): void {
        console.log(val);
    }
};
