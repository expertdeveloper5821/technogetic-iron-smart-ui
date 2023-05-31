import React, { useState } from 'react';
import { CloseIcon } from '../../assets/CloseIcon';
import { AlertProps } from '../../interfaces/CommonInterface';
import '../../commonstyle/commonstyle.css';
import './Alert.css';

export const Alert: React.FC<AlertProps> = ({ message, type = 'success', timeout, isClosable = true, className }) => {
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
            {type === 'success' && 'This is the Success Alert'}
            {type === 'failure' && 'This is the Failure Alert'}
            {type === 'warning' && 'This is the Warning Alert'}
        </div>
    );
    return (
        <div className={className ? className : `alert alert-${type}`}>
            <span className="AlertSpan">{message ? message : alertBody}</span>
            {isClosable && (
                <div className="closeIcon" data-testid="close-button" onClick={handleClose}>
                    <CloseIcon />
                </div>
            )}
        </div>
    );
};
