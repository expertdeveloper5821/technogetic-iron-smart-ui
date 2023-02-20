import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Select } from '../components/Select/Select';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'ReactComponentLibrary/Select',
    component: Select
} as ComponentMeta<typeof Select>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    options: [
        { value: 'Green', label: 'Green' },
        { value: 'Red', label: 'Red' },
        { value: 'Yellow', label: 'Yellow' },
        { value: 'Blue', label: 'Blue' },
        { value: 'Pink', label: 'Pink' },
        { value: 'Black', label: 'Black' },
        { value: 'Orange', label: 'Orange' }
    ],
    placeholder: 'Select...',
    isMulti: true,
    isSearchable: true,
    onChange: function (val: any): void {
        console.log(val);
    }
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//     value: 'atul is awesome',
//     onChange: function (val): void {
//         val = val;
//     }
// };
