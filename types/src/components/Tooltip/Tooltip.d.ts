import React, { PropsWithChildren } from 'react';
import './Tooltip.css';
type TooltipProps = {
    text?: string;
};
declare const Tooltip: React.FunctionComponent<PropsWithChildren<TooltipProps>>;
export default Tooltip;
