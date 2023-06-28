import React from 'react';
import { render, fireEvent, screen, getByTestId } from '@testing-library/react';
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

    test('calls onPageChange with the previous page number', () => {
        render(<Pagination currentPage={2} totalPages={totalPages} onPageChange={onPageChangeMock} />);

        const previousButton = screen.getByTestId('previousIcon');
        fireEvent.click(previousButton);
        expect(onPageChangeMock).toHaveBeenCalledWith(1);
    });

    test('calls onPageChange with the next page number', () => {
        render(<Pagination currentPage={1} totalPages={totalPages} onPageChange={onPageChangeMock} />);

        const nextButton = screen.getByTestId('nextIcon');
        fireEvent.click(nextButton);
        expect(onPageChangeMock).toHaveBeenCalledWith(2);
    });

    test('calls onPageChange with the correct page number when a page link is clicked', () => {
        const { getByText } = render(<Pagination currentPage={3} totalPages={totalPages} onPageChange={onPageChangeMock} />);

        const pageLink = getByText('5');
        fireEvent.click(pageLink);
        expect(onPageChangeMock).toHaveBeenCalledWith(5);
    });
});
