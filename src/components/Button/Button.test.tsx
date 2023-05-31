import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Button } from './Button';
import '@testing-library/jest-dom';

describe('Button component', () => {
    test('renders a button element with default text', () => {
        const { getByText } = render(<Button />);
        const buttonElement = getByText('Button');
        expect(buttonElement).toBeInTheDocument();
    });

    test('renders a button element with provided text', () => {
        const { getByText } = render(<Button>Click me</Button>);
        const buttonElement = getByText('Click me');
        expect(buttonElement).toBeInTheDocument();
    });

    test('calls onClick event handler when the button is clicked', () => {
        const handleClick = jest.fn();
        const { getByText } = render(<Button onClick={handleClick}>Click me</Button>);
        const buttonElement = getByText('Click me');
        fireEvent.click(buttonElement);
        expect(handleClick).toHaveBeenCalled();
    });

    test('disables the button when disabled prop is true', () => {
        const { getByText } = render(<Button disabled>Click me</Button>);
        const buttonElement = getByText('Click me');
        expect(buttonElement).toBeDisabled();
    });

    test('renders a file upload input when type prop is set to "file"', () => {
        const { container } = render(<Button type="file">Upload Button</Button>);
        const fileInputElement = container.querySelector('input[type="file"]');
        expect(fileInputElement).toBeInTheDocument();
    });

    test('renders the label with the provided text when type prop is set to "file"', () => {
        const { getByText } = render(<Button type="file">Upload Button</Button>);
        const labelElement = getByText('Upload Button');
        expect(labelElement).toBeInTheDocument();
    });

    test('applies the provided class name to the button', () => {
        const { container } = render(<Button className="custom-button">Click me</Button>);
        const buttonElement = container.querySelector('.custom-button');
        expect(buttonElement).toBeInTheDocument();
    });

    test('renders a button with start icon', () => {
        const { container } = render(<Button startIcon={<span className="icon">Start Icon</span>}>Click me</Button>);
        const startIconElement = container.querySelector('.start-button-icon');
        expect(startIconElement).toBeInTheDocument();
    });

    test('renders a button with end icon', () => {
        const { container } = render(<Button endIcon={<span className="icon">End Icon</span>}>Click me</Button>);
        const endIconElement = container.querySelector('.end-button-icon');
        expect(endIconElement).toBeInTheDocument();
    });

    test('renders multiple file upload input when multiple prop is true (file type)', () => {
        const { container } = render(
            <Button type="file" multiple>
                Upload Button
            </Button>
        );
        const fileInputElement = container.querySelector('input[type="file"]') as HTMLInputElement;
        expect(fileInputElement.multiple).toBe(true);
    });
});
