import React from 'react';
import { EnterIcon } from '../assets/EnterIcon';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IconButton } from '../components/IconButton/IconButton';

export default {
    title: 'ReactComponentLibrary/IconButton',
    component: IconButton
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => <IconButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: <EnterIcon />
};

export const UploadBtn = Template.bind({});
UploadBtn.args = {
    type: 'file'
};
