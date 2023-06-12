import React, { ChangeEvent } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Popover } from '../components/Popover/Popover';

export default {
    title: 'ReactComponentLibrary/Popover',
    component: Popover
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = () => (
    <>
        <Popover content={<div>Popover Content</div>} placement="right">
            <button>Open Popover</button>
        </Popover>
        <div>hi</div>
    </>
);

export const Primary = Template.bind({});
Primary.args = {
    // onChange: function (e: ChangeEvent<HTMLInputElement>): void {
    //     console.log('onChange', e.target.value);
    // },
    // placeholder: 'I am a placeholder',
    // type: 'password',
    // error: false
};

export const TextField = Template.bind({});
TextField.args = {
    // onChange: function (e: ChangeEvent<HTMLInputElement>): void {
    //     console.log('onChange', e.target.value);
    // },
    // placeholder: 'I am a placeholder',
    // label: 'Hello, world',
    // type: 'text',
    // error: false
};

export const Adornment = Template.bind({});
Adornment.args = {
    onChange: function (e: ChangeEvent<HTMLInputElement>): void {
        console.log('onChange', e.target.value);
    },
    placeholder: 'I am a placeholder',
    adornment: '₹',
    type: 'email',
    error: false
};

export const ornament = Template.bind({});
ornament.args = {
    onChange: function (e: ChangeEvent<HTMLInputElement>): void {
        console.log('onChange', e.target.value);
    },
    placeholder: 'I am a placeholder',
    ornament: '@',
    type: 'text',
    error: false
};
