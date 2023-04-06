import { fireEvent, render, screen } from '@testing-library/react';
import { TextArea } from './TextArea';
import '@testing-library/jest-dom';
import React from 'react';

describe('Input', () => {
    test('renders TextArea component without errors', () => {
        render(<TextArea />);
    });
    test('renders TextArea component with correct default props', () => {
        const { getByPlaceholderText } = render(<TextArea />);
        expect(getByPlaceholderText('Write here..')).toBeInTheDocument();
        expect(getByPlaceholderText('Write here..')).toHaveAttribute('rows', '5');
        expect(getByPlaceholderText('Write here..')).toHaveAttribute('cols', '33');
        expect(getByPlaceholderText('Write here..')).toHaveClass('textField');
    });

    test('invokes onChange function when value changes', () => {
        const onChange = jest.fn();
        const { getByPlaceholderText } = render(<TextArea placeholder="Type your message" onChange={onChange} />);
        fireEvent.change(getByPlaceholderText('Type your message'), { target: { value: 'Hello World' } });
        expect(onChange).toHaveBeenCalledTimes(1);
    });
    // test('renders TextArea component with correct form and maxLength props', () => {
    //     const { getByPlaceholderText } = render(<TextArea form="my-form" maxLength="100" />);
    //     expect(getByPlaceholderText('Write here..')).toHaveAttribute('form', 'my-form');
    //     expect(getByPlaceholderText('Write here..')).toHaveAttribute('maxlength', '100');
    // });
});
