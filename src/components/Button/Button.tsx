import { type } from 'os';
import React from 'react';
import './Button.css';

export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    backgroundColor?: string;
    color?: string;
    outline?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    className?: string;
    type?: 'submit' | 'reset' | 'button';
    children?: string | number;
}

export const Button: React.FunctionComponent<ButtonProps> = (props) => {
    const { children, backgroundColor, color, outline, style, onClick, className, type } = props;
    let _style: React.CSSProperties = style || {};

    if (color) _style.color = color;
    if (backgroundColor) _style.backgroundColor = backgroundColor;
    if (outline) {
        return (
            <button className={`outLineButton-${outline}`} {...props} onClick={onClick} type={type ? type : 'submit'}>
                {children ? children : 'Button'}
            </button>
        );
    } else {
        return (
            <button className={className ? className : 'commonButton'} style={_style} {...props} onClick={onClick} type={type ? type : 'submit'}>
                {children ? children : 'Button'}
            </button>
        );
    }
};
