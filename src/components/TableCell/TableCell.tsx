import React from 'react';
import './TableCell.css';
import '../../commonstyle/commonstyle.css';
import { TableCellProps } from '../../interfaces/CommonInterface';

export const TableCell = ({ children, className }: TableCellProps): JSX.Element => {
    return <td className={className ? className : 'tableCell'}>{children}</td>;
};
