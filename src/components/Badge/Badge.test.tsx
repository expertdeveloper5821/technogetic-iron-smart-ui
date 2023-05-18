import React from 'react';
import { render } from '@testing-library/react';
import { Badge } from './Badge';
import { BadgeProps } from '../../interfaces/CommonInterface';
import '@testing-library/jest-dom';

describe('Badge component', () => {
    test('renders with default props', () => {
        const { getByTestId } = render(<Badge />);
        const badgeElement = getByTestId('tooltip');
        expect(badgeElement).toBeInTheDocument();
        expect(badgeElement).toHaveClass('badge-primary');
    });

    test('renders with custom props', () => {
        const props: BadgeProps = {
            label: 5,
            type: 'success',
            max: 10
        };
        const { getByTestId } = render(<Badge {...props} />);
        const badgeElement = getByTestId('tooltip');
        expect(badgeElement).toBeInTheDocument();
        expect(badgeElement).toHaveTextContent('5');
        expect(badgeElement).toHaveClass('badge-success');
    });

    test('truncates label if greater than max', () => {
        const props: BadgeProps = {
            label: 15,
            max: 10
        };
        const { getByText } = render(<Badge {...props} />);
        const badgeElement = getByText('10+');
        expect(badgeElement).toBeInTheDocument();
    });
});
