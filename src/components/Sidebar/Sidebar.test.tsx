import React from 'react';
import { Sidebar, sidebarArray } from './Sidebar';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

describe('Sidebar', () => {
    const sidebarData: sidebarArray[] = [
        {
            id: '1',
            name: 'Home',
            icon: '<svg>mock-icon</svg>',
            link: '/'
        },
        {
            id: '2',
            name: 'Profile',
            icon: '<svg>mock-icon</svg>',
            link: '/profile',
            items: [
                {
                    id: 3,
                    name: 'Settings',
                    link: '/profile/settings'
                },
                {
                    id: 4,
                    name: 'Logout',
                    link: '/logout'
                }
            ]
        }
    ];

    it('renders the Sidebar component', () => {
        render(<Sidebar sidebarData={sidebarData} />);
        const sidebar = screen.getByTestId('Sidebar');
        expect(sidebar).toBeInTheDocument();
        expect(screen.getByTestId('sidebar-container')).toBeInTheDocument();
        expect(screen.getByText('Home')).toBeInTheDocument();
        expect(screen.getByText('Profile')).toBeInTheDocument();
    });
    it('displays the sidebarData items', () => {
        render(<Sidebar sidebarData={sidebarData} />);
        const items = screen.getAllByTestId('SidebarItem');
        expect(items).toHaveLength(2);
        expect(items[0]).toHaveTextContent('Home');
        expect(items[1]).toHaveTextContent('Profile');
    });
    // it('expands/collapses the subitems when an item is clicked', () => {
    //     render(<Sidebar openSideBar={true} sidebarData={sidebarData} />);
    //     const item = screen.getByText('Profile');
    //     fireEvent.click(item);
    //     const subItems = screen.getAllByTestId('SidebarSubItem');
    //     expect(subItems).toHaveLength(2);
    //     expect(subItems[0]).toHaveTextContent('Settings');
    //     expect(subItems[1]).toHaveTextContent('Logout');
    //     fireEvent.click(item);
    //     expect(subItems[0]).not.toBeVisible();
    // });
});
