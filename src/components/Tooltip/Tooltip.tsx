import React, { PropsWithChildren } from 'react';
import './Tooltip.css';

type TooltipProps = {
    text?: string;
};

type TooltipState = {
    showTooltip: boolean;
};

export class Tooltip extends React.Component<PropsWithChildren<TooltipProps>, TooltipState> {
    constructor(props: PropsWithChildren<TooltipProps>) {
        super(props);

        this.state = {
            showTooltip: false
        };

        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    handleMouseEnter(): void {
        this.setState({ showTooltip: true });
    }

    handleMouseLeave(): void {
        this.setState({ showTooltip: false });
    }

    render(): JSX.Element {
        const { text, children } = this.props;
        const { showTooltip } = this.state;

        return (
            <div className="tooltipMainDiv" data-testid="tooltipHover" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                {children ? children : 'Hello I am a Tooltip'}
                {showTooltip && <span className="textContainer ">{text ? text : 'This is the Text Area of Tooltip'}</span>}
            </div>
        );
    }
}
