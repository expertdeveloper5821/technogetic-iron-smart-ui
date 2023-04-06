import React, { ComponentType } from 'react';
import { Navigate } from 'react-router-dom';

interface AuthProps {
    isAuthenticated: boolean;
}

const AuthHOC = (WrappedComponent: ComponentType<AuthProps>) => {
    const ComponentWithAuth = (props: AuthProps) => {
        if (!props.isAuthenticated) {
            return <Navigate to="/login" />;
        }
        return <WrappedComponent {...props} />;
    };
    return ComponentWithAuth;
};

export default AuthHOC;
