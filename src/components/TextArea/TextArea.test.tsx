import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TextArea } from './TextArea';
import '@testing-library/jest-dom';

describe('TextArea', () => {
    test('renders with default props', () => {
        const { getByPlaceholderText } = render(<TextArea />);
        const textarea = getByPlaceholderText('Text Area...');
        expect(textarea).toBeInTheDocument();
        expect(textarea).toHaveAttribute('rows', '10');
        expect(textarea).toHaveAttribute('cols', '50');
    });

    test('renders with custom props', () => {
        const onChangeMock = jest.fn();
        render(<TextArea className="custom-class" rows={5} cols={20} placeholder="Custom placeholder" onChange={onChangeMock} />);
        const textArea = screen.getByRole('textbox');
        expect(textArea).toBeInTheDocument();
        expect(textArea).toHaveClass('custom-class');
        expect(textArea).toHaveAttribute('placeholder', 'Custom placeholder');
        expect(textArea).toHaveAttribute('rows', '5');
        expect(textArea).toHaveAttribute('cols', '20');
        userEvent.type(textArea, 'hello');
    });
});
