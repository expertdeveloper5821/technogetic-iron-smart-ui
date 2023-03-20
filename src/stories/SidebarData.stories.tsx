import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Sidebar } from '../components/Sidebar/Sidebar';

export default {
    title: 'ReactComponentLibrary/Sidebar',
    component: Sidebar
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    sidebarData: [
        { id: 1, title: 'Home', link: '/', items: [] },
        {
            id: 2,
            title: 'About',
            link: '/about',
            items: [
                { id: 4, title: 'Our Story', link: '/about/story' },
                { id: 5, title: 'Our Team', link: '/about/team' }
            ]
        },
        {
            id: 3,
            title: 'Contact',
            link: '/contact',
            items: [
                { id: 6, title: 'CTO', link: '/contact/cto' },
                { id: 7, title: 'Manager', link: '/contact/manager' }
            ]
        }
    ]
};
