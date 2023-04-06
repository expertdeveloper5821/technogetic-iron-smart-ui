import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Card } from '../components/Card/Card';
import { Secondary } from './Button.stories';

export default {
    title: 'ReactComponentLibrary/Card',
    component: Card
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    padding: '10px',
    children: "Hey i am card's children"
};

export const cardWithImage = Template.bind({});
cardWithImage.args = {
    children: "Hey i am card's children",
    headerImage: 'https://www.w3schools.com/bootstrap4/img_avatar3.png'
};
