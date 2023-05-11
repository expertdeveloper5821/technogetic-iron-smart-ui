import React from 'react';
import { Menu } from './Menu';
import { BrowserRouter as MockBrowserRouter, useLocation } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

// jest.mock('react-router-dom', () => ({
//     ...jest.requireActual('react-router-dom'),
//     useLocation: jest.fn()
// }));

describe('Menu', () => {
    const mockMenuData = [
        {
            label: 'Home',
            key: 'home',
            icon: 'home',
            href: '/'
        },
        {
            label: 'Products',
            key: 'products',
            icon: 'products',
            children: [
                {
                    label: 'Product 1',
                    key: 'product1',
                    href: '/product1'
                },
                {
                    label: 'Product 2',
                    key: 'product2',
                    href: '/product2'
                }
            ]
        }
    ];

    test('renders menu items', () => {
        const { getByText } = render(<Menu menuData={mockMenuData} />);
        const homeMenuItem = screen.getByText('Home');
        expect(homeMenuItem).toBeInTheDocument();

        const productsMenuItem = screen.getByText('Products');
        expect(productsMenuItem).toBeInTheDocument();
    });

    test('displays submenu on click', () => {
        // useLocation.mockReturnValue({ pathname: '/' });

        const { getByText } = render(<Menu menuData={mockMenuData} />);

        const productsMenuItem = screen.getByText('Products');
        fireEvent.click(productsMenuItem);

        // Check if the submenu items are displayed
        const product1SubMenu = screen.getByText('Product 1');
        expect(product1SubMenu).toBeInTheDocument();

        const product2SubMenu = screen.getByText('Product 2');
        expect(product2SubMenu).toBeInTheDocument();
    });
});
