import React from 'react';
import './TableRow.css';
import '../../commonstyle/commonstyle.css';
import { TableRowProps } from '../../interfaces/CommonInterface';

export const TableRow = ({ children, className }: TableRowProps): JSX.Element => {
    return <tr className={className ? className : 'tableRow'}>{children}</tr>;
};
