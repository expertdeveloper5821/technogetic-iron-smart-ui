import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Nav } from '../components/Nav/Nav';

export default {
    title: 'ReactComponentLibrary/Nav',
    component: Nav
} as ComponentMeta<typeof Nav>;

const Template: ComponentStory<typeof Nav> = (args) => <Nav {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    notificationCount: 200,
    onClick: function (event: any, clicktype: string): void {
        console.log(event, clicktype);
    },
    userData: {
        userName: 'Harry Verma',
        designation: 'Web devloper',
        email: 'harry@technogetic.com',
        avatar: 'https://cdn3.iconfinder.com/data/icons/avatars-flat/33/man_5-512.png'
    }
};
