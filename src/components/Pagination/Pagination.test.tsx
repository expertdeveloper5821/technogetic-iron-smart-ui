import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Pagination } from './Pagination';

describe('Pagination Component', () => {
    const onPageChangeMock = jest.fn();
    const totalPages = 10;

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('renders correctly', () => {
        const { container } = render(<Pagination currentPage={1} totalPages={totalPages} onPageChange={onPageChangeMock} />);

        expect(container).toMatchSnapshot();
    });

    test('disables previous button on the first page', () => {
        const { getByText } = render(<Pagination currentPage={1} totalPages={totalPages} onPageChange={onPageChangeMock} />);

        const previousButton = getByText('Previous');
        expect(previousButton).toBeDisabled();
        fireEvent.click(previousButton);
        expect(onPageChangeMock).not.toHaveBeenCalled();
    });

    test('disables next button on the last page', () => {
        const { getByText } = render(<Pagination currentPage={totalPages} totalPages={totalPages} onPageChange={onPageChangeMock} />);

        const nextButton = getByText('Next');
        expect(nextButton).toBeDisabled();
        fireEvent.click(nextButton);
        expect(onPageChangeMock).not.toHaveBeenCalled();
    });

    test('calls onPageChange with the correct page number when a page link is clicked', () => {
        const { getByText } = render(<Pagination currentPage={3} totalPages={totalPages} onPageChange={onPageChangeMock} />);

        const pageLink = getByText('5');
        fireEvent.click(pageLink);
        expect(onPageChangeMock).toHaveBeenCalledWith(5);
    });
});
