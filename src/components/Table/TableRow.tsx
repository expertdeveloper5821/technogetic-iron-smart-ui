import React from 'react';
import TableRowCell from './TableRowCell';
import { IColumnType } from './Table';

interface Props<T> {
    data: T[];
    columns: IColumnType<T>[];
}

const TableRow = <T extends Props<T>>({ data, columns }: Props<T>): JSX.Element => {
    return (
        <>
            {data?.map((item, itemIndex) => (
                <tr className="tableRowItem" key={`table-body-${itemIndex}`}>
                    {columns?.map((column, columnIndex) => (
                        <TableRowCell key={`table-row-cell-${columnIndex}`} item={item} column={column} />
                    ))}
                </tr>
            ))}
        </>
    );
};

export default TableRow;
