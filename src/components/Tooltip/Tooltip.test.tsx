import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Tooltip } from './Tooltip';
import '@testing-library/jest-dom';
import React from 'react';

describe('Tooltip test case', () => {
    test('should render tooltip', () => {
        render(
            <Tooltip text="I am tooltip">
                <button>Hover me!</button>
            </Tooltip>
        );
        const button = screen.getByTestId('tooltipHover');
        expect(screen.queryByText('I am tooltip')).not.toBeInTheDocument();
        userEvent.hover(button);
        expect(screen.queryByText('Hover me!')).toBeInTheDocument();
        // userEvent.unhover(button);
        // expect(screen.queryByText('I am tooltip')).not.toBeInTheDocument();
    });
});
