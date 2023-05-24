import React from 'react';
import { TableHead } from './TableHead';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('TableHead', () => {
    test('renders the table header with default class name', () => {
        const { getByText } = render(
            <table>
                <TableHead>Header Text</TableHead>
            </table>
        );
        const tableHeader = getByText('Header Text');

        expect(tableHeader).toBeInTheDocument();
        expect(tableHeader.tagName).toBe('TH');
        expect(tableHeader).toHaveClass('tableHead');
    });

    test('renders the table header with custom class name', () => {
        const { getByText } = render(
            <table>
                <TableHead className="customClassName">Header Text</TableHead>
            </table>
        );
        const tableHeader = getByText('Header Text');

        expect(tableHeader).toBeInTheDocument();
        expect(tableHeader.tagName).toBe('TH');
        expect(tableHeader).toHaveClass('customClassName');
    });
});
