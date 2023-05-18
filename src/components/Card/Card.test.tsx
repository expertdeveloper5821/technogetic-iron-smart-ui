import React from 'react';
import { Card } from './Card';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Card component', () => {
    test('renders the card with default props', () => {
        const { getByText } = render(<Card>Card Content</Card>);

        expect(getByText('Card Title')).toBeInTheDocument();
        expect(getByText('Card Content')).toBeInTheDocument();
        expect(getByText('Card Footer')).toBeInTheDocument();
    });

    test('renders the card with custom props', () => {
        const { getByText, getByAltText } = render(
            <Card className="custom-card" padding="10px" footer="Custom Footer" cardheaderimg="image-url.jpg">
                Custom Card Content
            </Card>
        );

        const cardElement = getByText('Custom Card Content');
        const headerElement = getByAltText('Card Header Image');
        const footerElement = getByText('Custom Footer');

        expect(cardElement).toBeInTheDocument();
        expect(cardElement).toHaveClass('cardBody');
        expect(cardElement).toHaveStyle('padding: 10px');

        expect(headerElement).toBeInTheDocument();
        expect(headerElement).toHaveAttribute('src', 'image-url.jpg');

        expect(footerElement).toBeInTheDocument();
    });

    test('renders the card with a custom header image', () => {
        const { getByAltText } = render(<Card cardheaderimg="image-url.jpg">Card Content</Card>);

        const imageElement = getByAltText('Card Header Image');

        expect(imageElement).toBeInTheDocument();
        expect(imageElement).toHaveAttribute('src', 'image-url.jpg');
    });
});
