import React from 'react';
import { IconButton } from './IconButton';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('IconButton', () => {
    test('renders without errors', () => {
        render(<IconButton />);
    });

    test('renders upload icon when type is "file"', () => {
        const { getByTestId } = render(<IconButton type="file" />);
        expect(getByTestId('upload-component')).toBeInTheDocument();
    });

    test('renders delete icon when type is "button"', () => {
        const { getByTestId } = render(<IconButton type="button" />);
        const deleteIcon = getByTestId('upload-component');
        expect(deleteIcon).toBeInTheDocument();
    });

    test('calls onClick when button is clicked', () => {
        const onClickMock = jest.fn();
        const { getByTestId } = render(<IconButton type="button" onClick={onClickMock} />);
        const button = getByTestId('upload-component');
        fireEvent.click(button);
        expect(onClickMock).toHaveBeenCalled();
    });
});
