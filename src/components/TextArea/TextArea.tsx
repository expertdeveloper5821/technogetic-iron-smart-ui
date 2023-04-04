import React from 'react';
import './TextArea.css';

export interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    placeholder?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    rows?: string;
    cols?: string;
    className?: string;
    form?: string;
    maxLength?: string;
}

export const TextArea: React.FunctionComponent<InputProps> = (props) => {
    const { cols, rows, placeholder, className } = props;
    // Setting Default Value
    let _className: string = 'textField';
    let _rows: string = '5';
    let _cols: string = '33';
    let _placeholder: string = 'Write here..';

    // Overwrite the default Value
    if (className) _className = className;
    if (rows) _rows = rows;
    if (cols) _cols = cols;
    if (placeholder) _placeholder = placeholder;
    return (
        <>
            <textarea className={_className} rows={_rows} cols={_cols} form={props.form} maxlength={props.maxLength} placeholder={_placeholder}></textarea>
        </>
    );
};
