import React from 'react';
import { IColumnType } from './Table';
interface Props<T> {
    data: T[];
    columns: IColumnType<T>[];
    onClick?: (event: React.MouseEvent<HTMLButtonElement>, rowData: T) => void;
}
declare const TableRow: <T extends Props<T>>({ data, columns, onClick }: Props<T>) => JSX.Element;
export default TableRow;
