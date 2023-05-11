import React, { CSSProperties } from 'react';
import './NavBar.css';
export interface NavBarProps {
    align?: string;
    width?: string;
    bg?: string;
    color?: string;
    style?: CSSProperties;
}
export declare const NavBar: React.FC<NavBarProps>;
