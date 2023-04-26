import React from 'react';
import './Alert.css';
type AlertProps = {
    message: string;
    type?: string;
    timeout?: number;
    isClosable?: boolean;
};
type AlertState = {
    isOpen: boolean;
    timerId?: ReturnType<typeof setTimeout>;
};
export declare class Alert extends React.Component<AlertProps, AlertState> {
    constructor(props: AlertProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleClose(): void;
    render(): JSX.Element;
}
export {};
