import React from 'react';
import { Menu } from './Menu';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

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
        const { getByText } = render(<Menu menuData={mockMenuData} />);

        const productsMenuItem = screen.getByText('Products');
        fireEvent.click(productsMenuItem);

        const product1SubMenu = screen.getByText('Product 1');
        expect(product1SubMenu).toBeInTheDocument();

        const product2SubMenu = screen.getByText('Product 2');
        expect(product2SubMenu).toBeInTheDocument();
    });
});
