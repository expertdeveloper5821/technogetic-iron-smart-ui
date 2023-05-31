import React from 'react';
import { BadgeProps } from '../../interfaces/CommonInterface';
import '../../commonstyle/commonstyle.css';
import './Badge.css';

export const Badge: React.FC<BadgeProps> = ({ label, type = 'primary', className, max = 11 }) => {
    const displayLabel = label > max ? `${max}+` : label;

    return (
        <span className={className ? className : `badge badge-${type}`} data-testid="tooltip">
            {displayLabel}
        </span>
    );
};
