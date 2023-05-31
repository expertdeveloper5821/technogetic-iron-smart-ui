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
    padding: '10px',
    children: "Hey i am card's children",
    cardheaderimg: 'https://www.w3schools.com/bootstrap4/img_avatar3.png',
    footer: 'This is my footer section',
    height: '200px'
};

export const NoImg = Template.bind({});
NoImg.args = {
    padding: '10px',
    children: "Hey i am card's children",
    footer: 'This is my footer section'
};
