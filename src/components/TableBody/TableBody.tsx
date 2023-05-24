import React from 'react';
import '../../commonstyle/commonstyle.css';
import { TableBodyProps } from '../../interfaces/CommonInterface';

export const TableBody = ({ children }: TableBodyProps): JSX.Element => {
    return <tbody>{children}</tbody>;
};
