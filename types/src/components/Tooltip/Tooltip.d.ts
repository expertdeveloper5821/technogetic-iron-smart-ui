import React, { PropsWithChildren } from 'react';
import './Tooltip.css';
type TooltipProps = {
    text?: string;
};
type TooltipState = {
    showTooltip: boolean;
};
export declare class Tooltip extends React.Component<PropsWithChildren<TooltipProps>, TooltipState> {
    constructor(props: PropsWithChildren<TooltipProps>);
    handleMouseEnter(): void;
    handleMouseLeave(): void;
    render(): JSX.Element;
}
export {};
