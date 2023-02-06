import { render, screen } from '@testing-library/react';
import { Card } from './Card';
import '@testing-library/jest-dom';
import React from 'react';

describe('Button', () => {
    test('renders the Button component', () => {
        render(<Card />);
    });
    test('renders correct text', () => {
        render(<Card>Test Button</Card>);
        const cardElement = screen.getByText(/Test Button/i);
        expect(cardElement).toBeInTheDocument();
    });
});
