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

export const Button = (props: React.PropsWithChildren<ButtonProps>) => {
    const { children, bg, color, varient = 'borderLess', onClick, disabled = false, className, type = 'button', multiple = false } = props;

    return (
        <>
            {type === 'button' ? (
                <button {...props} type="button" className={`${className ? className : `button button-${varient}`}${disabled ? `button_disabled` : ''}`} onClick={onClick} disabled={disabled}>
                    {children ? children : 'Button'}
                </button>
            ) : (
                <>
                    <input className="uploadFile" type="file" hidden multiple id="upload-btn" />
                    <label className={`${className ? className : `button button-${varient}`}${disabled ? `button_disabled` : ''}`} htmlFor="upload-btn">
                        {children ? children : 'Upload Button'}
                    </label>
                </>
            )}
        </>
    );
};
