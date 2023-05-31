import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Drawer } from '../components/Drawer/Drawer';
import { MenuItem } from '../components/MenuItem/MenuItem';
import { Button } from '../components/Button/Button';

export default {
    title: 'ReactComponentLibrary/Drawer',
    component: Drawer
} as ComponentMeta<typeof Drawer>;

const Template: ComponentStory<typeof Drawer> = (args) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <Button onClick={handleClick}>Toggle Drawer</Button>
            <Drawer {...args} isOpen={isOpen}>
                <>
                    <MenuItem
                        onClick={(e: string) => {
                            console.log(e);
                        }}
                    >
                        Item-1
                    </MenuItem>
                    <MenuItem
                        onClick={(e: string) => {
                            console.log(e);
                        }}
                    >
                        Item-2
                    </MenuItem>
                    <MenuItem
                        onClick={(e: string) => {
                            console.log(e);
                        }}
                    >
                        Item-3
                    </MenuItem>
                    <MenuItem
                        onClick={(e: string) => {
                            console.log(e);
                        }}
                    >
                        Item-4
                    </MenuItem>
                    <MenuItem
                        onClick={(e: string) => {
                            console.log(e);
                        }}
                    >
                        Item-5
                    </MenuItem>
                </>
            </Drawer>
        </>
    );
};

export const Primary = Template.bind({});
Primary.args = {
    align: 'left'
};

export const right = Template.bind({});
right.args = {
    align: 'right'
};
