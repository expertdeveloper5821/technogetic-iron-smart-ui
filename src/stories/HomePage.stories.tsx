import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Home } from '../components/Home';

const HomeStory = {
    title: 'ReactComponentLibrary/Home'
} as ComponentMeta<typeof Home>;

export default HomeStory;

const Template: ComponentStory<typeof Home> = () => <Home></Home>;
export const homepage = Template.bind({});
