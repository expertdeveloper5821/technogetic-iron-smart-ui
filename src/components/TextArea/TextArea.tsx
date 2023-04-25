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

    return (
        <>
            <div className={`textAreaField ${className}`}>
                <textarea
                    className={className ? className : 'textAreaInput'}
                    rows={rows ? rows : 10}
                    cols={cols ? cols : 50}
                    form={props.form}
                    placeholder={placeholder ? placeholder : 'Text Area...'}
                    onChange={onChange}
                />
            </div>
        </>
    );
};
