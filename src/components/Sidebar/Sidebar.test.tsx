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
                    id: 1,
                    name: 'Settings',
                    link: '/profile/settings'
                },
                {
                    id: 2,
                    name: 'Logout',
                    link: '/logout'
                }
            ]
        }
    ];

    it('renders the Sidebar component', () => {
        render(<Sidebar sidebarData={sidebarData} />);

        // Sidebar container should be present
        expect(screen.getByTestId('sidebar-container')).toBeInTheDocument();

        // Home and Profile menu items should be present
        expect(screen.getByText('Home')).toBeInTheDocument();
        expect(screen.getByText('Profile')).toBeInTheDocument();
    });
});
