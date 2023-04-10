import React from 'react';
import { IColumnType } from './Table';

interface Props<T> {
    columns: IColumnType<T>[];
}

const TableHeader = <T extends Props<T>>({ columns }: Props<T>): JSX.Element => {
    return (
        <tr>
            {columns?.map((column, columnIndex) => (
                <th className="tableHeader" key={`table-head-cell-${columnIndex}`} style={{ width: column.width }}>
                    {column.title}
                </th>
            ))}
            {/* <th className="tableHeader" key="table-head-cell-actions" style={{ width: 150 }}>
                Actions
            </th> */}
        </tr>
    );
};

export default TableHeader;
