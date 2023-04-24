import { fireEvent, render, screen } from '@testing-library/react';
import { Select, optionType } from './Select';
import '@testing-library/jest-dom';
import React from 'react';

describe('Select', () => {
    const options: optionType[] = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' }
    ];

    test('renders a Select component with options', () => {
        const onChange = jest.fn();
        render(<Select options={options} onChange={onChange} />);
        // const select = screen.getByRole('textbox');
        expect(Select).toBeInTheDocument();
        // fireEvent.click(select);
        const option1 = screen.getByText('Option 1');
        const option2 = screen.getByText('Option 2');
        const option3 = screen.getByText('Option 3');
        expect(option1).toBeInTheDocument();
        expect(option2).toBeInTheDocument();
        expect(option3).toBeInTheDocument();
    });

    test('renders a Select component with a placeholder', () => {
        const onChange = jest.fn();
        const placeholder = 'Select an option';
        render(<Select options={options} onChange={onChange} placeholder={placeholder} />);
        // const select = screen.getByRole('textbox');
        expect(Select).toBeInTheDocument();
        expect(Select).toHaveTextContent(placeholder);
    });

    test('calls onChange with the selected option', () => {
        const onChange = jest.fn();
        render(<Select options={options} onChange={onChange} />);
        // const select = screen.getByRole('textbox');
        // fireEvent.click(select);
        const option2 = screen.getByText('Option 2');
        fireEvent.click(option2);
        expect(onChange).toHaveBeenCalledWith({ value: 'option2', label: 'Option 2' });
    });

    test('calls onChange with an array of selected options in multi-select mode', () => {
        const onChange = jest.fn();
        render(<Select options={options} onChange={onChange} isMulti />);
        // const select = screen.getByRole('textbox');
        // fireEvent.click(select);
        const option1 = screen.getByText('Option 1');
        const option3 = screen.getByText('Option 3');
        fireEvent.click(option1);
        fireEvent.click(option3);
        expect(onChange).toHaveBeenCalledWith([
            { value: 'option1', label: 'Option 1' },
            { value: 'option3', label: 'Option 3' }
        ]);
    });
});
