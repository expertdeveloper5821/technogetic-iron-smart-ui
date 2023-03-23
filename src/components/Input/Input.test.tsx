import { fireEvent, render, screen } from '@testing-library/react';
import { Input } from './Input';
import '@testing-library/jest-dom';
import React from 'react';

describe('Input', () => {
    test('should render input', () => {
        render(<Input type="text" value="Hi rendering" onChange={() => {}} />);
    });
    test('should render input with correct value', () => {
        render(<Input type="text" data-testid="email-input" value="test@mail.com" onChange={() => {}} />);
        expect(screen.getByDisplayValue('test@mail.com')).toHaveValue('test@mail.com');
    });
    test('should update the value when input changes', async () => {
        const onChange = jest.fn();
        render(<Input data-testid="email-input" defaultValue="default" onChange={onChange} />);
        const inputElement = screen.getByTestId('email-input');
        fireEvent.change(inputElement, { target: { value: 'new test value' } });
        expect(onChange).toHaveBeenCalled();
        expect(inputElement).toHaveValue('new test value');
    });
});
