import React, { useState, useEffect, useRef } from 'react';
import { PopoverProps } from '../../interfaces/CommonInterface';

type popoverStyles = {
    position: any;
    padding: string;
    borderRadius: string;
    boxShadow: string;
    zIndex: number;
    bottom?: string;
    left?: string;
    transform?: string;
    top?: string;
    right?: string;
    backgroundColor: string;
    width?: string;
    height?: string;
};

export const Popover = ({ content, children, placement, width, height, className, isOpen, setIsOpen }: PopoverProps) => {
    // const [isPopoverOpen, setIsPopoverOpen] = useState(false);
    const popoverRef = useRef(null);

    // const handlePopoverOpen = () => {
    //     setIsPopoverOpen(true);
    // };

    // const handlePopoverClose = () => {
    //     setIsPopoverOpen(false);
    // };

    const getPopoverStyles = () => {
        let popoverStyles: popoverStyles = {
            position: 'absolute',
            padding: '10px',
            borderRadius: '4px',
            backgroundColor: 'white',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.15)',
            zIndex: 999,
            width: width ? width : '150px',
            height: height ? height : '60px'
        };

        switch (placement) {
            case 'top':
                popoverStyles = { ...popoverStyles, bottom: '100%', transform: 'translateX(-50%)' };
                break;
            case 'bottom':
                popoverStyles = { ...popoverStyles, top: '100%', transform: 'translateX(-40%)' };
                break;
            case 'left':
                popoverStyles = { ...popoverStyles, top: '50%', left: '-18.5%', transform: 'translateY(-35%)' };
                break;
            case 'right':
                popoverStyles = { ...popoverStyles, top: '50%', left: '14%', transform: 'translateY(-50%)' };
                break;
            default:
                popoverStyles = { ...popoverStyles, top: '100%', transform: 'translateX(-20%)' };
        }

        return popoverStyles;
    };

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (popoverRef.current && !popoverRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div style={{ position: 'relative' }} className={className}>
            <div>{children}</div>
            {isOpen && (
                <div ref={popoverRef} style={getPopoverStyles()}>
                    {content}
                </div>
            )}
        </div>
    );
};
