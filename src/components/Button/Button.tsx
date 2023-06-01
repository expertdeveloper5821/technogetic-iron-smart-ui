import React from 'react';
import { ButtonProps } from '../../interfaces/CommonInterface';
import '../../commonstyle/commonstyle.css';
import './Button.css';

export const Button = (props: React.PropsWithChildren<ButtonProps>) => {
    const { bg, color, variant = 'borderLess', onClick, disabled = false, className, type = 'button', multiple = false, startIcon, endIcon, children } = props;

    return (
        <>
            {(type === 'button' || type === 'submit' || type === 'reset') && (
                <button
                    {...props}
                    type="button"
                    className={`${className || ''} button button-${variant} ${disabled ? 'button_disabled' : ''} ${startIcon ? 'Icon' : ''} ${endIcon ? 'Icon' : ''}`}
                    onClick={onClick}
                    disabled={disabled}
                >
                    {startIcon && <span className="start-button-icon">{startIcon}</span>}
                    {children ? children : 'Button'}
                    {endIcon && <span className="end-button-icon">{endIcon}</span>}
                </button>
            )}
            {type === 'file' && (
                <>
                    <input className="uploadFile" type="file" hidden multiple={multiple} id="upload-btn" />
                    <label className={`${className ? className : `button button-${variant}`} ${disabled ? `button_disabled` : ''}`} htmlFor="upload-btn">
                        {children ? children : 'Upload Button'}
                    </label>
                </>
            )}
        </>
    );
};
