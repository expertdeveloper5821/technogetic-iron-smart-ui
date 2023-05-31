import React from 'react';
import { Switch } from './Switch';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Switch component', () => {
    test('renders with default props', () => {
        const { container } = render(<Switch />);
        const switchElement = container.firstChild as HTMLElement;

        expect(switchElement).toBeInTheDocument();
        expect(switchElement.tagName).toBe('DIV');
        expect(switchElement).toHaveClass('switch');

        const inputElement = switchElement.querySelector('input[type="checkbox"]') as HTMLInputElement;
        expect(inputElement).toBeInTheDocument();
        expect(inputElement).toHaveAttribute('id', 'switch-toggle');
        expect(inputElement.checked).toBe(false);

        const labelElement = switchElement.querySelector('label') as HTMLLabelElement;
        expect(labelElement).toBeInTheDocument();
        expect(labelElement).toHaveAttribute('for', 'switch-toggle');
    });

    test('handles onChange event', () => {
        const handleChange = jest.fn();
        const { container } = render(<Switch onChange={handleChange} />);
        const inputElement = container.querySelector('input[type="checkbox"]');

        fireEvent.click(inputElement);

        expect(handleChange).toHaveBeenCalledTimes(1);
        expect(handleChange).toHaveBeenCalledWith(expect.any(Object));
    });
});
