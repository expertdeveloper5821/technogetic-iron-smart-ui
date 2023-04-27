import React from 'react';
import { IColumnType, IButtonType } from './Table';
interface Props<T> {
    data: T[];
    columns: IColumnType<T>[];
    buttons?: IButtonType<T>[];
    onClick?: (event: React.MouseEvent<HTMLButtonElement>, rowData: T) => void;
}
declare const TableRow: <T>({ data, columns, buttons, onClick }: Props<T>) => JSX.Element;
export default TableRow;
