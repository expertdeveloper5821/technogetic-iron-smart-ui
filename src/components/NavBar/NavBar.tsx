import React, { CSSProperties } from 'react';
import './NavBar.css';

export interface NavBarProps {
    align?: string;
    width?: string;
    bg?: string;
    color?: string;
    style?: CSSProperties;
}

export const NavBar: React.FC<NavBarProps> = ({ align = 'top', width, bg, color, style }) => {
    const navBarStyles: CSSProperties = {
        width,
        backgroundColor: bg,
        color,
        ...style
    };
    return <div className={`NavBarContainer-${align}`} style={navBarStyles} data-testid="navbarComponent"></div>;
};
