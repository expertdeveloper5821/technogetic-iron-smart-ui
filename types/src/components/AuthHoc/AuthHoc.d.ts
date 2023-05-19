import { ComponentType } from 'react';
import { AuthProps } from '../../interfaces/CommonInterface';
export declare const AuthHOC: (WrappedComponent: ComponentType<AuthProps>) => (props: AuthProps) => JSX.Element;
