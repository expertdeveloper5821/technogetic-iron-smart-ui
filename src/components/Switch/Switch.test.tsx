import React from 'react';
import { Switch } from './Switch';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Input', () => {
    test('should render input', () => {
        render(<Switch type="checkbox" />);
    });
});
