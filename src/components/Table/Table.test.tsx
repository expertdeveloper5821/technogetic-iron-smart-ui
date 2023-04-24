import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Table } from './Table';
import '@testing-library/jest-dom';

describe('Table component', () => {
    const columns = [
        { id: 'id', title: 'ID', width: 50 },
        { id: 'name', title: 'Name', width: 100 },
        { id: 'age', title: 'Age', width: 50 }
    ];

    const data = [
        { id: 1, name: 'John', age: 25 },
        { id: 2, name: 'Jane', age: 30 },
        { id: 3, name: 'Bob', age: 40 }
    ];

    const buttons = [
        { id: 'edit', title: 'Edit', type: 'button', value: 'Edit' },
        { id: 'delete', title: 'Delete', type: 'button', value: 'Delete' }
    ];

    const onClick = jest.fn();

    test('renders table with columns and data', () => {
        const { getByText } = render(<Table data={data} columns={columns} />);
        expect(getByText('ID')).toBeInTheDocument();
        expect(getByText('Name')).toBeInTheDocument();
        expect(getByText('Age')).toBeInTheDocument();
        expect(getByText('John')).toBeInTheDocument();
        expect(getByText('Jane')).toBeInTheDocument();
        expect(getByText('Bob')).toBeInTheDocument();
    });
});
