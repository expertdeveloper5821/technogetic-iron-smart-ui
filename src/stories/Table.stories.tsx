import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Table } from '../components/Table/Table';

export default {
    title: 'ReactComponentLibrary/Table',
    component: Table
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    columns: [
        {
            type: 'fullName',
            title: 'Full Name',
            width: 200
        },
        {
            type: 'role',
            title: 'Role',
            width: 200
        },
        {
            type: 'address',
            title: 'Address',
            width: 200
        }
    ],
    data: [
        {
            fullName: 'Francisco Mendes',
            role: 'Full Stack',
            address: 'Kurukshetra'
        },
        {
            fullName: 'Ricardo Malva',
            role: 'Social Media Manager',
            address: 'Ambala'
        },
        {
            fullName: 'devashish Sharma',
            role: 'React Developer',
            address: 'Pehowa'
        },
        {
            fullName: 'Shivangi Gupta',
            role: 'Mern Trainee',
            address: 'Kaithal'
        },
        {
            fullName: 'Nobody',
            role: 'Everything',
            address: 'Karnal'
        }
    ]
};
