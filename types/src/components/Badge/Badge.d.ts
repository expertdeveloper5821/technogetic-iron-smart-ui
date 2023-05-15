import React from 'react';
import './Badge.css';
export interface BadgeProps {
    label?: number;
    type?: 'primary' | 'success' | 'warning' | 'danger';
    max?: number;
    className?: string;
}
export declare const Badge: React.FC<BadgeProps>;
