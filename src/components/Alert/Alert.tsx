import React, { useState, useEffect } from 'react';
import { CloseIcon } from '../../assets/CloseIcon';
import './Alert.css';

type AlertProps = {
    message: string;
    type?: string;
    timeout?: number;
    isClosable?: boolean;
};

export const Alert: React.FunctionComponent<AlertProps> = ({ message = 'This is a success message', type = 'success', timeout, isClosable = true }) => {
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
    return (
        <div className={`alert alert-${type}`}>
            <div>{message}</div>
            {isClosable && (
                <div className="closeIcon" onClick={handleClose}>
                    <CloseIcon />
                </div>
            )}
        </div>
    );
};
