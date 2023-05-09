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
    openSideBar: true,
    align: 'left',
    sidebarData: [
        {
            id: 1,
            path: '/',
            name: 'Dashboard',
            icon: (
                <svg className="svg-icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                    <path d="M0 22h1v-5h4v5h2v-10h4v10h2v-15h4v15h2v-21h4v21h1v1h-24v-1zm4-4h-2v4h2v-4zm6-5h-2v9h2v-9zm6-5h-2v14h2v-14zm6-6h-2v20h2v-20z" />
                </svg>
            ),
            items: []
        },
        {
            id: 2,
            path: '/about',
            name: 'About',
            icon: (
                <svg className="svg-icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                    <path d="M1 20v-2.946c1.993-.656 2.575-2.158 3.668-6.077.897-3.218 1.891-6.784 4.873-8.023-.027-.147-.041-.299-.041-.454 0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5c0 .156-.014.309-.042.458 2.987 1.244 3.984 4.813 4.884 8.033 1.103 3.95 1.697 5.423 3.658 6.062v2.947h-7c0 2.208-1.792 4-4 4s-4-1.792-4-4h-7zm14 0h-6c0 1.656 1.344 3 3 3s3-1.344 3-3zm-13-1h20v-1.241c-2.062-.918-2.82-3.633-3.621-6.498-1.066-3.814-2.167-7.758-6.379-7.761-4.21 0-5.308 3.937-6.369 7.745-.8 2.872-1.559 5.593-3.631 6.514v1.241zm11.492-16.345l.008-.155c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5l.008.152c.455-.099.949-.152 1.487-.152.542 0 1.039.054 1.497.155z" />
                </svg>
            ),
            items: [
                { id: 3, name: 'Our Team', path: '/about/team' },
                { id: 4, name: 'Our Story', path: '/about/story' }
            ]
        },
        {
            id: 5,
            path: '/analytics',
            name: 'Analytics',
            icon: (
                <svg className="svg-icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                    <path d="M4.323 9.699c-.127-.144-.235-.295-.323-.454v-3.021l-3-1.537 10.956-4.687 10.044 5.502h-.001.001v3.498l1 2h-3l1-2v-3.097l-2 .802v2.49c-.08.163-.188.318-.318.466.347.95.398 2.083.404 2.635 1.36-.482 2.645.822 2.364 3.108-.203 1.66-1.147 2.94-2.526 3.431-2.417 4.773-6.285 5.144-7.415 5.144-1.129 0-4.998-.372-7.414-5.144-1.38-.491-2.324-1.771-2.527-3.431-.296-2.433 1.141-3.583 2.364-3.104.007-.551.057-1.66.391-2.601zm13.53.639c-1.668 1.039-4.56 1.557-6.5 1.557-2.112 0-4.655-.498-6.202-1.5-.156.619-.24 1.293-.24 2.024 0 .528-.425.917-.898.917-.121 0-.244-.025-.365-.08-.061-.028-.153-.05-.257-.05-.112 0-.236.026-.345.099-.899.594-.805 3.834 1.395 4.594.22.076.405.238.511.45 2.162 4.296 5.565 4.63 6.557 4.63s4.396-.334 6.557-4.63c.107-.212.291-.374.511-.45 2.199-.76 2.294-4 1.396-4.594-.367-.245-.636.031-.968.031-.472 0-.898-.387-.898-.917 0-.753-.088-1.447-.254-2.081zm.147-1.418c-.82 1.107-4.19 1.975-6.647 1.975-2.762 0-5.512-.857-6.353-1.946v-2.214l6.114 3.133 6.886-2.761v1.813zm-6.097-7.81l7.76 4.251-8.499 3.41-7.812-4.002 8.551-3.659z" />
                </svg>
            ),
            items: [
                { id: 6, name: 'CTO', path: '/contact/cto' },
                { id: 7, name: 'Manager', path: '/contact/manager' }
            ]
        },
        {
            id: 7,
            path: '/',
            name: 'Dashboard',
            icon: (
                <svg className="svg-icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                    <path d="M0 22h1v-5h4v5h2v-10h4v10h2v-15h4v15h2v-21h4v21h1v1h-24v-1zm4-4h-2v4h2v-4zm6-5h-2v9h2v-9zm6-5h-2v14h2v-14zm6-6h-2v20h2v-20z" />
                </svg>
            ),
            items: []
        },
        {
            id: 8,
            path: '/',
            name: 'Dashboard',
            icon: (
                <svg className="svg-icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                    <path d="M0 22h1v-5h4v5h2v-10h4v10h2v-15h4v15h2v-21h4v21h1v1h-24v-1zm4-4h-2v4h2v-4zm6-5h-2v9h2v-9zm6-5h-2v14h2v-14zm6-6h-2v20h2v-20z" />
                </svg>
            ),
            items: []
        },
        {
            id: 9,
            path: '/',
            name: 'Dashboard',
            icon: (
                <svg className="svg-icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                    <path d="M0 22h1v-5h4v5h2v-10h4v10h2v-15h4v15h2v-21h4v21h1v1h-24v-1zm4-4h-2v4h2v-4zm6-5h-2v9h2v-9zm6-5h-2v14h2v-14zm6-6h-2v20h2v-20z" />
                </svg>
            ),
            items: []
        },
        {
            id: 10,
            path: '/',
            name: 'Dashboard',
            icon: (
                <svg className="svg-icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                    <path d="M0 22h1v-5h4v5h2v-10h4v10h2v-15h4v15h2v-21h4v21h1v1h-24v-1zm4-4h-2v4h2v-4zm6-5h-2v9h2v-9zm6-5h-2v14h2v-14zm6-6h-2v20h2v-20z" />
                </svg>
            ),
            items: []
        },
        {
            id: 11,
            path: '/',
            name: 'Dashboard',
            icon: (
                <svg className="svg-icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                    <path d="M0 22h1v-5h4v5h2v-10h4v10h2v-15h4v15h2v-21h4v21h1v1h-24v-1zm4-4h-2v4h2v-4zm6-5h-2v9h2v-9zm6-5h-2v14h2v-14zm6-6h-2v20h2v-20z" />
                </svg>
            ),
            items: []
        },
        {
            id: 12,
            path: '/',
            name: 'Dashboard',
            icon: (
                <svg className="svg-icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                    <path d="M0 22h1v-5h4v5h2v-10h4v10h2v-15h4v15h2v-21h4v21h1v1h-24v-1zm4-4h-2v4h2v-4zm6-5h-2v9h2v-9zm6-5h-2v14h2v-14zm6-6h-2v20h2v-20z" />
                </svg>
            ),
            items: []
        },
        {
            id: 13,
            path: '/',
            name: 'Dashboard',
            icon: (
                <svg className="svg-icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                    <path d="M0 22h1v-5h4v5h2v-10h4v10h2v-15h4v15h2v-21h4v21h1v1h-24v-1zm4-4h-2v4h2v-4zm6-5h-2v9h2v-9zm6-5h-2v14h2v-14zm6-6h-2v20h2v-20z" />
                </svg>
            ),
            items: []
        },
        {
            id: 14,
            path: '/',
            name: 'Dashboard',
            icon: (
                <svg className="svg-icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                    <path d="M0 22h1v-5h4v5h2v-10h4v10h2v-15h4v15h2v-21h4v21h1v1h-24v-1zm4-4h-2v4h2v-4zm6-5h-2v9h2v-9zm6-5h-2v14h2v-14zm6-6h-2v20h2v-20z" />
                </svg>
            ),
            items: []
        },
        {
            id: 15,
            path: '/',
            name: 'Dashboard',
            icon: (
                <svg className="svg-icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                    <path d="M0 22h1v-5h4v5h2v-10h4v10h2v-15h4v15h2v-21h4v21h1v1h-24v-1zm4-4h-2v4h2v-4zm6-5h-2v9h2v-9zm6-5h-2v14h2v-14zm6-6h-2v20h2v-20z" />
                </svg>
            ),
            items: []
        },
        {
            id: 16,
            path: '/',
            name: 'Dashboard',
            icon: (
                <svg className="svg-icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                    <path d="M0 22h1v-5h4v5h2v-10h4v10h2v-15h4v15h2v-21h4v21h1v1h-24v-1zm4-4h-2v4h2v-4zm6-5h-2v9h2v-9zm6-5h-2v14h2v-14zm6-6h-2v20h2v-20z" />
                </svg>
            ),
            items: []
        }
    ]
};

