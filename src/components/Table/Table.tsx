import React from 'react';
import './Table.css';
import '../../commonstyle/commonstyle.css';
import { TableProps } from '../../interfaces/CommonInterface';

export const Table = ({ children, className }: TableProps): JSX.Element => {
    return (
        <div className={className ? className : 'table-container'} data-testid="table-container">
            <table className="mainTable">{children}</table>
        </div>
    );
};
