import React from 'react';
import './Alert.css';
export interface AlertProps {
    message: string;
    type?: 'failure' | 'warning' | 'success';
    timeout?: number;
    isClosable?: boolean;
    className?: string;
}
export declare const Alert: React.FC<AlertProps>;
