import React, { useState } from 'react';
import { CloseIcon } from '../../assets/CloseIcon';
import './Alert.css';

export interface AlertProps {
    message: string;
    type?: 'failure' | 'warning' | 'success';
    timeout?: number;
    isClosable?: boolean;
    className?: string;
}

export const Alert: React.FC<AlertProps> = ({ message, type = 'success', timeout = 5000, isClosable = true, className }) => {
    const [isOpen, setIsOpen] = useState(true);
    const handleClose = () => {
        setIsOpen(false);
    };
    if (timeout) {
        setTimeout(() => {
            handleClose();
        }, timeout);
    }

    if (!isOpen) {
        return null;
    }
    const alertBody = (
        <div>
            {type === 'success' && <span>This is the Success Alert {message}</span>}
            {type === 'failure' && <span>This is the Failure Alert {message}</span>}
            {type === 'warning' && <span>This is the Warning Alert {message}</span>}
        </div>
    );
    return (
        <div className={className ? className : `alert alert-${type}`}>
            {alertBody}
            {isClosable && (
                <div className="closeIcon" data-testid="close-button" onClick={handleClose}>
                    <CloseIcon />
                </div>
            )}
        </div>
    );
};
