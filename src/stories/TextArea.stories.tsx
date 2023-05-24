import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextArea } from '../components/TextArea/TextArea';

export default {
    title: 'ReactComponentLibrary/TextArea',
    component: TextArea
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => <TextArea {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    onChange: function (e: React.ChangeEvent<HTMLTextAreaElement>): void {
        console.log('onChange', e.target.value);
    },
    error: false
};
