import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Button } from './Button';
import '@testing-library/jest-dom';

describe('Button', () => {
    test('renders a button with default text', () => {
        const { getByText } = render(<Button />);
        const buttonElement = getByText('Button');
        expect(buttonElement).toBeInTheDocument();
    });

    test('renders a button with custom text', () => {
        const { getByText } = render(<Button>Click Me</Button>);
        const buttonElement = getByText('Click Me');
        expect(buttonElement).toBeInTheDocument();
    });

    test('renders a file upload button', () => {
        const { container, getByLabelText } = render(<Button type="file">Upload Button</Button>);
        const fileInput = getByLabelText('Upload Button');
        expect(fileInput).toBeInTheDocument();
        expect(container.querySelector('button')).not.toBeInTheDocument();
    });

    test('executes the onClick event handler', () => {
        const handleClick = jest.fn();
        const { getByText } = render(<Button onClick={handleClick}>Button</Button>);
        const buttonElement = getByText('Button');
        fireEvent.click(buttonElement);
        expect(handleClick).toHaveBeenCalled();
    });

    test('renders a file input element with type "file"', () => {
        const { getByLabelText } = render(<Button type="file">Upload Button</Button>);
        const fileInput = getByLabelText('Upload Button');
        expect(fileInput).toBeInTheDocument();
        expect(fileInput).toHaveAttribute('type', 'file');
    });

    test('renders a file input element with the "multiple" attribute', () => {
        const { getByLabelText } = render(
            <Button type="file" multiple>
                Upload Button
            </Button>
        );
        const fileInput = getByLabelText('Upload Button');
        expect(fileInput).toBeInTheDocument();
        expect(fileInput).toHaveAttribute('type', 'file');
        expect(fileInput).toHaveAttribute('multiple');
    });

    test('fires onClick event when label is clicked', () => {
        const onClickMock = jest.fn();
        const { getByText } = render(<Button onClick={onClickMock}>Upload Button</Button>);
        const labelElement = getByText('Upload Button');
        fireEvent.click(labelElement);
        expect(onClickMock).toHaveBeenCalledTimes(1);
    });

    test('applies custom className to button element', () => {
        const customClassName = 'custom-button';
        const { getByText } = render(<Button className={customClassName}>Button</Button>);
        const buttonElement = getByText('Button');

        expect(buttonElement).toHaveClass(customClassName);
    });

    test('applies disabled attribute to button when disabled prop is true', () => {
        const { getByText } = render(<Button disabled>Button</Button>);
        const buttonElement = getByText('Button');

        expect(buttonElement).toBeDisabled();
    });
});
