import React from 'react';
import { AvatarProps } from '../../interfaces/CommonInterface';
import '../../commonstyle/commonstyle.css';
import './Avatar.css';

export const Avatar: React.FC<AvatarProps> = ({ name = 'K', src, alt = 'avatar', size = 25, className, onClick }) => {
    const avatarStyle = {
        width: size * 2,
        height: size * 2,
        borderRadius: '50%',
        backgroundColor: '#ccc',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: size
    };
    const getInitials = (name: string) => {
        const initials = name
            .split(' ')
            .map((word) => word.charAt(0).toUpperCase())
            .join('');
        return initials;
    };

    return (
        <>
            {src ? (
                <img className={className ? className : `avatarImage `} data-testid="avatar-container" onClick={onClick} src={src} alt={alt} style={avatarStyle} />
            ) : (
                <span style={avatarStyle} data-testid="avatar-container" onClick={onClick}>
                    {getInitials(name)}
                </span>
            )}
        </>
    );
};
