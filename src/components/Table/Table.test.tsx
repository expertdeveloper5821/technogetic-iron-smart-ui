import React from 'react';
import { Table } from './Table';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Table', () => {
    test('renders a table with correct class name', () => {
        const { getByTestId } = render(
            <Table className="custom-class">
                <tbody data-testid="table-body">
                    <tr>
                        <td>Row 1</td>
                        <td>Row 2</td>
                    </tr>
                </tbody>
            </Table>
        );

        const tableContainer = getByTestId('table-container');
        const table = getByTestId('table-body');

        expect(tableContainer).toHaveClass('custom-class');
        expect(table).toBeInTheDocument();
    });

    test('renders a table with default class name if no className prop is provided', () => {
        const { getByTestId } = render(
            <Table>
                <tbody data-testid="table-body">
                    <tr>
                        <td>Row 1</td>
                        <td>Row 2</td>
                    </tr>
                </tbody>
            </Table>
        );

        const tableContainer = getByTestId('table-container');
        const table = getByTestId('table-body');

        expect(tableContainer).toHaveClass('table-container');
        expect(table).toBeInTheDocument();
    });
});
