import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Button } from './Button';
import '@testing-library/jest-dom';

describe('Button', () => {
    test('renders button with default text', () => {
        const { getByText } = render(<Button />);
        const button = getByText('Button');
        expect(button).toBeInTheDocument();
    });

    test('renders button with custom text', () => {
        const { getByText } = render(<Button>Click me</Button>);
        const button = getByText('Click me');
        expect(button).toBeInTheDocument();
    });

    test('renders button with custom background color', () => {
        const { getByText } = render(<Button bg="red" />);
        const button = getByText('Button');
        expect(button).toHaveStyle('background-color: red');
    });

    test('calls onClick function when button is clicked', () => {
        const onClickMock = jest.fn();
        const { getByText } = render(<Button onClick={onClickMock} />);
        const button = getByText('Button');
        fireEvent.click(button);
        expect(onClickMock).toHaveBeenCalledTimes(1);
    });
    test('renders outline button with custom outline style', () => {
        const { getByText } = render(<Button outline="primary" />);
        const button = getByText('Button');
        expect(button).toHaveClass('outLineButton-primary');
    });

    test('calls onClick function when outline button is clicked', () => {
        const onClickMock = jest.fn();
        const { getByText } = render(<Button outline="secondary" onClick={onClickMock} />);
        const button = getByText('Button');
        fireEvent.click(button);
        expect(onClickMock).toHaveBeenCalledTimes(1);
    });
});
