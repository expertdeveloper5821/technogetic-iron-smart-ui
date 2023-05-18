import React, { ComponentType } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthProps } from '../../interfaces/CommonInterface';

export const AuthHOC = (WrappedComponent: ComponentType<AuthProps>) => {
    const ComponentWithAuth = (props: AuthProps) => {
        if (!props.isAuthenticated) {
            return <Navigate to="/login" />;
        }
        return <WrappedComponent {...props} />;
    };
    return ComponentWithAuth;
};
