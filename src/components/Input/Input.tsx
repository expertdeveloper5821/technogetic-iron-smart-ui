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
    type?: 'email' | 'password' | 'text';
    className?: string;
    adornment?: string;
    ornament?: string;
}

export const Input: React.FunctionComponent<InputProps> = (props) => {
    const { className = 'inputArea', placeholder, autoFocus = false, disabled = false, type, adornment, required, onChange, ornament, ...rest } = props;
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
                    <div className={`commonInputDiv combinedInputField ${className}`}>
                        <input {...rest} type={inputType} placeholder={_placeholder} autoFocus={autoFocus} disabled={disabled} required={_required} onChange={onChange} data-testid="passwordInput" />
                        <span className="passwordIcon" onClick={togglePasswordVisibility} data-testid="passwordVisibility">
                            {showPassword ? <ClosePassword /> : <ShowPassword />}
                        </span>
                    </div>
                </>
            )}
            {type !== 'password' && !adornment && !ornament && (
                <>
                    <div className={`commonInputDiv  ${className}`}>
                        <input type={_type} placeholder={_placeholder} autoFocus={autoFocus} disabled={disabled} required={_required} {...rest} onChange={onChange} data-testid="generalInput" />
                    </div>
                </>
            )}
            {type !== 'password' && adornment && (
                <>
                    <div className="combinedInputField">
                        <div className="adornmentContent">
                            <span className="InputAddOn-item InputAddOn-field" data-testid="adornment">
                                {adornment}
                            </span>
                        </div>
                        <div className={`adornInputField ${className}`}>
                            <input
                                className="InputAddOn-field"
                                placeholder={_placeholder}
                                {...rest}
                                type={_type}
                                autoFocus={autoFocus}
                                disabled={disabled}
                                required={_required}
                                onChange={onChange}
                                data-testid="adornmentInput"
                            />
                        </div>
                    </div>
                </>
            )}
            {type !== 'password' && ornament && (
                <>
                    <div className="combinedInputField">
                        <div className={`oranInputField ${className}`}>
                            <input
                                className="InputAddOn-field"
                                placeholder={_placeholder}
                                {...rest}
                                type={_type}
                                autoFocus={autoFocus}
                                disabled={disabled}
                                required={_required}
                                onChange={onChange}
                                data-testid="oranmentInput"
                            />
                        </div>
                        <div className="oranmentContent">
                            <span className="InputAddOn-item" data-testid="oranment">
                                {ornament}
                            </span>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};
