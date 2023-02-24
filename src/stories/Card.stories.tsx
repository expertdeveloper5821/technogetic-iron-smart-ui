import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Card } from '../components/Card/Card';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'ReactComponentLibrary/Card',
    component: Card
} as ComponentMeta<typeof Card>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    title: 'First Card',
    padding: '10px',
    children: "Hey i am card's children",
    className: 'card'
};
