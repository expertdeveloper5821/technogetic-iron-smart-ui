import React from 'react';
import './Table.css';
export interface IColumnType<T> {
    key: string;
    title: string;
    width?: number;
    type?: string;
    buttonType?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>, rowData: T) => void;
    render?: (column: IColumnType<T>, item: T) => void;
}
type TableProps<T> = {
    data: T[];
    columns: IColumnType<T>[];
};
export declare const Table: <T extends TableProps<T>>({ data, columns }: TableProps<T>) => JSX.Element;
export {};
