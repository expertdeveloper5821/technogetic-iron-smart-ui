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
export declare const Drawer: React.FC<DrawerProps>;
