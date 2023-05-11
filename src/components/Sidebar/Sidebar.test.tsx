import React from 'react';
import { Sidebar } from './Sidebar';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('SideBar', () => {
    it('renders with default props', () => {
        const { getByTestId } = render(<Sidebar />);
        const sidebarComoponent = getByTestId('sidebarComoponent');

        expect(sidebarComoponent).toBeInTheDocument();
        expect(sidebarComoponent).toHaveStyle({
            width: undefined,
            backgroundColor: undefined,
            color: undefined
        });
        expect(sidebarComoponent.classList).toContain('SideBarContainer-left');
    });

    it('renders with custom props', () => {
        const { getByTestId } = render(<Sidebar align="bottom" width="100%" bg="blue" color="white" style={{ padding: '10px' }} />);
        const sidebarComoponent = getByTestId('sidebarComoponent');

        expect(sidebarComoponent).toBeInTheDocument();
        expect(sidebarComoponent).toHaveStyle({
            width: '100%',
            backgroundColor: 'blue',
            color: 'white',
            padding: '10px'
        });
        expect(sidebarComoponent.classList).toContain('SideBarContainer-bottom');
    });
});
