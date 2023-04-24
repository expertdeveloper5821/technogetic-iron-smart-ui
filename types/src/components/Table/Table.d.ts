import React from 'react';
import './Table.css';
export interface IColumnType<T> {
    id: string;
    title: string;
    width?: number;
    render?: (column: IColumnType<T>, item: T) => void;
}
export interface IButtonType<T> {
    id: string;
    title: string;
    width?: number;
    type: string;
    value: string;
}
type TableProps<T> = {
    data: T[];
    columns: IColumnType<T>[];
    buttons?: IButtonType<T>[];
    onClick?: (event: React.MouseEvent<HTMLButtonElement>, rowData: T) => void;
};
export declare const Table: <T extends TableProps<T>>({ data, columns, buttons, onClick }: TableProps<T>) => JSX.Element;
export {};
