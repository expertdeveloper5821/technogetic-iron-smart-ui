import React, { CSSProperties } from 'react';
export interface StackProps {
    align?: 'start' | 'center' | 'end';
    direction?: 'row' | 'column';
    justify?: 'start' | 'center' | 'end' | 'space-between' | 'space-around' | 'space-evenly';
    isInline?: boolean;
    spacing?: number;
    wrap?: boolean;
    style?: CSSProperties;
    children?: string;
}
export declare const Stack: React.FC<StackProps>;
