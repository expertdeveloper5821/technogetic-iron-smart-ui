import React from 'react';
import { NextIcon } from '../../assets/NextIcon';
import { PreviousIcon } from '../../assets/PreviousIcon';
import './Pagination.css';
type PaginationProps = {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
};

export const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === totalPages;
    const handlePageChange = (page: number) => {
        if (page < 1 || page > totalPages) {
            return;
        }
        onPageChange(page);
    };

    const renderPaginationItem = (page: number, label: string | number) => {
        const isActive = currentPage === page;
        return (
            <div key={page} className={`pagination-item ${isActive ? 'active' : ''}`} onClick={() => handlePageChange(page)}>
                {label}
            </div>
        );
    };

    const renderPaginationItems = () => {
        const paginationItems = [];
        const visiblePages = 5; // Number of visible page links

        // Calculate the start and end page indexes
        let startPage = Math.max(currentPage - Math.floor(visiblePages / 2), 1);
        let endPage = startPage + visiblePages - 1;
        if (endPage > totalPages) {
            endPage = totalPages;
            startPage = Math.max(endPage - visiblePages + 1, 1);
        }

        // Render the previous page link
        paginationItems.push(
            <div key="previous" className={`pagination-item ${isFirstPage ? 'disabled' : ''}`} data-testid="previousIcon" onClick={() => handlePageChange(currentPage - 1)}>
                <PreviousIcon />
            </div>
        );

        // Render the page links
        if (startPage > 1) {
            paginationItems.push(renderPaginationItem(1, 1));
            if (startPage > 2) {
                paginationItems.push(
                    <div key="ellipsis-prev" className="pagination-item ellipsis">
                        ...
                    </div>
                );
            }
        }

        for (let page = startPage; page <= endPage; page++) {
            paginationItems.push(renderPaginationItem(page, page));
        }

        if (endPage < totalPages) {
            if (endPage < totalPages - 1) {
                paginationItems.push(
                    <div key="ellipsis-next" className="pagination-item ellipsis">
                        ...
                    </div>
                );
            }
            paginationItems.push(renderPaginationItem(totalPages, totalPages));
        }

        // Render the next page link
        paginationItems.push(
            <div key="next" className={`pagination-item ${isLastPage ? 'disabled' : ''}`} data-testid="nextIcon" onClick={() => handlePageChange(currentPage + 1)}>
                <NextIcon />
            </div>
        );

        return paginationItems;
    };

    return <div className="pagination">{renderPaginationItems()}</div>;
};
