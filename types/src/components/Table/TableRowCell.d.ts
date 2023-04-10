import React from 'react';
import { IColumnType } from './Table';
interface Props<T> {
    item: T;
    column: IColumnType<T>;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
declare const TableRowCell: <T extends Props<T>>({ item, column, onClick }: any) => JSX.Element;
export default TableRowCell;
