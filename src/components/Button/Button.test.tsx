import { render, screen } from '@testing-library/react';
import { Button } from './Button';
import '@testing-library/jest-dom';
import React from 'react';

describe('Button Component', () => {
    test('Renders the Button component', () => {
        render(<Button children="Hello world!" />);
    });

    test('Button should be disabled', () => {
        render(<Button disabled children="Test Button" />);
        expect(screen.getByRole('button', { name: 'Test Button' })).toBeDisabled();
    });

    test('Renders correct text', () => {
        render(<Button>Submit</Button>);
        const buttonElement = screen.getByText(/submit/i);
        expect(buttonElement).toBeInTheDocument();
    });

    test('Calls the click handler function on click', () => {
        const clickHandler = jest.fn();
        render(<Button onClick={clickHandler}>Submit</Button>);
        const buttonElement = screen.getByText(/submit/i);
        buttonElement.click();
        expect(clickHandler).toHaveBeenCalledTimes(1);
    });

    test('Renders with custom style', () => {
        const customStyle = {
            backgroundColor: 'red',
            color: 'white',
            borderRadius: '5px'
        };
        render(<Button style={customStyle}>Custom Button</Button>);
        const buttonElement = screen.getByText(/custom button/i);
        expect(buttonElement).toHaveStyle('background-color: red; color: white; border-radius: 5px;');
    });
});
