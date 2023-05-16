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
    startIcon?: string;
    endIcon?: string;
}

export const Button = (props: React.PropsWithChildren<ButtonProps>) => {
    const { children, bg, color, varient = 'borderLess', onClick, disabled = false, className, type = 'button', multiple = false, startIcon, endIcon } = props;

    return (
        <>
            {type === 'button' ? (
                <button
                    {...props}
                    type="button"
                    className={`${className ? className : `button button-${varient}`}${disabled ? `button_disabled` : ''} ${startIcon ? 'Icon' : ''} ${endIcon ? 'Icon' : ''}`}
                    onClick={onClick}
                    disabled={disabled}
                >
                    {startIcon && <span className="start-button-icon">{startIcon}</span>}
                    {children ? children : 'Button'}
                    {endIcon && <span className="end-button-icon">{endIcon}</span>}
                </button>
            ) : (
                <>
                    <input className="uploadFile" type="file" hidden multiple={multiple} id="upload-btn" />
                    <label className={`${className ? className : `button button-${varient}`}${disabled ? `button_disabled` : ''}`} htmlFor="upload-btn">
                        {children ? children : 'Upload Button'}
                    </label>
                </>
            )}
        </>
    );
};
