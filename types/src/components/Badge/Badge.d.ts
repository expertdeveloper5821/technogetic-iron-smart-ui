import React from 'react';
import './Badge.css';
export interface BadgeProps {
    style?: React.CSSProperties;
    label?: string | number;
    type?: 'primary' | 'success' | 'warning' | 'danger';
    max?: number;
}
export declare const Badge: React.FC<BadgeProps>;
