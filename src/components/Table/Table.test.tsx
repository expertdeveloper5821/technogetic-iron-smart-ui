import React from 'react';
import { render, screen } from '@testing-library/react';
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
    it('should render table with given data and columns', () => {
        render(<Table data={mockData} columns={mockColumns} />);

        expect(screen.getByRole('table')).toBeInTheDocument();
        expect(screen.getAllByRole('columnheader')).toHaveLength(3);
        expect(screen.getAllByRole('row')).toHaveLength(4);
    });
});
