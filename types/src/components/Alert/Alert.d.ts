import React from 'react';
import './Alert.css';
type AlertProps = {
    message: string;
    type?: string;
    timeout?: number;
    isClosable?: boolean;
};
export declare const Alert: React.FunctionComponent<AlertProps>;
export {};
