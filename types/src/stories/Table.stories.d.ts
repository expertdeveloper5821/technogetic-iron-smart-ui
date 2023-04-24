import React from 'react';
import { ComponentMeta } from '@storybook/react';
declare const _default: ComponentMeta<(<T extends {
    data: any[];
    columns: import("../components/Table/Table").IColumnType<T>[];
    buttons?: import("../components/Table/Table").IButtonType<T>[];
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, rowData: T) => void;
}>({ data, columns, buttons, onClick }: {
    data: any[];
    columns: import("../components/Table/Table").IColumnType<T>[];
    buttons?: import("../components/Table/Table").IButtonType<T>[];
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, rowData: T) => void;
}) => JSX.Element)>;
export default _default;
export declare const Primary: any;
