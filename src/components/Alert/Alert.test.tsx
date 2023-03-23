import { fireEvent, render, screen } from '@testing-library/react';
import { Alert } from './Alert';
import '@testing-library/jest-dom';
import React from 'react';

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
});
