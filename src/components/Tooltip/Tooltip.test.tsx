import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Tooltip } from './Tooltip';
import '@testing-library/jest-dom';
import React from 'react';

describe('Tooltip component', () => {
    test('renders tooltip with default message', () => {
        const { getByText } = render(<Tooltip />);
        expect(getByText('Hello I am a Tooltip')).toBeInTheDocument();
    });

    test('renders tooltip with provided text', () => {
        const { getByTestId, getByText } = render(<Tooltip text="Custom tooltip text" />);
        fireEvent.mouseEnter(getByTestId('tooltipHover'));
        expect(getByText('Custom tooltip text')).toBeVisible();
    });

    test('shows tooltip when mouse hovers over', () => {
        const { getByTestId, getByText } = render(<Tooltip text="Custom tooltip text" />);
        fireEvent.mouseEnter(getByTestId('tooltipHover'));
        expect(getByText('Custom tooltip text')).toBeVisible();
    });

    test('hides tooltip when mouse stops hovering', () => {
        const { getByTestId, getByText, queryByText } = render(<Tooltip text="Custom tooltip text" />);
        fireEvent.mouseEnter(getByTestId('tooltipHover'));
        fireEvent.mouseLeave(getByTestId('tooltipHover'));
        expect(queryByText('Custom tooltip text')).not.toBeInTheDocument();
    });
    test('renders default message when no children are provided', () => {
        const { getByTestId } = render(<Tooltip />);
        expect(getByTestId('tooltipHover')).toHaveTextContent('Hello I am a Tooltip');
    });

    test('renders children when provided', () => {
        const { getByTestId } = render(<Tooltip>Hello from Tooltip!</Tooltip>);
        expect(getByTestId('tooltipHover')).toHaveTextContent('Hello from Tooltip!');
    });
});
