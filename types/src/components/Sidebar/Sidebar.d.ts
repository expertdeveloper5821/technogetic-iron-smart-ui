import React, { CSSProperties } from 'react';
import './Sidebar.css';
export interface SidebarProps {
    align?: string;
    width?: string;
    bg?: string;
    color?: string;
    style?: CSSProperties;
}
export declare const Sidebar: React.FC<SidebarProps>;
