import React from 'react';
import './TableHead.css';
import '../../commonstyle/commonstyle.css';
import { TableHeadProps } from '../../interfaces/CommonInterface';

export const TableHead = ({ children, className }: TableHeadProps): JSX.Element => {
    return <th className={className ? className : 'tableHead'}>{children}</th>;
};
