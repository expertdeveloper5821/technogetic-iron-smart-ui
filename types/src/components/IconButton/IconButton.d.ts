import React from 'react';
import './IconButton.css';
export interface IconButtonProps {
    src?: string;
    alt?: string;
    bg?: string;
    color?: string;
    className?: string;
    multiple?: boolean;
}
export declare const IconButton: (props: React.PropsWithChildren<IconButtonProps>) => JSX.Element;
