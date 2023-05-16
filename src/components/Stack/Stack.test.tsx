import React from 'react';
import { Stack } from './Stack';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Stack', () => {
    test('should render a stack with default props', () => {
        const { container } = render(<Stack />);
        const stackElement = container.firstChild;

        expect(stackElement).toBeInTheDocument();
        expect(stackElement).toHaveStyle('display: flex');
        expect(stackElement).toHaveStyle('flexDirection: column');
        expect(stackElement).toHaveStyle('alignItems: start');
        expect(stackElement).toHaveStyle('justifyContent: start');
        expect(stackElement).toHaveStyle('flexWrap: nowrap');
        expect(stackElement).toHaveStyle('gap: 0px');
    });

    test('should render a stack with custom props', () => {
        const { container } = render(<Stack align="center" direction="row" justify="space-between" isInline={true} spacing={10} wrap={true} style={{ backgroundColor: 'red' }} />);
        const stackElement = container.firstChild;

        expect(stackElement).toBeInTheDocument();
        expect(stackElement).toHaveStyle('display: inline-flex');
        expect(stackElement).toHaveStyle('flexDirection: row');
        expect(stackElement).toHaveStyle('alignItems: center');
        expect(stackElement).toHaveStyle('justifyContent: space-between');
        expect(stackElement).toHaveStyle('flexWrap: wrap');
        expect(stackElement).toHaveStyle('gap: 10px');
        expect(stackElement).toHaveStyle('background-color: red');
    });
});
