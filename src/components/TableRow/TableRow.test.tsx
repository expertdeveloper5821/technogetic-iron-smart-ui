import React from 'react';
import { TableRow } from './TableRow';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('TableRow component', () => {
    test('renders table row with default className', () => {
        const { container } = render(
            <table>
                <tbody>
                    <TableRow>
                        <td>Table row content</td>
                    </TableRow>
                </tbody>
            </table>
        );

        const tableRowElement = container.querySelector('tr');
        expect(tableRowElement).toBeInTheDocument();
        expect(tableRowElement).toHaveClass('tableRow');
    });

    test('renders table row with custom className', () => {
        const { container } = render(
            <table>
                <tbody>
                    <TableRow className="customTableRow">
                        <td>Table row content</td>
                    </TableRow>
                </tbody>
            </table>
        );

        const tableRowElement = container.querySelector('tr');
        expect(tableRowElement).toBeInTheDocument();
        expect(tableRowElement).toHaveClass('customTableRow');
    });
});
