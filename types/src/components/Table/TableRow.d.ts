import { IColumnType } from './Table';
interface Props<T> {
    data: T[];
    columns: IColumnType<T>[];
}
declare const TableRow: <T extends Props<T>>({ data, columns }: Props<T>) => JSX.Element;
export default TableRow;
