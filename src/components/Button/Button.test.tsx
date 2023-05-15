import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Button, ButtonProps } from './Button';
import '@testing-library/jest-dom';

describe('Button component', () => {
    const mockOnClick = jest.fn();

    const renderButton = (props?: ButtonProps) => {
        const utils = render(
            <Button onClick={mockOnClick} {...props}>
                Click me
            </Button>
        );
        const button = utils.getByText('Click me');
        return { button, ...utils };
    };

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('renders button with default props', () => {
        const { button } = renderButton();
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent('Click me');
        expect(button).toHaveClass('button');
        expect(button).not.toBeDisabled();
    });

    test('renders button with custom props', () => {
        const customProps: ButtonProps = {
            varient: 'contained',
            className: 'custom-button',
            style: { fontSize: '16px' }
        };
        const { button } = renderButton(customProps);
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent('Click me');
        expect(button).toHaveClass('custom-button');
    });

    test('fires onClick event when button is clicked', () => {
        const { button } = renderButton();
        fireEvent.click(button);
        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });
});
