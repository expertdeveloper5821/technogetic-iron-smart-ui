import React from 'react';
import { Drawer, DrawerProps } from './Drawer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Drawer', () => {
    test('renders with default props', () => {
        const { getByTestId } = render(<Drawer />);
        const drawerComoponent = getByTestId('drawerComoponent');

        expect(drawerComoponent).toBeInTheDocument();
        expect(drawerComoponent).toHaveStyle({
            width: undefined,
            backgroundColor: undefined,
            color: undefined
        });
        expect(drawerComoponent.classList).toContain('DrawerContainer-left');
    });

    test('renders with custom props', () => {
        const { getByTestId } = render(<Drawer align="right" width="100%" bg="blue" color="white" style={{ padding: '10px' }} />);
        const drawerComoponent = getByTestId('drawerComoponent');

        expect(drawerComoponent).toBeInTheDocument();
        expect(drawerComoponent).toHaveStyle({
            width: '100%',
            backgroundColor: 'blue',
            color: 'white',
            padding: '10px'
        });
        expect(drawerComoponent.classList).toContain('DrawerContainer-right');
    });
});
