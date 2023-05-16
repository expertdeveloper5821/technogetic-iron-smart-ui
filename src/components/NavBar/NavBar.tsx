import React, { CSSProperties } from 'react';
import './NavBar.css';

export interface NavBarProps {
    align?: string;
    width?: string;
    bg?: string;
    color?: string;
    style?: CSSProperties;
    children?: string;
}

export const NavBar: React.FC<NavBarProps> = ({ align = 'top', width, bg, color, style, children }) => {
    const navBarStyles: CSSProperties = {
        width,
        backgroundColor: bg,
        color,
        ...style
    };
    return (
        <div className={`NavBarContainer-${align}`} style={navBarStyles} data-testid="navbarComponent">
            {children}
        </div>
    );
};
