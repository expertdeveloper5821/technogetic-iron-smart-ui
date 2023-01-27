import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IButton } from '../components/Button/Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'ReactComponentLibrary/Button',
    component: IButton
} as ComponentMeta<typeof IButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof IButton> = (args) => <IButton {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    children: 'Hello world!',
    color: 'white',
    disabled: false,
    backgroundColor: 'blue'
};

export const Secondary = Template.bind({});
Secondary.args = {
    children: 'Click me!'
};
