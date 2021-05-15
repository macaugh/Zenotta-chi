import { Story, Meta } from '@storybook/react';
import React from 'react';
import { Button } from "../Button/Button";
import { Dropdown, DropdownProps } from './Dropdown';

export default {
    title: 'Example/Dropdown',
    component: Dropdown,
} as Meta;

const Template: Story<DropdownProps & { children: React.ReactElement[] }> = (args) => {
    return (
        <div style={{ width: '110px' }}>
            <Dropdown {...args} />
        </div>
    );
};

export const WithButton = Template.bind({});
WithButton.args = {
    dropdownMethod: 'hover',
    listItems: [
        {
            value: '1st menu item',
            isDisabled: true
        },
        {
            value: '2nd menu item',
        },
        {
            value: 3
        }
    ],
    children: [
        <Button backgroundColour="#000" variant="outlined">Hover me</Button>
    ]
};