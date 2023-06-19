import React, { ChangeEvent } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Pagination } from '../components/Pagination/Pagination';

export default {
    title: 'ReactComponentLibrary/Pagination',
    component: Pagination
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => (
    <>
        <Pagination currentPage={1} totalPages={10}></Pagination>
    </>
);

export const Primary = Template.bind({});
Primary.args = {};
