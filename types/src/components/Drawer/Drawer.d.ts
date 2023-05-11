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
export declare const Drawer: React.FC<DrawerProps>;
