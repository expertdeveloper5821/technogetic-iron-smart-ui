import React from 'react';
import { IColumnType } from './Table';
import TableRowCell from './TableRowCell';

interface Props<T> {
    data: T[];
    columns: IColumnType<T>[];
    onClick?: (event: React.MouseEvent<HTMLButtonElement>, rowData: T) => void;
}

const TableRow = <T extends Props<T>>({ data, columns, onClick }: Props<T>): JSX.Element => {
    return (
        <>
            {data?.map((item, rowIndex) => (
                <tr className="tableRowItem" key={`table-row-${rowIndex}`}>
                    {columns?.map((column, columnIndex) => (
                        <TableRowCell key={`table-cell-${rowIndex}-${columnIndex}`} item={item} column={column} onClick={onClick} />
                    ))}
                </tr>
            ))}
        </>
    );
};

export default TableRow;
