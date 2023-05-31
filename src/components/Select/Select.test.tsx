import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Select } from './Select';
import '@testing-library/jest-dom/extend-expect';

describe('Select component', () => {
    const options = ['Option 1', 'Option 2', 'Option 3'];
    const mockOnChange = jest.fn();

    beforeEach(() => {
        render(<Select option={options} onChange={mockOnChange} />);
    });

    test('renders placeholder text initially', () => {
        const placeholderText = screen.getByText('select...');
        expect(placeholderText).toBeInTheDocument();
    });

    test('opens dropdown menu when clicked', () => {
        const selectContainer = screen.getByText('select...');
        fireEvent.click(selectContainer);
        const option1 = screen.getByText('Option 1');
        const option2 = screen.getByText('Option 2');
        const option3 = screen.getByText('Option 3');
        expect(option1).toBeInTheDocument();
        expect(option2).toBeInTheDocument();
        expect(option3).toBeInTheDocument();
    });

    test('calls onChange and closes dropdown when an option is selected', () => {
        const selectContainer = screen.getByText('select...');
        fireEvent.click(selectContainer);
        const option2 = screen.getByText('Option 2');
        fireEvent.click(option2);
        expect(mockOnChange).toHaveBeenCalledWith('Option 2');
    });

    test('closes dropdown when clicked outside the select container', () => {
        const selectContainer = screen.getByText('select...');
        fireEvent.click(selectContainer);
        fireEvent.click(document.body);
        expect(screen.queryByText('Option 1')).not.toBeInTheDocument();
        expect(screen.queryByText('Option 2')).not.toBeInTheDocument();
        expect(screen.queryByText('Option 3')).not.toBeInTheDocument();
    });
});
