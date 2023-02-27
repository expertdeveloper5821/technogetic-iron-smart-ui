import { render, screen } from '@testing-library/react';
import { Button } from './Button';
import '@testing-library/jest-dom';
import React from 'react';

describe('Button', () => {
    test('renders the Button component', () => {
        render(<Button children="Hello world!" />);
    });
    test('button should be disabled', () => {
        render(<Button disabled children="Test Button" />);
        expect(screen.getByRole('button', { name: 'Test Button' })).toBeDisabled();
    });
    test('renders correct text', () => {
        render(<Button>Submit</Button>);
        const buttonElement = screen.getByText(/submit/i);
        expect(buttonElement).toBeInTheDocument();
    });
    test('calls the click handler function on click', () => {
        const clickHandler = jest.fn();
        render(<Button onClick={clickHandler}>Submit</Button>);
        const buttonElement = screen.getByText(/submit/i);
        buttonElement.click();
        expect(clickHandler).toHaveBeenCalledTimes(1);
    });
});
