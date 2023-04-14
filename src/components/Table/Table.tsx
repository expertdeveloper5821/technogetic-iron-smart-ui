import React from 'react';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
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

export const Table = <T extends TableProps<T>>({ data, columns }: TableProps<T>): JSX.Element => {
    return (
        <table className="mainTable">
            <thead>
                <TableHeader columns={columns} />
            </thead>
            <tbody>
                <TableRow data={data} columns={columns} />
            </tbody>
        </table>
    );
};
