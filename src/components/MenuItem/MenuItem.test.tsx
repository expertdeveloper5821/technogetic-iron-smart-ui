import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MenuItem } from './MenuItem';
import '@testing-library/jest-dom';

describe('MenuItem', () => {
    test('should render with default props and invoke onClick when clicked', () => {
        const onClickMock = jest.fn();
        const { getByText } = render(<MenuItem onClick={onClickMock} />);
        const menuItem = getByText('Menu Item');

        expect(menuItem).toBeInTheDocument();
        expect(menuItem).toHaveClass('notSelected');

        fireEvent.click(menuItem);
        expect(onClickMock).toHaveBeenCalledTimes(1);
        expect(onClickMock).toHaveBeenCalledWith('Menu Item');
    });

    test('should render with custom props and apply appropriate classes', () => {
        const onClickMock = jest.fn();
        const { getByText } = render(<MenuItem autofocus={true} children="Custom Item" className="customClass" disableGutters={true} onClick={onClickMock} value="Custom Value" />);
        const menuItem = getByText('Custom Item');

        expect(menuItem).toBeInTheDocument();
        expect(menuItem).toHaveClass('customClass');
        expect(menuItem).toHaveClass('selected');
        expect(menuItem).toHaveClass('removeGutters');

        fireEvent.click(menuItem);
        expect(onClickMock).toHaveBeenCalledTimes(1);
        expect(onClickMock).toHaveBeenCalledWith('Custom Value');
    });
});
