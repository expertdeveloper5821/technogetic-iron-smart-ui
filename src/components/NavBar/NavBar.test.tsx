import React from 'react';
import { NavBar } from './NavBar';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('NavBar', () => {
    test('renders with default props', () => {
        const { getByTestId } = render(<NavBar />);
        const navbarComponent = getByTestId('navbarComponent');

        expect(navbarComponent).toBeInTheDocument();
        expect(navbarComponent).toHaveStyle({
            width: undefined,
            backgroundColor: undefined,
            color: undefined
        });
        expect(navbarComponent.classList).toContain('NavBarContainer-top');
    });

    test('renders with custom props', () => {
        const { getByTestId } = render(<NavBar width="100%" bg="blue" color="white" style={{ padding: '10px' }} />);
        const navbarComponent = getByTestId('navbarComponent');

        expect(navbarComponent).toBeInTheDocument();
        expect(navbarComponent).toHaveStyle({
            width: '100%',
            backgroundColor: 'blue',
            color: 'white',
            padding: '10px'
        });
        expect(navbarComponent.classList).toContain('NavBarContainer-top');
    });
});
