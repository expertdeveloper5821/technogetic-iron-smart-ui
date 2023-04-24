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
    buttons: [
        {
            id: 'edit',
            title: 'Edit',
            width: 100,
            value: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path
                        d="m19 20.25c0-.402-.356-.75-.75-.75-2.561 0-11.939 0-14.5 0-.394 0-.75.348-.75.75s.356.75.75.75h14.5c.394 0 .75-.348.75-.75zm-7.403-3.398 9.124-9.125c.171-.171.279-.423.279-.684 0-.229-.083-.466-.28-.662l-3.115-3.104c-.185-.185-.429-.277-.672-.277s-.486.092-.672.277l-9.143 9.103c-.569 1.763-1.555 4.823-1.626 5.081-.02.075-.029.15-.029.224 0 .461.349.848.765.848.511 0 .991-.189 5.369-1.681zm-3.27-3.342 2.137 2.137-3.168 1.046zm.955-1.166 7.651-7.616 2.335 2.327-7.637 7.638z"
                        fillRule="nonzero"
                    />
                </svg>
            )
        },
        {
            id: 'delete',
            title: 'Delete',
            width: 100,
            value: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path
                        d="m4.015 5.494h-.253c-.413 0-.747-.335-.747-.747s.334-.747.747-.747h5.253v-1c0-.535.474-1 1-1h4c.526 0 1 .465 1 1v1h5.254c.412 0 .746.335.746.747s-.334.747-.746.747h-.254v15.435c0 .591-.448 1.071-1 1.071-2.873 0-11.127 0-14 0-.552 0-1-.48-1-1.071zm14.5 0h-13v15.006h13zm-4.25 2.506c-.414 0-.75.336-.75.75v8.5c0 .414.336.75.75.75s.75-.336.75-.75v-8.5c0-.414-.336-.75-.75-.75zm-4.5 0c-.414 0-.75.336-.75.75v8.5c0 .414.336.75.75.75s.75-.336.75-.75v-8.5c0-.414-.336-.75-.75-.75zm3.75-4v-.5h-3v.5z"
                        fillRule="nonzero"
                    />
                </svg>
            )
        },
        {
            id: 'show',
            title: 'Show',
            width: 100,
            value: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 8.449-11.985 8.449c-7.18 0-12.015-8.449-12.015-8.449s4.446-7.551 12.015-7.551c7.694 0 11.985 7.551 11.985 7.551zm-7 .449c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5z" />
                </svg>
            )
        }
    ],
    columns: [
        {
            id: 'name',
            title: 'Name',
            width: 100
        },
        {
            id: 'age',
            title: 'Age',
            width: 100
        },
        {
            id: 'email',
            title: 'Email',
            width: 150
        },
        {
            id: 'address',
            title: 'Address',
            width: 150
        }
    ],
    data: [
        {
            name: 'vam',
            age: 35,
            email: 'vam@example.com',
            address: 'abc'
        },
        {
            name: 'John',
            age: 25,
            email: 'john@example.com',
            address: 'abc'
        },
        {
            name: 'Jane',
            age: 30,
            email: 'jane@example.com',
            address: 'abc'
        },
        {
            name: 'Bob',
            age: 35,
            email: 'bob@example.com',
            address: 'abc'
        }
    ]
};
