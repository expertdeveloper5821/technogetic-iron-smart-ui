import './Pagination.css';
type PaginationProps = {
    currentPage: number;
    totalPages: number;
    onPageChange?: (page: number) => void;
};
export declare const Pagination: ({ currentPage, totalPages, onPageChange }: PaginationProps) => JSX.Element;
export {};
