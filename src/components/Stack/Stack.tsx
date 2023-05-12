import React, { ReactNode, CSSProperties } from 'react';

export interface StackProps {
    align?: 'start' | 'center' | 'end';
    direction?: 'row' | 'column';
    justify?: 'start' | 'center' | 'end' | 'space-between' | 'space-around' | 'space-evenly';
    isInline?: boolean;
    shouldWrapChildren?: boolean;
    spacing?: number;
    wrap?: boolean;
    style?: CSSProperties;
}

export const Stack: React.FC<StackProps> = ({ align = 'start', direction = 'column', isInline = false, justify = 'start', shouldWrapChildren = false, spacing = 0, wrap = false, style }) => {
    const stackStyles: CSSProperties = {
        display: isInline ? 'inline-flex' : 'flex',
        flexDirection: direction,
        alignItems: align,
        justifyContent: justify,
        flexWrap: wrap ? 'wrap' : 'nowrap',
        gap: spacing ? `${spacing}px` : '0px',
        ...style
    };

    return <div style={stackStyles}></div>;
};
