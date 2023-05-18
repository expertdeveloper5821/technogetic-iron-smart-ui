import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Select } from './Select';
import '@testing-library/jest-dom/extend-expect';

describe('Select', () => {
    const options = ['Option 1', 'Option 2', 'Option 3'];
    const mockOnChange = jest.fn();

    test('should render placeholder when no option is selected', () => {
        const { getByText } = render(<Select option={options} onChange={mockOnChange} />);

        const placeholderElement = getByText('select..');
        expect(placeholderElement).toBeInTheDocument();
    });

    test('should render selected option when an option is selected', () => {
        const { getByText } = render(<Select option={options} onChange={mockOnChange} />);

        const selectContainer = getByText('select..');
        fireEvent.click(selectContainer);

        const optionElement = getByText('Option 1');
        fireEvent.click(optionElement);

        const selectedOption = getByText('Option 1');
        expect(selectedOption).toBeInTheDocument();
    });

    test('should call onChange with selected value', () => {
        const { getByText } = render(<Select option={options} onChange={mockOnChange} />);

        const selectContainer = getByText('select..');
        fireEvent.click(selectContainer);

        const optionElement = getByText('Option 2');
        fireEvent.click(optionElement);

        expect(mockOnChange).toHaveBeenCalledWith('Option 2');
    });

    test('should close the dropdown when clicked outside', () => {
        const { getByText, queryByText } = render(<Select option={options} onChange={mockOnChange} />);

        const selectContainer = getByText('select..');
        fireEvent.click(selectContainer);

        expect(getByText('Option 1')).toBeInTheDocument();

        fireEvent.click(document);

        expect(queryByText('Option 1')).toBeNull();
    });
});
