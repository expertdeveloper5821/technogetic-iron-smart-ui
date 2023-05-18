import React from 'react';
import { AuthHOC } from './AuthHoc';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

const MockComponent = () => <div>Mock Component</div>;

describe('AuthHOC', () => {
    test('renders the wrapped component when isAuthenticated is true', () => {
        const isAuthenticated = true;

        const ComponentWithAuth = AuthHOC(MockComponent);
        const { getByText } = render(<ComponentWithAuth isAuthenticated={isAuthenticated} />);

        expect(getByText('Mock Component')).toBeInTheDocument();
    });

    // test('redirects to /login when isAuthenticated is false', () => {
    //     const isAuthenticated = false;

    //     const ComponentWithAuth = AuthHOC(MockComponent);
    //     const { container } = render(
    //         <MemoryRouter initialEntries={['/']}>
    //             <ComponentWithAuth isAuthenticated={isAuthenticated} />
    //         </MemoryRouter>
    //     );

    //     expect(container.innerHTML).toContain('<a href="/login"></a>');
    //     expect(container.innerHTML).toContain('window.location.replace("/login")');
    // });
});
