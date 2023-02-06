import React from 'react';
import './Card.css';
export const Card: any = (props: any) => {
    const { className, padding, title, children } = props;
    const cardHeader = title ? (
        <div className="cardHead">
            <div className="cardHeadTitle">
                <span>{title}</span>
            </div>
        </div>
    ) : null;
    let _padding = padding;
    // Add the className if necessary
    let _className = className ? className : '';
    return (
        <div {...props} className={`card ${_className}`}>
            {cardHeader}
            <div style={padding && { padding: `${_padding}` }} className="cardBody">
                {children}
            </div>
        </div>
    );
};
