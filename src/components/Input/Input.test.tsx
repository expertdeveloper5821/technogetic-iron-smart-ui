import { fireEvent, render, screen } from '@testing-library/react';
import { Input } from './Input';
import '@testing-library/jest-dom';
import React from 'react';

describe('Input', () => {
    test('should render input', () => {
        render(<Input type="text" value="Hi rendering" onChange={() => {}} />);
    });
    test('renders an input field with correct default props', () => {
        render(<Input />);
        const input = screen.getByRole('textbox');
        expect(input).toBeInTheDocument();
        expect(input).not.toHaveAttribute('value');
        expect(input).not.toHaveAttribute('required');
    });
    test('renders an input field with correct props', () => {
        render(<Input value="test" onChange={() => {}} label="Test Input" required={true} placeholder="Enter test value" />);
        const input = screen.getByRole('textbox');
        expect(input).toHaveAttribute('type', 'text');
        expect(input).toHaveAttribute('required');
        expect(input).toHaveAttribute('placeholder', 'Enter test value');
    });
    test('renders an input field with an adornment', () => {
        render(<Input adornment="$" />);
        const input = screen.getByRole('textbox');
        const adornment = screen.getByText('$');
        expect(input).toBeInTheDocument();
        expect(adornment).toBeInTheDocument();
    });
    test('renders an input field with an ornament', () => {
        render(<Input ornament="%" />);
        const input = screen.getByRole('textbox');
        const ornament = screen.getByText('%');
        expect(input).toBeInTheDocument();
        expect(ornament).toBeInTheDocument();
    });
});
