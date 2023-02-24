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
}
export declare const Input: React.FunctionComponent<InputProps>;
