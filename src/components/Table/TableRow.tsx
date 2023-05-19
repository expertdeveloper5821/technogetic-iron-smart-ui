import React from 'react';
import { IColumnType, IButtonType } from './Table';
import TableRowCell from './TableRowCell';

interface Props<T> {
    data: T[];
    columns: IColumnType<T>[];
    buttons?: IButtonType<T>[];
    onClick?: (event: React.MouseEvent<HTMLButtonElement>, rowData: T) => void;
}

const TableRow = <T,>({ data, columns, buttons, onClick }: Props<T>): JSX.Element => {
    if (!buttons) {
        return (
            <>
                {data && !buttons && (
                    <>
                        {data?.map((item, rowIndex) => (
                            <tr className="tableRowItem" key={`table-row-${rowIndex}`}>
                                {columns?.map((column, columnIndex) => (
                                    <TableRowCell key={`table-cell-${rowIndex}-${columnIndex}`} item={item} column={column} />
                                ))}
                            </tr>
                        ))}
                    </>
                )}
            </>
        );
    }
    if (data && buttons) {
        return (
            <>
                {data?.map((item, rowIndex) => (
                    <tr className="tableRowItem" key={`table-row-${rowIndex}`}>
                        {columns?.map((column, columnIndex) => (
                            <TableRowCell key={`table-cell-${rowIndex}-${columnIndex}`} item={item} column={column} />
                        ))}
                        {buttons.map((buttons, buttonIndex) => (
                            <TableRowCell key={`table-cell-${rowIndex}-${buttonIndex}`} item={item} buttons={buttons} onClick={onClick} />
                        ))}
                    </tr>
                ))}
            </>
        );
    }
};

export default TableRow;
