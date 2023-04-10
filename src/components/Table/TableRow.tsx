import React from 'react';
import { IColumnType } from './Table';
import TableRowCell from './TableRowCell';

interface Props<T> {
    data: T[];
    columns: IColumnType<T>[];
}

const TableRow = <T extends Props<T>>({ data, columns }: Props<T>): JSX.Element => {
    return (
        <>
            {data?.map((item, rowIndex) => (
                <tr key={`table-row-${rowIndex}`}>
                    {columns?.map((column, columnIndex) => (
                        <TableRowCell key={`table-cell-${rowIndex}-${columnIndex}`} item={item} column={column} />
                    ))}
                </tr>
            ))}
        </>
    );
};

export default TableRow;
