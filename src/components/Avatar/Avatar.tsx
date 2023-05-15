import React from 'react';
import { AvatarIcon } from '../../assets/AvatarIcon';
import './Avatar.css';

export interface AvatarProps {
    src: string;
    alt: string;
    size?: number;
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export const Avatar: React.FC<AvatarProps> = ({ src, alt, size = 50, className, onClick }) => {
    return (
        <div className={className ? className : `avatarContainer `} onClick={onClick}>
            {src ? <img className="avatarImage" src={src} alt={alt} /> : <AvatarIcon />}
        </div>
    );
};
