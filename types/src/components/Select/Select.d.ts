import React from 'react';
import './Select.css';
export interface SelectProps extends React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
    placeholder?: string;
    disabled?: boolean;
    position?: string;
    name?: string;
    options: (string | number)[];
    onChange?: (event: React.ChangeEvent<HTMLSelectElement> & {
        selectedValue: string;
    }) => void;
}
export declare const Select: React.FC<SelectProps>;
