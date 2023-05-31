import React from 'react';
import { AvatarProps } from '../../interfaces/CommonInterface';
import '../../commonstyle/commonstyle.css';
import './Avatar.css';

export const Avatar: React.FC<AvatarProps> = ({ name = 'K', src, alt = 'avatar', size = 50, className, onClick }) => {
    const getInitials = (name: string) => {
        const initials = name
            .split(' ')
            .map((word) => word.charAt(0).toUpperCase())
            .join('');
        return initials;
    };

    return (
        <div className={className ? className : `avatarContainer `} onClick={onClick} data-testid="avatar-container">
            {src ? <img className="avatarImage" src={src} alt={alt} /> : <span className="avatarInitials">{getInitials(name)}</span>}
        </div>
    );
};
