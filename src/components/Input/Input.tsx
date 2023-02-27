import React from 'react';
import './Input.css';

export interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    value: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    autoFocus?: boolean;
    disabled?: boolean;
    name?: string;
    type?: 'email' | 'password' | 'text';
    className?: string;
}

export const Input: React.FunctionComponent<InputProps> = (props) => {
    let _className: string = 'commonInput';
    if (props.className) _className = props.className;
    return (
        <>
            <input className={_className} {...props} />
        </>
    );
};
