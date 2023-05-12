import { ComponentType } from 'react';
export interface AuthProps {
    isAuthenticated: boolean;
}
export declare const AuthHOC: (WrappedComponent: ComponentType<AuthProps>) => (props: AuthProps) => JSX.Element;
