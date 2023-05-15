import React from 'react';
import './Button.css';
export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    bg?: string;
    color?: string;
    varient?: 'borderLess' | 'contained' | 'outline';
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
    className?: string;
    children?: string | number;
}
export declare const Button: (props: React.PropsWithChildren<ButtonProps>) => JSX.Element;
