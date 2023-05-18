import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import { Avatar } from './Avatar';
import { AvatarProps } from '../../interfaces/CommonInterface';

describe('Avatar component', () => {
    const mockOnClick = jest.fn();

    const renderAvatar = (props?: AvatarProps) => {
        const utils = render(<Avatar name="John Doe" {...props} />);
        const avatarContainer = utils.getByTestId('avatar-container');
        return { avatarContainer, ...utils };
    };

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('renders avatar with initials when src is not provided', () => {
        const { avatarContainer } = renderAvatar();
        expect(avatarContainer).toBeInTheDocument();
        expect(avatarContainer).toHaveTextContent('JD');
        expect(avatarContainer).not.toHaveClass('avatarImage');
        expect(avatarContainer).toHaveClass('avatarContainer');
    });

    test('renders avatar with image when src is provided', () => {
        const { avatarContainer } = renderAvatar({ src: 'path/to/avatar.jpg', alt: 'Avatar' });
        expect(avatarContainer).toBeInTheDocument();
        expect(avatarContainer.querySelector('img')).toHaveAttribute('src', 'path/to/avatar.jpg');
        expect(avatarContainer.querySelector('img')).toHaveAttribute('alt', 'Avatar');
        expect(avatarContainer).toHaveClass('avatarContainer');
    });

    test('calls onClick event when avatar is clicked', () => {
        const { avatarContainer } = renderAvatar({ onClick: mockOnClick });
        fireEvent.click(avatarContainer);
        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });
});
