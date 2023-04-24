import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Table } from './Table';
import '@testing-library/jest-dom';

const mockData = [
    { id: '1', name: 'John', age: 25 },
    { id: '2', name: 'Jane', age: 30 },
    { id: '3', name: 'Bob', age: 35 }
];

const mockColumns = [
    { id: 'id', title: 'ID', width: 100 },
    { id: 'name', title: 'Name', width: 100 },
    { id: 'age', title: 'Age', width: 100 }
];

describe('Table', () => {
    it('should sort table rows based on a column value', () => {
        render(<Table data={mockData} columns={mockColumns} sortColumn="age" />);
        const rowElements = screen.getAllByRole('row');
        expect(rowElements[1]).toHaveTextContent('John25');
        expect(rowElements[2]).toHaveTextContent('Jane30');
        expect(rowElements[3]).toHaveTextContent('Bob35');
    });
    it('should render table with given data and columns', () => {
        render(<Table data={mockData} columns={mockColumns} />);

        expect(screen.getByRole('table')).toBeInTheDocument();
        expect(screen.getAllByRole('columnheader')).toHaveLength(3);
        expect(screen.getAllByRole('row')).toHaveLength(4);
    });

    it('should render table with buttons if buttons are provided', () => {
        const mockButtons = [
            { id: 'edit', value: 'Edit' },
            { id: 'delete', value: 'Delete' }
        ];
        const mockOnClick = jest.fn();
        render(<Table data={mockData} columns={mockColumns} buttons={mockButtons} onClick={mockOnClick} />);

        expect(screen.getByRole('table')).toBeInTheDocument();
        expect(screen.getAllByRole('columnheader')).toHaveLength(5);
        expect(screen.getAllByRole('row')).toHaveLength(4);
        expect(screen.getAllByRole('button')).toHaveLength(6);

        screen.getAllByRole('button').forEach((button) => {
            expect(button).toHaveClass('tableBtn');
        });

        const editButtons = screen.getAllByRole('button').filter((button) => button.textContent === 'Edit');
        editButtons.forEach((button) => {
            fireEvent.click(button);
        });
        expect(mockOnClick).toHaveBeenCalledTimes(editButtons.length);

        const deleteButtons = screen.getAllByRole('button').filter((button) => button.textContent === 'Delete');
        deleteButtons.forEach((button) => {
            fireEvent.click(button);
        });
        expect(mockOnClick).toHaveBeenCalledTimes(editButtons.length + deleteButtons.length);
    });
});
