import React from 'react';
import { IconButton } from './IconButton';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('IconButton', () => {
    test('renders without errors', () => {
        render(<IconButton />);
    });

    test('renders with provided src prop', () => {
        const src = 'path/to/image.png';
        const alt = 'Image Alt Text';
        const { getByAltText } = render(<IconButton src={src} alt={alt} />);
        const imageElement = getByAltText(alt);
        expect(imageElement).toBeInTheDocument();
        expect(imageElement.getAttribute('src')).toBe(src);
    });

    test('renders with Upload component when src prop is not provided', () => {
        const { getByTestId } = render(<IconButton />);
        const uploadComponent = getByTestId('upload-component');
        expect(uploadComponent).toBeInTheDocument();
    });
});
