import React from 'react';
import { IColumnType, IButtonType } from './Table';
interface Props<T> {
    item: T;
    column: IColumnType<T>;
    buttons?: IButtonType<T>;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>, rowData: T, buttonTitle: string) => void;
}
declare const TableRowCell: <T extends Props<T>>({ item, column, buttons, onClick }: Props<T>) => JSX.Element;
export default TableRowCell;
