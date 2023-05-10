import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Drawer } from '../components/Drawer/Drawer';

export default {
    title: 'ReactComponentLibrary/Drawer',
    component: Drawer
} as ComponentMeta<typeof Drawer>;

const Template: ComponentStory<typeof Drawer> = (args) => <Drawer {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    openDrawer: true,
    // align: 'left',
    drawerData: [
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

export const CloseDrawer = Template.bind({});

CloseDrawer.args = {
    // align: 'left',
    drawerData: [
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
