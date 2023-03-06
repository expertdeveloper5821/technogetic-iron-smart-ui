import { render, screen } from '@testing-library/react';
import { Alert } from './Alert';
import '@testing-library/jest-dom';
import React from 'react';

describe('Button', () => {
    test('renders the Button component', () => {
        render(<Alert message="Hello world!" />);
    });
});
