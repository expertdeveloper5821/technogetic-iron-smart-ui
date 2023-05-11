import React, { CSSProperties } from 'react';
import './Drawer.css';

export interface DrawerProps {
    align?: string;
    width?: string;
    bg?: string;
    color?: string;
    style?: CSSProperties;
    drawerOpen?: boolean;
}

export const Drawer: React.FC<DrawerProps> = ({ align = 'left', width, bg, color, style, drawerOpen = true }) => {
    const DrawerStyles: CSSProperties = {
        width,
        backgroundColor: bg,
        color,
        ...style
    };

    return <>{drawerOpen && <div className={`DrawerContainer-${align}`} style={DrawerStyles} data-testid="drawerComoponent"></div>}</>;
};
