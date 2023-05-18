import React from 'react';
import { StackProps } from '../../interfaces/CommonInterface';

export const Stack: React.FC<StackProps> = ({ align = 'start', direction = 'column', isInline = false, justify = 'start', spacing = 0, wrap = false, style, children }) => {
    const stackStyles: React.CSSProperties = {
        display: isInline ? 'inline-flex' : 'flex',
        flexDirection: direction,
        alignItems: align,
        justifyContent: justify,
        flexWrap: wrap ? 'wrap' : 'nowrap',
        gap: spacing ? `${spacing}px` : '0px',
        ...style
    };

    return (
        <div className="StackContainer" style={stackStyles}>
            {children}
        </div>
    );
};
