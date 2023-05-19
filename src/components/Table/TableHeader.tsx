import React from 'react';
import { IColumnType, IButtonType } from './Table';

interface Props<T> {
    columns: IColumnType<T>[];
    buttons?: IButtonType<T>[];
}

const TableHeader = <T extends Props<T>>({ columns, buttons }: Props<T>): JSX.Element => {
    if (columns && buttons) {
        let addedcolumn = [...columns, ...buttons];
        return (
            <>
                <tr>
                    {addedcolumn?.map((addedcolumn, columnIndex) => (
                        <th className="tableHeader" key={`table-head-cell-${columnIndex}`} style={{ width: addedcolumn.width }}>
                            {addedcolumn.title}
                        </th>
                    ))}
                </tr>
            </>
        );
    }
    if (columns && !buttons) {
        return (
            <>
                {columns && !buttons && (
                    <tr>
                        {columns?.map((column, columnIndex) => (
                            <th className="tableHeader" key={`table-head-cell-${columnIndex}`} style={{ width: column.width }}>
                                {column.title}
                            </th>
                        ))}
                    </tr>
                )}
            </>
        );
    }
};

export default TableHeader;
