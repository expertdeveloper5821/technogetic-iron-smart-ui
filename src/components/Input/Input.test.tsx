import React from 'react';
import { Input } from './Input';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Input Component', () => {
    test('should render an input field with the provided props', () => {
        const onChangeMock = jest.fn();
        const { getByTestId } = render(<Input type="text" placeholder="Enter your name" required onChange={onChangeMock} data-testid="input" />);

        const inputElement = getByTestId('generalInput');
        expect(inputElement).toBeInTheDocument();
        expect(inputElement).toHaveAttribute('type', 'text');
        expect(inputElement).toHaveAttribute('placeholder', 'Enter your name');
        expect(inputElement).toBeRequired();
        fireEvent.change(inputElement, { target: { value: 'John Doe' } });
        expect(onChangeMock).toHaveBeenCalledTimes(1);
    });

    test('should toggle password visibility when clicking the password visibility button', () => {
        const { getByTestId } = render(<Input type="password" placeholder="Enter your password" data-testid="passwordInput" />);

        const passwordInput = getByTestId('passwordInput');
        expect(passwordInput).toHaveAttribute('type', 'password');

        const passwordVisibilityButton = getByTestId('passwordVisibility');
        fireEvent.click(passwordVisibilityButton);
        expect(passwordInput).toHaveAttribute('type', 'text');

        fireEvent.click(passwordVisibilityButton);
        expect(passwordInput).toHaveAttribute('type', 'password');
    });

    test('should render an input field with adornment', () => {
        const { getByTestId } = render(<Input type="text" placeholder="Enter your email" adornment="@domain.com" data-testid="adornmentInput" />);

        const inputElement = getByTestId('adornmentInput');
        const adornmentElement = getByTestId('adornment');
        expect(inputElement).toBeInTheDocument();
        expect(adornmentElement).toBeInTheDocument();
        expect(adornmentElement.textContent).toBe('@domain.com');
    });

    test('should render an input field with ornament', () => {
        const { getByTestId } = render(<Input type="text" placeholder="Enter your name" ornament="*" data-testid="oranmentInput" />);

        const inputElement = getByTestId('oranmentInput');
        const ornamentElement = getByTestId('oranment');
        expect(inputElement).toBeInTheDocument();
        expect(ornamentElement).toBeInTheDocument();
        expect(ornamentElement.textContent).toBe('*');
    });
});
