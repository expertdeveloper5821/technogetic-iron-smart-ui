import React from 'react';
export interface IButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    backgroundColor?: string;
    color?: string;
}
export declare const IButton: React.FunctionComponent<IButtonProps>;
