import React from 'react';
import './TextArea.css';

export interface TextAreaInputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
    placeholder?: string;
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    rows?: number;
    cols?: number;
    className?: string;
    form?: string;
}

export const TextArea: React.FunctionComponent<TextAreaInputProps> = (props) => {
    const { cols, rows, placeholder, onChange, className, ...rest } = props;
    // Setting Default Value
    let _className: string = 'textAreaInput';
    let _rows: number = 10;
    let _cols: number = 50;
    let _placeholder: string = 'Write here..';

    // Overwrite the default Value
    if (className) _className = className;
    if (rows) _rows = rows;
    if (cols) _cols = cols;
    if (placeholder) _placeholder = placeholder;
    return (
        <>
            <div className={`textAreaField ${className}`}>
                <textarea className={_className} rows={_rows} cols={_cols} form={props.form} placeholder={_placeholder} onChange={onChange} />
            </div>
        </>
    );
};
