import { render, screen } from '@testing-library/react';
import { IButton } from './Button';
import '@testing-library/jest-dom';
import React from 'react';
describe('Button', () => {
    test('renders the Button component', () => {
        render(React.createElement(IButton, { children: "Hello world!" }));
    });
    test('button should be disabled', () => {
        render(React.createElement(IButton, { disabled: true, children: "Test Button" }));
        expect(screen.getByRole('button', { name: 'Test Button' })).toBeDisabled();
    });
    test('renders correct text', () => {
        render(React.createElement(IButton, null, "Submit"));
        const buttonElement = screen.getByText(/submit/i);
        expect(buttonElement).toBeInTheDocument();
    });
    test('calls the click handler function on click', () => {
        const clickHandler = jest.fn();
        render(React.createElement(IButton, { onClick: clickHandler }, "Submit"));
        const buttonElement = screen.getByText(/submit/i);
        buttonElement.click();
        expect(clickHandler).toHaveBeenCalledTimes(1);
    });
});
//# sourceMappingURL=Button.test.js.map