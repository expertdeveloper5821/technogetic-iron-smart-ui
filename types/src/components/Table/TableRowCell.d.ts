import React from 'react';
import { IColumnType, IButtonType } from './Table';
interface Props<T> {
    item: T;
    column: IColumnType<T>;
    buttons?: IButtonType<T>;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>, rowData: T) => void;
}
declare const TableRowCell: <T extends Props<T>>({ item, column, buttons, onClick }: any) => JSX.Element;
export default TableRowCell;
