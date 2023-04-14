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
    const { className, placeholder, type, adornment, required, ornament, ...rest } = props;
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };

    const inputType = type === 'password' ? (showPassword ? 'text' : 'password') : type;

    const inputClassName = `inputField ${className} ${type === 'password' ? 'password' : ''}`;

    let _placeholder: string = 'Input Field';
    let _type: string = 'text';
    let _required: boolean = false;

    if (placeholder) _placeholder = placeholder;
    if (type) _type = type;
    if (required) _required = required;

    return (
        <>
            {type === 'password' && (
                <>
                    <div className={`inputField ${className}`}>
                        <input {...rest} type={inputType} placeholder={_placeholder} required={_required} />
                        <span className="togglePasswordVisibility" onClick={togglePasswordVisibility}>
                            {showPassword ? <ClosePassword /> : <ShowPassword />}
                        </span>
                    </div>
                </>
            )}
            {type !== 'password' && !adornment && !ornament && (
                <>
                    <div className={`defInputField ${className}`}>
                        <input {...rest} type={inputType} placeholder={placeholder} required={_required} />
                    </div>
                </>
            )}
            {type !== 'password' && adornment && (
                <>
                    <div className={`inputField ${className}`}>
                        <span className="InputAddOn-item InputAddOn-field">{adornment}</span>
                        <input className="InputAddOn-field" placeholder={placeholder} {...rest} type={inputType} required={_required} />
                    </div>
                </>
            )}
            {type !== 'password' && ornament && (
                <>
                    <div className={`inputField ${className}`}>
                        <input className="InputAddOn-field" placeholder={placeholder} {...rest} type={inputType} required={_required} />
                        <span className="InputAddOn-item">{ornament}</span>
                    </div>
                </>
            )}
        </>
    );
};
