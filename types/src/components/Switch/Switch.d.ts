import React from 'react';
export interface SwitchProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    name?: string;
    checked?: boolean;
}
export declare const Switch: React.FunctionComponent<SwitchProps>;
