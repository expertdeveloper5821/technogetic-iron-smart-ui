import { IColumnType } from './Table';
interface Props<T> {
    item: T;
    column: IColumnType<T>;
}
declare const TableRowCell: <T extends Props<T>>({ item, column }: any) => JSX.Element;
export default TableRowCell;
