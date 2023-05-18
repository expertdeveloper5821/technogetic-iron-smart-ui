import React from 'react';
import './Drawer.css';
import { DrawerProps } from '../../interfaces/CommonInterface';

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
                <div
                    className={className ? className : `DrawerContainer DrawerContainer-${align}`}
                    data-testid="drawerComoponent"
                    style={{ ...DrawerStyles, transition: 'left 0.9s cubic-bezier(0.820, 0.085, 0.395, 0.895)' }}
                >
                    {children}
                </div>
            )}
        </>
    );
};
