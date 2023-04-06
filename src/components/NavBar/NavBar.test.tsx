import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { NavBar } from './NavBar';

describe('NavBar component', () => {
    test('renders navbar without crashing', () => {
        render(<NavBar />);
    });
    test('renders the NavBar with expected data', () => {
        const mockData = [
            { id: 1, title: 'Home', link: '/home' },
            {
                id: 2,
                title: 'Products',
                items: [
                    { id: 1, title: 'Product 1', link: '/products/1' },
                    { id: 2, title: 'Product 2', link: '/products/2' }
                ]
            }
        ];

        render(<NavBar navbarData={mockData} />);

        expect(screen.getByText('Home')).toBeInTheDocument();
        expect(screen.getByText('Products')).toBeInTheDocument();
        expect(screen.getByText('Product 1')).toBeInTheDocument();
        expect(screen.getByText('Product 2')).toBeInTheDocument();
    });

    test('clicking on a navbar item updates active state and displays sub-items', () => {
        const mockData = [
            { id: 1, title: 'Home', link: '/home' },
            {
                id: 2,
                title: 'Products',
                items: [
                    { id: 1, title: 'Product 1', link: '/products/1' },
                    { id: 2, title: 'Product 2', link: '/products/2' }
                ]
            }
        ];

        render(<NavBar navbarData={mockData} />);

        const productLink = screen.getByText('Products');

        expect(productLink).toHaveClass('navbarItem');
        expect(productLink).not.toHaveClass('active');

        fireEvent.click(productLink);

        expect(productLink).toHaveClass('active');

        const product1Link = screen.getByText('Product 1');
        const product2Link = screen.getByText('Product 2');

        expect(product1Link).toBeInTheDocument();
        expect(product2Link).toBeInTheDocument();

        fireEvent.click(product1Link);

        expect(product1Link).toHaveClass('active');
        expect(product2Link).not.toHaveClass('active');
    });
});
