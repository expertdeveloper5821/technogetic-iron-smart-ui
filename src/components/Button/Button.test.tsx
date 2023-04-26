import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';
import '@testing-library/jest-dom';
import React from 'react';

describe('Button', () => {
    it('should render with default props', () => {
        const { getByText } = render(<Button />);
        expect(getByText('Button')).toBeInTheDocument();
        expect(getByText('Button')).toHaveAttribute('type', 'submit');
        expect(getByText('Button')).toHaveClass('commonButton');
    });

    it('should render with provided children', () => {
        const { getByText } = render(<Button>Hello World</Button>);
        expect(getByText('Hello World')).toBeInTheDocument();
    });

    it('should render with provided type', () => {
        const { getByText } = render(<Button type="button">Click Me</Button>);
        expect(getByText('Click Me')).toHaveAttribute('type', 'button');
    });

    it('should render with provided class name', () => {
        const { getByText } = render(<Button className="testButton">Test</Button>);
        expect(getByText('Test')).toHaveClass('testButton');
    });

    it('should call onClick prop when button is clicked', () => {
        const handleClick = jest.fn();
        const { getByText } = render(<Button onClick={handleClick}>Click Me</Button>);
        fireEvent.click(getByText('Click Me'));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
