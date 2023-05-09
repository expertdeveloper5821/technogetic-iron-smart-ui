import React, { FC, CSSProperties, MouseEvent } from 'react';

export interface AvatarProps {
    src: string;
    alt: string;
    size?: number;
    style?: CSSProperties;
    onClick?: (event: MouseEvent<HTMLDivElement>) => void;
}

export const Avatar: FC<AvatarProps> = ({ src, alt, size = 50, style, onClick }) => {
    return (
        <div style={{ cursor: onClick ? 'pointer' : 'inherit' }} onClick={onClick}>
            <img src={src} alt={alt} style={{ width: size, height: size, borderRadius: '50%', objectFit: 'cover', ...style }} />
        </div>
    );
};
