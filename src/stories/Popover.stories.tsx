import React, { ChangeEvent } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Popover } from '../components/Popover/Popover';

export default {
    title: 'ReactComponentLibrary/Popover',
    component: Popover
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => (
    <>
        <Popover {...args}>
            <button>Open Popover</button>
        </Popover>
    </>
);

export const Primary = Template.bind({});
Primary.args = {
    content: <div>Popover Content</div>,
    placement: 'right'
    // onChange: function (e: ChangeEvent<HTMLInputElement>): void {
    //     console.log('onChange', e.target.value);
    // },
    // placeholder: 'I am a placeholder',
    // type: 'password',
    // error: false
};
