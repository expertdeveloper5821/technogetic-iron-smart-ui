import React from 'react';
import './Nav.css';
export interface NavProps {
    userData?: {
        userName?: string;
        designation?: string;
        email?: string;
        avatar?: string;
        notificationCount?: number;
    };
    onClick?: (event: React.MouseEvent<HTMLDivElement>, clicktype: string) => void;
}
export declare const Nav: React.FunctionComponent<NavProps>;
