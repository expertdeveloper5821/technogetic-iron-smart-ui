import React from 'react';
import './Select.css';
export interface SelectProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    disabled?: boolean;
    position?: string;
    name?: string;
    options?: optionType[];
    isSearchable?: boolean;
}
export interface optionType {
    value: string;
    label: string;
}
export interface eType {
    target: {
        value: React.SetStateAction<string>;
    };
}
export interface itemType {
    value: string;
}
export interface itemType {
    value: string;
}
export declare const Select: React.FunctionComponent<SelectProps>;