export const leftHalf = Template.bind({});
leftHalf.args = {
    // openSideBar: true,
    align: 'left',
    sidebarData: [
        {
            id: 1,
            path: '/',
            name: 'Dashboard',
            icon: (
                <svg className="svg-icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                    <path d="M0 22h1v-5h4v5h2v-10h4v10h2v-15h4v15h2v-21h4v21h1v1h-24v-1zm4-4h-2v4h2v-4zm6-5h-2v9h2v-9zm6-5h-2v14h2v-14zm6-6h-2v20h2v-20z" />
                </svg>
            ),
            items: []
        },
        {
            id: 2,
            path: '/about',
            name: 'About',
            icon: (
                <svg className="svg-icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                    <path d="M1 20v-2.946c1.993-.656 2.575-2.158 3.668-6.077.897-3.218 1.891-6.784 4.873-8.023-.027-.147-.041-.299-.041-.454 0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5c0 .156-.014.309-.042.458 2.987 1.244 3.984 4.813 4.884 8.033 1.103 3.95 1.697 5.423 3.658 6.062v2.947h-7c0 2.208-1.792 4-4 4s-4-1.792-4-4h-7zm14 0h-6c0 1.656 1.344 3 3 3s3-1.344 3-3zm-13-1h20v-1.241c-2.062-.918-2.82-3.633-3.621-6.498-1.066-3.814-2.167-7.758-6.379-7.761-4.21 0-5.308 3.937-6.369 7.745-.8 2.872-1.559 5.593-3.631 6.514v1.241zm11.492-16.345l.008-.155c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5l.008.152c.455-.099.949-.152 1.487-.152.542 0 1.039.054 1.497.155z" />
                </svg>
            ),
            items: [
                { id: 3, name: 'Our Team', path: '/about/team' },
                { id: 4, name: 'Our Story', path: '/about/story' }
            ]
        },
        {
            id: 5,
            path: '/analytics',
            name: 'Analytics',
            icon: (
                <svg className="svg-icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                    <path d="M4.323 9.699c-.127-.144-.235-.295-.323-.454v-3.021l-3-1.537 10.956-4.687 10.044 5.502h-.001.001v3.498l1 2h-3l1-2v-3.097l-2 .802v2.49c-.08.163-.188.318-.318.466.347.95.398 2.083.404 2.635 1.36-.482 2.645.822 2.364 3.108-.203 1.66-1.147 2.94-2.526 3.431-2.417 4.773-6.285 5.144-7.415 5.144-1.129 0-4.998-.372-7.414-5.144-1.38-.491-2.324-1.771-2.527-3.431-.296-2.433 1.141-3.583 2.364-3.104.007-.551.057-1.66.391-2.601zm13.53.639c-1.668 1.039-4.56 1.557-6.5 1.557-2.112 0-4.655-.498-6.202-1.5-.156.619-.24 1.293-.24 2.024 0 .528-.425.917-.898.917-.121 0-.244-.025-.365-.08-.061-.028-.153-.05-.257-.05-.112 0-.236.026-.345.099-.899.594-.805 3.834 1.395 4.594.22.076.405.238.511.45 2.162 4.296 5.565 4.63 6.557 4.63s4.396-.334 6.557-4.63c.107-.212.291-.374.511-.45 2.199-.76 2.294-4 1.396-4.594-.367-.245-.636.031-.968.031-.472 0-.898-.387-.898-.917 0-.753-.088-1.447-.254-2.081zm.147-1.418c-.82 1.107-4.19 1.975-6.647 1.975-2.762 0-5.512-.857-6.353-1.946v-2.214l6.114 3.133 6.886-2.761v1.813zm-6.097-7.81l7.76 4.251-8.499 3.41-7.812-4.002 8.551-3.659z" />
                </svg>
            ),
            items: [
                { id: 6, name: 'CTO', path: '/contact/cto' },
                { id: 7, name: 'Manager', path: '/contact/manager' }
            ]
        },
        {
            id: 7,
            path: '/',
            name: 'Dashboard',
            icon: (
                <svg className="svg-icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                    <path d="M0 22h1v-5h4v5h2v-10h4v10h2v-15h4v15h2v-21h4v21h1v1h-24v-1zm4-4h-2v4h2v-4zm6-5h-2v9h2v-9zm6-5h-2v14h2v-14zm6-6h-2v20h2v-20z" />
                </svg>
            ),
            items: []
        },
        {
            id: 8,
            path: '/',
            name: 'Dashboard',
            icon: (
                <svg className="svg-icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                    <path d="M0 22h1v-5h4v5h2v-10h4v10h2v-15h4v15h2v-21h4v21h1v1h-24v-1zm4-4h-2v4h2v-4zm6-5h-2v9h2v-9zm6-5h-2v14h2v-14zm6-6h-2v20h2v-20z" />
                </svg>
            ),
            items: []
        },
        {
            id: 9,
            path: '/',
            name: 'Dashboard',
            icon: (
                <svg className="svg-icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                    <path d="M0 22h1v-5h4v5h2v-10h4v10h2v-15h4v15h2v-21h4v21h1v1h-24v-1zm4-4h-2v4h2v-4zm6-5h-2v9h2v-9zm6-5h-2v14h2v-14zm6-6h-2v20h2v-20z" />
                </svg>
            ),
            items: []
        },
        {
            id: 10,
            path: '/',
            name: 'Dashboard',
            icon: (
                <svg className="svg-icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                    <path d="M0 22h1v-5h4v5h2v-10h4v10h2v-15h4v15h2v-21h4v21h1v1h-24v-1zm4-4h-2v4h2v-4zm6-5h-2v9h2v-9zm6-5h-2v14h2v-14zm6-6h-2v20h2v-20z" />
                </svg>
            ),
            items: []
        },
        {
            id: 11,
            path: '/',
            name: 'Dashboard',
            icon: (
                <svg className="svg-icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                    <path d="M0 22h1v-5h4v5h2v-10h4v10h2v-15h4v15h2v-21h4v21h1v1h-24v-1zm4-4h-2v4h2v-4zm6-5h-2v9h2v-9zm6-5h-2v14h2v-14zm6-6h-2v20h2v-20z" />
                </svg>
            ),
            items: []
        },
        {
            id: 12,
            path: '/',
            name: 'Dashboard',
            icon: (
                <svg className="svg-icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                    <path d="M0 22h1v-5h4v5h2v-10h4v10h2v-15h4v15h2v-21h4v21h1v1h-24v-1zm4-4h-2v4h2v-4zm6-5h-2v9h2v-9zm6-5h-2v14h2v-14zm6-6h-2v20h2v-20z" />
                </svg>
            ),
            items: []
        },
        {
            id: 13,
            path: '/',
            name: 'Dashboard',
            icon: (
                <svg className="svg-icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                    <path d="M0 22h1v-5h4v5h2v-10h4v10h2v-15h4v15h2v-21h4v21h1v1h-24v-1zm4-4h-2v4h2v-4zm6-5h-2v9h2v-9zm6-5h-2v14h2v-14zm6-6h-2v20h2v-20z" />
                </svg>
            ),
            items: []
        },
        {
            id: 14,
            path: '/',
            name: 'Dashboard',
            icon: (
                <svg className="svg-icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                    <path d="M0 22h1v-5h4v5h2v-10h4v10h2v-15h4v15h2v-21h4v21h1v1h-24v-1zm4-4h-2v4h2v-4zm6-5h-2v9h2v-9zm6-5h-2v14h2v-14zm6-6h-2v20h2v-20z" />
                </svg>
            ),
            items: []
        },
        {
            id: 15,
            path: '/',
            name: 'Dashboard',
            icon: (
                <svg className="svg-icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                    <path d="M0 22h1v-5h4v5h2v-10h4v10h2v-15h4v15h2v-21h4v21h1v1h-24v-1zm4-4h-2v4h2v-4zm6-5h-2v9h2v-9zm6-5h-2v14h2v-14zm6-6h-2v20h2v-20z" />
                </svg>
            ),
            items: []
        },
        {
            id: 16,
            path: '/',
            name: 'Dashboard',
            icon: (
                <svg className="svg-icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                    <path d="M0 22h1v-5h4v5h2v-10h4v10h2v-15h4v15h2v-21h4v21h1v1h-24v-1zm4-4h-2v4h2v-4zm6-5h-2v9h2v-9zm6-5h-2v14h2v-14zm6-6h-2v20h2v-20z" />
                </svg>
            ),
            items: []
        }
    ]
};

