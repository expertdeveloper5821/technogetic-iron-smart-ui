import { type } from 'os';
import React from 'react';
import './Button.css';

export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    backgroundColor?: string;
    color?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    className?: string;
    type?: 'submit' | 'reset' | 'button';
}

export const Button: React.FunctionComponent<ButtonProps> = (props) => {
    const { children, backgroundColor, color, style, onClick, className, type } = props;
    let _style: React.CSSProperties = style || {};
    let _className: string = 'commonButton';
    let _type: string = 'submit';
    /* Override defaults */
    if (color) _style.color = color;
    if (type) _type = type;
    if (className) _className = className;
    if (backgroundColor) _style.backgroundColor = backgroundColor;

    return (
        <button className={_className} style={_style} {...props} onClick={onClick} type={type}>
            {children}
        </button>
    );
};
