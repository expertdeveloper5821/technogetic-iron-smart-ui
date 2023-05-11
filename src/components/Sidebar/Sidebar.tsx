import React, { CSSProperties } from 'react';
import './Sidebar.css';

export interface SidebarProps {
    align?: string;
    width?: string;
    bg?: string;
    color?: string;
    style?: CSSProperties;
}

export const Sidebar: React.FC<SidebarProps> = ({ align = 'left', width, bg, color, style }) => {
    const sideBarStyles: CSSProperties = {
        width,
        backgroundColor: bg,
        color,
        ...style
    };

    return <div className={`SideBarContainer-${align}`} style={sideBarStyles} data-testid="sidebarComoponent"></div>;
};
