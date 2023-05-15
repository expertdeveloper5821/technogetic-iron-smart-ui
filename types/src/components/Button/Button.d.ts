import React, { CSSProperties } from 'react';
import './Button.css';
export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    bg?: string;
    color?: string;
    outline?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    className?: string;
    type?: 'submit' | 'reset' | 'button';
    children?: string | number;
    style?: CSSProperties;
}
export declare const Button: React.FC<ButtonProps>;
