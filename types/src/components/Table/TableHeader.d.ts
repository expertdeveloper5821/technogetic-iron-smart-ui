import { IColumnType, IButtonType } from './Table';
interface Props<T> {
    columns: IColumnType<T>[];
    buttons?: IButtonType<T>[];
}
declare const TableHeader: <T extends Props<T>>({ columns, buttons }: Props<T>) => JSX.Element;
export default TableHeader;
