import React from 'react';
import './Avatar.css';
export interface AvatarProps {
    name?: string;
    src?: string;
    alt?: string;
    size?: number;
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}
export declare const Avatar: React.FC<AvatarProps>;
