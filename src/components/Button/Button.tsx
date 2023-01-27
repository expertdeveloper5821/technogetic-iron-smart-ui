import React from 'react';

export interface IButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    backgroundColor?: string;
    color?: string;
}

export const IButton: React.FunctionComponent<IButtonProps> = (props) => {
    const { children, backgroundColor, color, style } = props;
    let _style: React.CSSProperties = style || {};

    /**Override defaults */
    if (color) _style.color = color;
    if (backgroundColor) _style.backgroundColor = backgroundColor;

    return (
        <button style={_style} {...props}>
            {children}
        </button>
    );
};
