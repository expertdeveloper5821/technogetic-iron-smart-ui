import React, { CSSProperties } from 'react';
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
export declare const Stack: React.FC<StackProps>;
