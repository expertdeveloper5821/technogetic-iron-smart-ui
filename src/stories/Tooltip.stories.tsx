import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tooltip } from '../components/Tooltip/Tooltip';

export default {
    title: 'ReactComponentLibrary/Tooltip',
    component: Tooltip
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => <Tooltip {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    text: 'somethingadfssssssssssss',
    children: 'haaan mai hi husadfasdfasfasdfdfadsfsaerefadfaesdfcaes</div'
};
