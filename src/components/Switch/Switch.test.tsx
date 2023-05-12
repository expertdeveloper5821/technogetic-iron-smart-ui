import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Switch } from './Switch';
import '@testing-library/jest-dom';

describe('Input', () => {
    test('should render input', () => {
        render(<Switch type="checkbox" />);
    });
});
