import React from 'react';
import { SwitchProps } from '../../interfaces/CommonInterface';

export const Switch: React.FunctionComponent<SwitchProps> = (props) => {
    const { name, disabled, checked, onChange } = props;
    return <input name={name} checked={checked} onChange={onChange} disabled={disabled} type="checkbox" {...props}></input>;
};
