import React, { useState } from 'react';
import './Input.css';
import { ShowPassword } from '../../assets/ShowPassword';
import { ClosePassword } from '../../assets/ClosePassword';

export interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
    required?: boolean;
    placeholder?: string;
    autoFocus?: boolean;
    disabled?: boolean;
    name?: string;
    type?: 'email' | 'password' | 'text';
    className?: string;
    adornment?: string;
    ornament?: string;
}

export const Input: React.FunctionComponent<InputProps> = (props) => {
    const { className, placeholder, type, adornment, required, onChange, ornament, ...rest } = props;

    const inputType = type === 'password' ? 'password' : type;

    let _placeholder: string = 'Input Field';
    let _type: string = 'text';
    let _required: boolean = false;

    if (placeholder) _placeholder = placeholder;
    if (type) _type = type;
    if (required) _required = required;

    let passwordVisibilityButton = null;
    if (type === 'password') {
        const togglePasswordVisibility = () => {
            const input = document.querySelector('.passwordInput') as HTMLInputElement | null;
            if (input != null) {
                input.type = input.type === 'password' ? 'text' : 'password';
            }
        };
        passwordVisibilityButton = (
            <span className="togglePasswordVisibility" onClick={togglePasswordVisibility}>
                {inputType === 'password' ? <ShowPassword /> : <ClosePassword />}
            </span>
        );
    }
    return (
        <>
            {type === 'password' && (
                <>
                    <div className={`inputField ${className}`}>
                        <input {...rest} type={inputType} placeholder={_placeholder} required={_required} className={type === 'password' ? 'passwordInput' : ''} onChange={onChange} />
                        {passwordVisibilityButton}
                    </div>
                </>
            )}
            {type !== 'password' && !adornment && !ornament && (
                <>
                    <div className={`inputField ${className}`}>
                        <input type={_type} placeholder={_placeholder} required={_required} {...rest} onChange={onChange} />
                    </div>
                </>
            )}
            {type !== 'password' && adornment && (
                <>
                    <div className={`inputField ${className}`}>
                        <span className="InputAddOn-item InputAddOn-field">{adornment}</span>
                        <input className="InputAddOn-field" placeholder={_placeholder} {...rest} type={_type} required={_required} onChange={onChange} />
                    </div>
                </>
            )}
            {type !== 'password' && ornament && (
                <>
                    <div className={`inputField ${className}`}>
                        <input className="InputAddOn-field" placeholder={_placeholder} {...rest} type={_type} required={_required} onChange={onChange} />
                        <span className="InputAddOn-item">{ornament}</span>
                    </div>
                </>
            )}
        </>
    );
};
