import React from 'react';

export interface SwitchProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    name?: string;
    checked?: boolean;
}

export const Switch: React.FunctionComponent<SwitchProps> = (props) => {
    const { name, disabled, checked, onChange } = props;
    return <input name={name} checked={checked} onChange={onChange} disabled={disabled} type="checkbox" {...props}></input>;
};
