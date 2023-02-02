import { fireEvent, render, screen } from '@testing-library/react';
import { Input } from './Input';
import '@testing-library/jest-dom';
import React from 'react';
describe('Input', () => {
    test('should render input', () => {
        render(React.createElement(Input, { type: "text", value: "Hi rendering" }));
    });
    test('should render input with correct value', () => {
        render(React.createElement(Input, { type: "text", "data-testid": "email-input", value: "test@mail.com" }));
        expect(screen.getByTestId('email-input')).toHaveValue('test@mail.com');
    });
    test('should update the value when input changes', () => {
        const value = 'test value';
        const newValue = 'new test value';
        const datatestid = 'email-input';
        const onChange = jest.fn();
        render(React.createElement(Input, { value: value, "data-testid": datatestid, onChange: onChange }));
        const input = screen.getByTestId('email-input');
        fireEvent.change(input, { target: { value: newValue } });
        expect(onChange).toHaveBeenCalledWith(newValue);
    });
});
//# sourceMappingURL=Input.test.js.map