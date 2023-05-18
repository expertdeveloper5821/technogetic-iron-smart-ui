import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Alert } from './Alert';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom';

describe('Button', () => {
    test('renders the Alert', () => {
        render(<Alert message="Hello world!" />);
    });

    test('close button should not be in the document if isClose is equal to false', () => {
        const { queryByTestId } = render(<Alert message="Hello world!" isClosable={false} />);
        expect(queryByTestId('close-button')).toBeNull();
    });

    test('close button should  be in the document if isClose is equal to true', () => {
        const { queryByTestId } = render(<Alert message="Hello world!" isClosable={true} />);
        expect(queryByTestId('close-button')).toBeInTheDocument();
    });

    test('alert will be removed after clicking onclose', () => {
        render(<Alert message="This is a success message" type="success" timeout={5000} isClosable />);
        const closeButton = screen.getByTestId('close-button');
        fireEvent.click(closeButton);
        const alertElement = screen.queryByText('This is a success message');
        expect(alertElement).not.toBeInTheDocument();
    });

    jest.useFakeTimers();
    test('should close the alert after the specified timeout duration', async () => {
        const timeout = 3000;
        const { queryByText } = render(<Alert message="Test Alert" timeout={timeout} />);
        expect(queryByText('Test Alert')).toBeInTheDocument();
        act(() => {
            jest.advanceTimersByTime(timeout);
        });
        await act(() => {});
        expect(queryByText('Test Alert')).not.toBeInTheDocument();
    });
});
