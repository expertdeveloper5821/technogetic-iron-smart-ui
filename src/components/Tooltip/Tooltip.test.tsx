import React from 'react';
import { Tooltip } from './Tooltip';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Tooltip', () => {
    test('renders tooltip text when hovered over', () => {
        const tooltipText = 'Tooltip text';
        const { getByTestId, getByText, queryByText } = render(
            <Tooltip text={tooltipText}>
                <span>Hover over me</span>
            </Tooltip>
        );

        const tooltipHoverElement = getByTestId('tooltipHover');
        expect(tooltipHoverElement).toBeInTheDocument();

        fireEvent.mouseEnter(tooltipHoverElement);
        const tooltipTextElement = getByText(tooltipText);
        expect(tooltipTextElement).toBeInTheDocument();

        fireEvent.mouseLeave(tooltipHoverElement);
        expect(queryByText(tooltipText)).toBeNull();
    });
});
