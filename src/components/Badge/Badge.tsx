import React from 'react';
import './Badge.css';

export interface BadgeProps {
    style?: React.CSSProperties;
    label?: string | number;
    type?: 'primary' | 'success' | 'warning' | 'danger';
    max?: number;
}

export const Badge: React.FC<BadgeProps> = ({ label, type = 'primary', max, style }) => {
    const displayLabel = label > max ? `${max}+` : label;

    return (
        <span className={`badge badge-${type}`} style={{ borderRadius: '10px', ...style }} data-testid="tooltip">
            {displayLabel}
        </span>
    );
};