export const right = Template.bind({});

right.args = {
    // openSideBar: true,
    align: 'right',
    sidebarData: [
        {
            id: 1,
            path: '/',
            name: 'Dashboard',
            icon: (
                <svg className="svg-icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                    <path d="M0 22h1v-5h4v5h2v-10h4v10h2v-15h4v15h2v-21h4v21h1v1h-24v-1zm4-4h-2v4h2v-4zm6-5h-2v9h2v-9zm6-5h-2v14h2v-14zm6-6h-2v20h2v-20z" />
                </svg>
            ),
            items: []
        },
        {
            id: 2,
            path: '/about',
            name: 'About',
            icon: (
                <svg className="svg-icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                    <path d="M1 20v-2.946c1.993-.656 2.575-2.158 3.668-6.077.897-3.218 1.891-6.784 4.873-8.023-.027-.147-.041-.299-.041-.454 0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5c0 .156-.014.309-.042.458 2.987 1.244 3.984 4.813 4.884 8.033 1.103 3.95 1.697 5.423 3.658 6.062v2.947h-7c0 2.208-1.792 4-4 4s-4-1.792-4-4h-7zm14 0h-6c0 1.656 1.344 3 3 3s3-1.344 3-3zm-13-1h20v-1.241c-2.062-.918-2.82-3.633-3.621-6.498-1.066-3.814-2.167-7.758-6.379-7.761-4.21 0-5.308 3.937-6.369 7.745-.8 2.872-1.559 5.593-3.631 6.514v1.241zm11.492-16.345l.008-.155c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5l.008.152c.455-.099.949-.152 1.487-.152.542 0 1.039.054 1.497.155z" />
                </svg>
            ),
            items: [
                { id: 3, name: 'Our Team', path: '/about/team' },
                { id: 4, name: 'Our Story', path: '/about/story' }
            ]
        },
        {
            id: 5,
            path: '/analytics',
            name: 'Analytics',
            icon: (
                <svg className="svg-icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                    <path d="M4.323 9.699c-.127-.144-.235-.295-.323-.454v-3.021l-3-1.537 10.956-4.687 10.044 5.502h-.001.001v3.498l1 2h-3l1-2v-3.097l-2 .802v2.49c-.08.163-.188.318-.318.466.347.95.398 2.083.404 2.635 1.36-.482 2.645.822 2.364 3.108-.203 1.66-1.147 2.94-2.526 3.431-2.417 4.773-6.285 5.144-7.415 5.144-1.129 0-4.998-.372-7.414-5.144-1.38-.491-2.324-1.771-2.527-3.431-.296-2.433 1.141-3.583 2.364-3.104.007-.551.057-1.66.391-2.601zm13.53.639c-1.668 1.039-4.56 1.557-6.5 1.557-2.112 0-4.655-.498-6.202-1.5-.156.619-.24 1.293-.24 2.024 0 .528-.425.917-.898.917-.121 0-.244-.025-.365-.08-.061-.028-.153-.05-.257-.05-.112 0-.236.026-.345.099-.899.594-.805 3.834 1.395 4.594.22.076.405.238.511.45 2.162 4.296 5.565 4.63 6.557 4.63s4.396-.334 6.557-4.63c.107-.212.291-.374.511-.45 2.199-.76 2.294-4 1.396-4.594-.367-.245-.636.031-.968.031-.472 0-.898-.387-.898-.917 0-.753-.088-1.447-.254-2.081zm.147-1.418c-.82 1.107-4.19 1.975-6.647 1.975-2.762 0-5.512-.857-6.353-1.946v-2.214l6.114 3.133 6.886-2.761v1.813zm-6.097-7.81l7.76 4.251-8.499 3.41-7.812-4.002 8.551-3.659z" />
                </svg>
            ),
            items: [
                { id: 6, name: 'CTO', path: '/contact/cto' },
                { id: 7, name: 'Manager', path: '/contact/manager' }
            ]
        }
    ]
};
export const rightFull = Template.bind({});

