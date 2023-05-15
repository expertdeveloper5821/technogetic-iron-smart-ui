import { type } from 'os';
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

export const Button: React.FC<ButtonProps> = (props) => {
    const { children, bg, color, outline, style, onClick, className, type } = props;

    const buttonStyles: CSSProperties = {
        backgroundColor: bg,
        color,
        ...style
    };

    if (outline) {
        return (
            <button className={className ? className : `outLineButton outLineButton-${outline}`} style={buttonStyles} {...props} onClick={onClick} type={type ? type : 'submit'}>
                {children ? children : 'Button'}
            </button>
        );
    } else {
        return (
            <button className={className ? className : 'commonButton'} style={buttonStyles} {...props} onClick={onClick} type={type ? type : 'submit'}>
                {children ? children : 'Button'}
            </button>
        );
    }
};
