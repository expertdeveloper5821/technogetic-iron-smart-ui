import { IColumnType } from './Table';
interface Props<T> {
    columns: IColumnType<T>[];
}
declare const TableHeader: <T extends Props<T>>({ columns }: Props<T>) => JSX.Element;
export default TableHeader;
