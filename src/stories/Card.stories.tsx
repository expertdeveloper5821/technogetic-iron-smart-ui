import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Card } from '../components/Card/Card';

export default {
    title: 'ReactComponentLibrary/Card',
    component: Card
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    // title: 'First Card',
    padding: '10px',
    children: "Hey i am card's children",
    className: 'card'
};
