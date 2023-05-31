import React from 'react';
import { DrawerProps } from '../../interfaces/CommonInterface';
import '../../commonstyle/commonstyle.css';
import './Drawer.css';

export const Drawer: React.FC<DrawerProps> = ({ align = 'left', width, bg, color, className, style, isOpen = true, children }) => {
    const DrawerStyles: React.CSSProperties = {
        width,
        backgroundColor: bg,
        color,
        ...style
    };

    return (
        <>
            {isOpen && (
                <div className={className ? className : `DrawerContainer DrawerContainer-${align}`} data-testid="drawerComoponent" style={DrawerStyles}>
                    {children}
                </div>
            )}
        </>
    );
};
