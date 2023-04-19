import React from 'react';
import get from 'lodash/get';
import { IColumnType } from './Table';

interface Props<T> {
    item: T;
    column: IColumnType<T>;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>, rowData: T) => void;
}

const TableRowCell = <T extends Props<T>>({ item, column, onClick }: any): JSX.Element => {
    const value = get(item, column.id);

    return (
        <td className="tableRowCell">
            {column.type === 'button' ? (
                <button
                    className="tableBtn"
                    onClick={() => {
                        onClick(item, column.id);
                    }}
                >
                    {value}
                </button>
            ) : (
                value
            )}
        </td>
    );
};

export default TableRowCell;
