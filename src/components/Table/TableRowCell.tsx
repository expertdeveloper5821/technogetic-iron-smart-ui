import React from 'react';
import get from 'lodash/get';
import { IColumnType, IButtonType } from './Table';

interface Props<T> {
    item: T;
    column: IColumnType<T>;
    buttons?: IButtonType<T>;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>, rowData: T) => void;
}

const TableRowCell = <T extends Props<T>>({ item, column, buttons, onClick }: any): JSX.Element => {
    const value = get(item, column?.id);

    if (!buttons) {
        return <td className="tableRowCell">{value}</td>;
    }

    if (buttons) {
        return (
            <td className="tableRowCell">
                <button
                    className="tableBtn"
                    onClick={() => {
                        onClick(item, buttons.title);
                    }}
                >
                    {buttons.value}
                </button>
            </td>
        );
    }
    return <></>;
};

export default TableRowCell;
