import React, { CSSProperties } from 'react';
import { NavBarProps } from '../../interfaces/CommonInterface';
import '../../commonstyle/commonstyle.css';
import './NavBar.css';

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
