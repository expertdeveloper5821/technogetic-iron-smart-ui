import { type } from 'os';
import React from 'react';
import './Button.css';

export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    bg?: string;
    color?: string;
    varient?: 'borderLess' | 'contained' | 'outline';
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    className?: string;
    children?: string | number;
    style?: React.CSSProperties;
}

export const Button: React.FC<ButtonProps> = (props) => {
    const { children, bg, color, varient = 'borderLess', style, onClick, className } = props;

    const buttonStyles: CSSProperties = {
        backgroundColor: bg,
        color,
        ...style
    };
    return (
        <button className={className ? className : `button button-${varient}`} style={buttonStyles} {...props} onClick={onClick}>
            {children ? children : 'Button'}
        </button>
    );
};
