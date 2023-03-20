import AuthHOC from './AuthHoc';
import { render } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import '@testing-library/jest-dom';
import React from 'react';

describe('AuthHoc', () => {
    const MockComponent = () => <div>Mock Component</div>;
    test('renders the wrapped component if user is authenticated', () => {
        const AuthWrapper = AuthHOC(MockComponent);
        const { getByText } = render(<AuthWrapper isAuthenticated={true} />);
        expect(getByText('Mock Component')).toBeInTheDocument();
    });
    // test('redirects to /login if user is not authenticated', () => {
    //     const AuthWrapper = AuthHOC(MockComponent);
    //     const { queryByText } = render(
    //         <MemoryRouter initialEntries={['/']}>
    //             <AuthWrapper isAuthenticated={false} />
    //             <Route path="/login" element={() => <div>Login Page</div>} />
    //         </MemoryRouter>
    //     );
    //     expect(queryByText('Mock Component')).toBeNull();
    //     expect(queryByText('Login Page')).toBeInTheDocument();
    // });
});
