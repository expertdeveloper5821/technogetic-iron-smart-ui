import React from 'react';
import './TextArea.css';
export interface TextAreaInputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    placeholder?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    rows?: number;
    cols?: number;
    className?: string;
    form?: string;
}
export declare const TextArea: React.FunctionComponent<TextAreaInputProps>;
