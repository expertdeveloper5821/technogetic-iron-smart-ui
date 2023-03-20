import React from 'react';
import { render } from 'react-dom';
import { Sidebar } from './Sidebar';
import '@testing-library/jest-dom';

describe('Sidebar component', () => {
    const sidebarData = [
        { id: 1, title: 'Home', link: '/', items: [] },
        {
            id: 2,
            title: 'About',
            link: '/about',
            items: [
                { id: 4, title: 'Our Story', link: '/about/story' },
                { id: 5, title: 'Our Team', link: '/about/team' }
            ]
        },
        {
            id: 3,
            title: 'Contact',
            link: '/contact',
            items: [
                { id: 6, title: 'CTO', link: '/contact/cto' },
                { id: 7, title: 'Manager', link: '/contact/manager' }
            ]
        }
    ];
    // test('renders main items correctly', () => {
    //     const { getByText } = render(<Sidebar sidebarData={sidebarData} />);
    //     const homeItem = getByText('Home');
    //     const aboutItem = getByText('About');
    //     const contactItem = getByText('Contact');
    //     expect(homeItem).toBeInTheDocument();
    //     expect(aboutItem).toBeInTheDocument();
    //     expect(contactItem).toBeInTheDocument();
    // });
});
