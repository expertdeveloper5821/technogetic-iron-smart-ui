import React from 'react';
import get from 'lodash/get';
import { IColumnType } from './Table';

interface Props<T> {
    item: T;
    column: IColumnType<T>;
}

const TableRowCell = <T extends Props<T>>({ item, column, onClick }: any): JSX.Element => {
    const value = get(item, column.key);
    const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const buttonType = column.buttonType;
        if (typeof column.onClick === 'function') {
            column.onClick(event, item, buttonType);
        }
    };

    return <td className="tableRowCell">{column.type === 'button' ? <button onClick={handleButtonClick}>{value}</button> : value}</td>;
};

export default TableRowCell;
