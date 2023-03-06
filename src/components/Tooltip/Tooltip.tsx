import React, { PropsWithChildren, useState } from 'react';
import './Tooltip.css';

type TooltipProps = {
    text?: string;
};

export const Tooltip: React.FunctionComponent<PropsWithChildren<TooltipProps>> = ({ text, children }) => {
    const [showTooltip, setShowTooltip] = useState(false);
    const handleMouseEnter = () => {
        setShowTooltip(true);
    };
    const handleMouseLeave = () => {
        setShowTooltip(false);
    };

    return (
        <div className="tooltipMainDiv" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {children}
            {showTooltip && <span className="textContainer ">{text}</span>}
        </div>
    );
};
