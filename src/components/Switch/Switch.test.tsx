import { fireEvent, render, screen } from '@testing-library/react';
import { Switch } from './Switch';
import '@testing-library/jest-dom';
import React from 'react';

describe('Input', () => {
    test('should render input', () => {
        render(<Switch type="checkbox" />);
    });
    // test('should update the value when checked value changes', () => {
    //     const datatestid = 'email-input';
    //     const onChange = jest.fn();
    //     render(<Switch checked={false} data-testid={datatestid} onChange={onChange} />);
    //     const switchy = screen.getByTestId('email-input');
    //     fireEvent.change(switchy, { target: { checked: true } });
    //     expect(onChange).toBeTruthy();
    // });
});
