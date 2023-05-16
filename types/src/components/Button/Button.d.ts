import React from 'react';
import './Button.css';
export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
    bg?: string;
    color?: string;
    varient?: 'borderLess' | 'contained' | 'outline';
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
    className?: string;
    children?: string | number;
    type?: string;
    multiple?: boolean;
}
export declare const Button: (props: React.PropsWithChildren<ButtonProps>) => JSX.Element;
