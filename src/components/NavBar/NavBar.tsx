import React, { CSSProperties } from 'react';
import { NavBarProps } from '../../interfaces/CommonInterface';
import '../../commonstyle/commonstyle.css';
import './NavBar.css';

export const NavBar: React.FC<NavBarProps> = ({ width, bg, color, style, children }) => {
    const navBarStyles: CSSProperties = {
        width,
        backgroundColor: bg,
        color,
        ...style
    };
    return (
        <div className={`NavBarContainer-top`} style={navBarStyles} data-testid="navbarComponent">
            {children}
        </div>
    );
};
