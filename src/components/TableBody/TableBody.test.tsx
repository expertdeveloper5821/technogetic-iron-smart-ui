import React from 'react';
import { TableBody } from './TableBody';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('TableBody', () => {
    test('renders the children inside a tbody element', () => {
        const children = (
            <tr>
                <td>Row 1</td>
            </tr>
        );

        const { container } = render(
            <table>
                <TableBody>{children}</TableBody>
            </table>
        );

        const tbodyElement = container.querySelector('tbody');
        expect(tbodyElement).toBeInTheDocument();

        const rowElement = container.querySelector('tr');
        expect(rowElement).toBeInTheDocument();
        expect(rowElement?.textContent).toBe('Row 1');
    });
});
