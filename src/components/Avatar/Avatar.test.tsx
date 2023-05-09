import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import { Avatar, AvatarProps } from './Avatar';

describe('Avatar component', () => {
    const defaultProps: AvatarProps = {
        src: 'https://example.com/avatar.png',
        alt: 'Avatar'
    };

    it('renders without crashing', () => {
        render(<Avatar {...defaultProps} />);
    });

    it('renders with the correct image URL', () => {
        const { getByAltText } = render(<Avatar {...defaultProps} />);
        expect(getByAltText(defaultProps.alt)).toHaveAttribute('src', defaultProps.src);
    });

    it('calls onClick when clicked', () => {
        const handleClick = jest.fn();
        const { getByAltText } = render(<Avatar {...defaultProps} onClick={handleClick} />);
        fireEvent.click(getByAltText(defaultProps.alt));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
