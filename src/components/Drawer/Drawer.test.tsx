import React from 'react';
import { Drawer } from './Drawer';
import { render } from '@testing-library/react';
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

    test('renders children when isOpen is true', () => {
        const childrenText = 'Test Children';
        const { getByText } = render(
            <Drawer isOpen={true} align="left" width="200px">
                {childrenText}
            </Drawer>
        );
        const childrenElement = getByText(childrenText);
        expect(childrenElement).toBeInTheDocument();
    });

    test('does not render children when isOpen is false', () => {
        const childrenText = 'Test Children';
        const { queryByText } = render(
            <Drawer isOpen={false} align="left" width="200px">
                {childrenText}
            </Drawer>
        );
        const childrenElement = queryByText(childrenText);
        expect(childrenElement).toBeNull();
    });
});
