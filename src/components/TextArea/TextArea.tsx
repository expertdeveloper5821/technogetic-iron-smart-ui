import React from 'react';
import { TextAreaInputProps } from '../../interfaces/CommonInterface';
import '../../commonstyle/commonstyle.css';
import './TextArea.css';

export const TextArea: React.FunctionComponent<TextAreaInputProps> = (props) => {
    const { cols, rows, placeholder, onChange, className, ...rest } = props;
    return (
        <textarea
            className={className ? className : 'textAreaInput'}
            rows={rows ? rows : 10}
            cols={cols ? cols : 50}
            form={props.form}
            placeholder={placeholder ? placeholder : 'Text Area...'}
            onChange={onChange}
        />
    );
};
