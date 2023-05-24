import React from 'react';
import { TableHeader } from './TableHeader';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('TableHeader', () => {
    test('renders table header correctly', () => {
        const headerText = 'Table Header';
        const { getByText } = render(<TableHeader>{headerText}</TableHeader>);

        const headerElement = getByText(headerText);

        expect(headerElement).toBeInTheDocument();
        expect(headerElement.tagName).toBe('THEAD');
    });
});
