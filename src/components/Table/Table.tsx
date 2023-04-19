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
    render?: (column: IColumnType<T>, item: T) => void;
}

type TableProps<T> = {
    data: T[];
    columns: IColumnType<T>[];
    onClick?: (event: React.MouseEvent<HTMLButtonElement>, rowData: T) => void;
};

export const Table = <T extends TableProps<T>>({ data, columns, onClick }: TableProps<T>): JSX.Element => {
    return (
        <table className="mainTable">
            <thead>
                <TableHeader columns={columns} />
            </thead>
            <tbody>
                <TableRow data={data} columns={columns} onClick={onClick} />
            </tbody>
        </table>
    );
};
