import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Switch } from '../components/Switch';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'ReactComponentLibrary/Switch',
    component: Switch
} as ComponentMeta<typeof Switch>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    checked: true
    // style: {
    //     width: '50%',
    //     marginBottom: '1rem',
    //     marginTop: '1rem',
    //     borderRadius: '0.25rem',
    //     border: '1px solid #ccc',
    //     padding: '0.5rem',
    //     fontSize: '1rem'
    // }
};

export const Secondary = Template.bind({});
Secondary.args = {
    checked: false
};
