import { render, fireEvent } from '@testing-library/react';
import { Sidebar, sidebarArray } from './Sidebar';
import '@testing-library/jest-dom';
import React from 'react';

describe('Sidebar component', () => {
    interface sidebarArray {
        id: number;
        title: string;
        link: string;
        items: { id: number; title: string; link: string }[];
    }
    const sidebarData: sidebarArray[] = [
        {
            id: 1,
            title: 'Menu 1',
            link: '/menu1',
            items: [
                { id: 1, title: 'Submenu 1', link: '/submenu1' },
                { id: 2, title: 'Submenu 2', link: '/submenu2' }
            ]
        },
        {
            id: 2,
            title: 'Menu 2',
            link: '/menu2',
            items: [{ id: 3, title: 'Submenu 3', link: '/submenu3' }]
        }
    ];

    test('activates menu item on click', () => {
        const { getByText } = render(<Sidebar sidebarData={sidebarData} />);

        // Click on the first menu item
        const menuItem1 = getByText('Menu 1');
        fireEvent.click(menuItem1);

        // Check if the first menu item is active
        expect(menuItem1.classList.contains('active')).toBe(true);

        // Click on the second menu item
        const menuItem2 = getByText('Menu 2');
        fireEvent.click(menuItem2);

        // Check if the first menu item is inactive and the second menu item is active
        expect(menuItem1.classList.contains('active')).toBe(false);
        expect(menuItem2.classList.contains('active')).toBe(true);
    });
});
