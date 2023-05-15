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

export const Button = (props: React.PropsWithChildren<ButtonProps>) => {
    const { children, bg, color, varient = 'borderLess', onClick, disabled, className } = props;

    return (
        <button {...props} className={className ? className : `button button-${varient}`} {...props} onClick={onClick} disabled={disabled}>
            {children ? children : 'Button'}
        </button>
    );
};