rightFull.args = {
    openSideBar: true,
    align: 'right',
    sidebarData: [
        {
            id: 1,
            path: '/',
            name: 'Dashboard',
            icon: (
                <svg className="svg-icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                    <path d="M0 22h1v-5h4v5h2v-10h4v10h2v-15h4v15h2v-21h4v21h1v1h-24v-1zm4-4h-2v4h2v-4zm6-5h-2v9h2v-9zm6-5h-2v14h2v-14zm6-6h-2v20h2v-20z" />
                </svg>
            ),
            items: []
        },
        {
            id: 2,
            path: '/about',
            name: 'About',
            icon: (
                <svg className="svg-icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                    <path d="M1 20v-2.946c1.993-.656 2.575-2.158 3.668-6.077.897-3.218 1.891-6.784 4.873-8.023-.027-.147-.041-.299-.041-.454 0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5c0 .156-.014.309-.042.458 2.987 1.244 3.984 4.813 4.884 8.033 1.103 3.95 1.697 5.423 3.658 6.062v2.947h-7c0 2.208-1.792 4-4 4s-4-1.792-4-4h-7zm14 0h-6c0 1.656 1.344 3 3 3s3-1.344 3-3zm-13-1h20v-1.241c-2.062-.918-2.82-3.633-3.621-6.498-1.066-3.814-2.167-7.758-6.379-7.761-4.21 0-5.308 3.937-6.369 7.745-.8 2.872-1.559 5.593-3.631 6.514v1.241zm11.492-16.345l.008-.155c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5l.008.152c.455-.099.949-.152 1.487-.152.542 0 1.039.054 1.497.155z" />
                </svg>
            ),
            items: [
                { id: 3, name: 'Our Team', path: '/about/team' },
                { id: 4, name: 'Our Story', path: '/about/story' }
            ]
        },
        {
            id: 5,
            path: '/analytics',
            name: 'Analytics',
            icon: (
                <svg className="svg-icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                    <path d="M4.323 9.699c-.127-.144-.235-.295-.323-.454v-3.021l-3-1.537 10.956-4.687 10.044 5.502h-.001.001v3.498l1 2h-3l1-2v-3.097l-2 .802v2.49c-.08.163-.188.318-.318.466.347.95.398 2.083.404 2.635 1.36-.482 2.645.822 2.364 3.108-.203 1.66-1.147 2.94-2.526 3.431-2.417 4.773-6.285 5.144-7.415 5.144-1.129 0-4.998-.372-7.414-5.144-1.38-.491-2.324-1.771-2.527-3.431-.296-2.433 1.141-3.583 2.364-3.104.007-.551.057-1.66.391-2.601zm13.53.639c-1.668 1.039-4.56 1.557-6.5 1.557-2.112 0-4.655-.498-6.202-1.5-.156.619-.24 1.293-.24 2.024 0 .528-.425.917-.898.917-.121 0-.244-.025-.365-.08-.061-.028-.153-.05-.257-.05-.112 0-.236.026-.345.099-.899.594-.805 3.834 1.395 4.594.22.076.405.238.511.45 2.162 4.296 5.565 4.63 6.557 4.63s4.396-.334 6.557-4.63c.107-.212.291-.374.511-.45 2.199-.76 2.294-4 1.396-4.594-.367-.245-.636.031-.968.031-.472 0-.898-.387-.898-.917 0-.753-.088-1.447-.254-2.081zm.147-1.418c-.82 1.107-4.19 1.975-6.647 1.975-2.762 0-5.512-.857-6.353-1.946v-2.214l6.114 3.133 6.886-2.761v1.813zm-6.097-7.81l7.76 4.251-8.499 3.41-7.812-4.002 8.551-3.659z" />
                </svg>
            ),
            items: [
                { id: 6, name: 'CTO', path: '/contact/cto' },
                { id: 7, name: 'Manager', path: '/contact/manager' }
            ]
        }
    ]
};
