import { fireEvent, render, screen } from '@testing-library/react';
import { Input } from './Input';
import '@testing-library/jest-dom';
import React from 'react';

describe('Input', () => {
    test('renders a plain input field when type is not "password" and adornment/ornament props are not present', () => {
        const { getByPlaceholderText } = render(<Input placeholder="Enter your name" />);
        const inputElement = getByPlaceholderText('Enter your name');
        expect(inputElement).toBeInTheDocument();
        expect((inputElement as HTMLInputElement).type).toBe('text');
    });

    test('renders a password input field with a visibility button', () => {
        const { getByPlaceholderText, getByTestId } = render(<Input type="password" placeholder="Enter your password" />);
        const inputElement = getByPlaceholderText('Enter your password');
        const visibilityButton = getByTestId('password-visibility-toggle');

        expect(inputElement).toBeInTheDocument();
        expect((inputElement as HTMLInputElement).type).toBe('password');

        expect(visibilityButton).toBeInTheDocument();

        fireEvent.click(visibilityButton);
        expect((inputElement as HTMLInputElement).type).toBe('password');

        fireEvent.click(visibilityButton);
        expect((inputElement as HTMLInputElement).type).toBe('password');
    });

    it('renders an input field with an adornment to the left when adornment prop is present', () => {
        const { getByText, getByPlaceholderText } = render(<Input adornment="$" placeholder="Enter the amount" />);
        const adornmentElement = getByText('$');
        const inputElement = getByPlaceholderText('Enter the amount');
        expect(adornmentElement).toBeInTheDocument();
        expect(inputElement).toBeInTheDocument();
        expect(adornmentElement.parentNode).toHaveClass('adornmentContent');
        expect(inputElement.parentNode).toHaveClass('adornInputField');
    });

    it('renders an input field with an ornament to the right when ornament prop is present', () => {
        const { getByText, getByPlaceholderText } = render(<Input ornament="kg" placeholder="Enter the weight" />);
        const ornamentElement = getByText('kg');
        const inputElement = getByPlaceholderText('Enter the weight');
        expect(ornamentElement).toBeInTheDocument();
        expect(inputElement).toBeInTheDocument();
        expect(ornamentElement.parentNode).toHaveClass('oranmentContent');
        expect(inputElement.parentNode).toHaveClass('oranInputField');
    });
});
