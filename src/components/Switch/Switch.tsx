import React from 'react';
import { SwitchProps } from '../../interfaces/CommonInterface';
import './Switch.css';

export const Switch: React.FunctionComponent<SwitchProps> = (props) => {
    const { name, className, disabled, checked = false, onChange } = props;
    return (
        <div className={`switch ${className}`}>
            <input type="checkbox" id="switch-toggle" defaultChecked={checked} onChange={onChange} disabled={disabled} name={name} {...props} />
            <label htmlFor="switch-toggle">
                <p className={checked ? 'switchleftTag' : 'switchrightTag'}>{checked ? 'On' : 'Off'}</p>
            </label>
        </div>
    );
};
