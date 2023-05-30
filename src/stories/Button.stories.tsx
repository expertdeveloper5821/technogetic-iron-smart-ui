import React, { MouseEvent } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../components/Button/Button';
import { DeleteIcon } from '../assets/DeleteIcon';
import { EnterIcon } from '../assets/EnterIcon';

export default {
    onClick: function (e: MouseEvent<HTMLButtonElement>): void {
        console.log('onClick', (e.target as HTMLButtonElement).value);
    },
    title: 'ReactComponentLibrary/Button',
    component: Button
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'Techno Button'
};

export const Contained = Template.bind({});
Contained.args = {
    varient: 'contained',
    disabled: false
};

export const Outline = Template.bind({});
Outline.args = {
    varient: 'outline'
};

export const Upload = Template.bind({});
Upload.args = {
    varient: 'contained',
    type: 'file'
};

export const startIcon = Template.bind({});
startIcon.args = {
    varient: 'contained',
    label: 'Start Icon',
    startIcon: <DeleteIcon />
};

export const endIcon = Template.bind({});
endIcon.args = {
    varient: 'contained',
    label: 'End Icon',
    endIcon: <EnterIcon />
};
