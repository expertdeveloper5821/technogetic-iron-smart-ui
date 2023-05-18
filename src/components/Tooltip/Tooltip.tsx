import React, { PropsWithChildren, useState } from 'react';
import './Tooltip.css';
import { TooltipProps } from '../../interfaces/CommonInterface';

export const Tooltip: React.FunctionComponent<PropsWithChildren<TooltipProps>> = ({ text, children }) => {
    const [showTooltip, setShowTooltip] = useState<boolean>(false);
    const handleMouseEnter = () => {
        setShowTooltip(true);
    };
    const handleMouseLeave = () => {
        setShowTooltip(false);
    };
    return (
        <div className="tooltipMainDiv" data-testid="tooltipHover" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {children}
            {showTooltip && <span className="textContainer ">{text}</span>}
        </div>
    );
};
