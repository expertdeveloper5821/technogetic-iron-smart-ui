import React from 'react';
import get from 'lodash/get';
import { IColumnType } from './Table';

interface Props<T> {
    item: T;
    column: IColumnType<T>;
}

const TableRowCell = <T extends Props<T>>({ item, column }: any): JSX.Element => {
    const value = get(item, column.type);
    return <td className="tableRowCell">{value}</td>;
};

export default TableRowCell;
