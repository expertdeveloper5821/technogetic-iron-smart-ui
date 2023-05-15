import React from 'react';
import './Badge.css';

export interface BadgeProps {
    label?: number;
    type?: 'primary' | 'success' | 'warning' | 'danger';
    max?: number;
    className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ label, type = 'primary', className, max }) => {
    const displayLabel = label > max ? `${max}+` : label;

    return (
        <span className={className ? className : `badge badge-${type}`} data-testid="tooltip">
            {displayLabel}
        </span>
    );
};
