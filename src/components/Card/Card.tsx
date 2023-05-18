import React from 'react';
import './Card.css';
import { CardProps } from '../../interfaces/CommonInterface';

export const Card = (props: React.PropsWithChildren<CardProps>) => {
    const { className, padding, title = 'Card Title', border, footer = 'Card Footer', cardheaderimg } = props;

    const cardHeader = (
        <div className="cardHead">
            <div className="cardHeadTitle">{cardheaderimg ? <img src={cardheaderimg} alt="Card Header Image" /> : <span>{title}</span>}</div>
        </div>
    );
    const cardFooter = (
        <div className="cardFooter">
            <div className="cardFooter">
                <span>{footer}</span>
            </div>
        </div>
    );

    return (
        <div {...props} className={className ? className : `card noBorderCard `}>
            {cardHeader}
            <div style={{ padding }} className="cardBody">
                {props.children}
            </div>
            {cardFooter}
        </div>
    );
};
