import { ComponentType } from 'react';
interface AuthProps {
    isAuthenticated: boolean;
}
declare const AuthHOC: (WrappedComponent: ComponentType<AuthProps>) => (props: AuthProps) => JSX.Element;
export default AuthHOC;
