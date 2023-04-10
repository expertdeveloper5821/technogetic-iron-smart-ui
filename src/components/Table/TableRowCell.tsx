import React from 'react';
import get from 'lodash/get';
import { IColumnType } from './Table';

interface Props<T> {
    item: T;
    column: IColumnType<T>;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const TableRowCell = <T extends Props<T>>({ item, column, onClick }: any): JSX.Element => {
    const value = get(item, column.key);

    return <td className="tableRowCell">{column.type === 'button' ? <a onClick={onClick}>{value}</a> : value}</td>;
};

export default TableRowCell;
