import React from 'react';
import './Drawer.css';

export interface DrawerProps {
    align?: string;
    width?: string;
    bg?: string;
    color?: string;
    className?: string;
    style?: React.CSSProperties;
    isOpen?: boolean;
}

export const Drawer: React.FC<DrawerProps> = ({ align = 'left', width, bg, color, className, style, isOpen = true }) => {
    const DrawerStyles: React.CSSProperties = {
        width,
        backgroundColor: bg,
        color,
        ...style
    };

    return <>{isOpen && <div className={className ? className : `DrawerContainer DrawerContainer-${align}`} style={DrawerStyles} data-testid="drawerComoponent"></div>}</>;
};
