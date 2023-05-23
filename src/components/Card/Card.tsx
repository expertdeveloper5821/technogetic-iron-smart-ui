import React from 'react';
import { CardProps } from '../../interfaces/CommonInterface';
import '../../commonstyle/commonstyle.css';
import './Card.css';

export const Card = (props: React.PropsWithChildren<CardProps>) => {
    const { className, padding, title = 'Title of Your Card', cardbody = 'This is the Body Section', border, cardheaderimg, height = '150px' } = props;

    const cardHeader = (
        <div className="cardHead" style={{ height: height }}>
            <img className="cardImg" src={cardheaderimg} alt="Image Cap" style={{ height: height }} />
        </div>
    );
    const cardFooter = <div className="cardFooter">{props.children}</div>;

    return (
        <div {...props} className={className ? className : `card noBorderCard `}>
            {cardheaderimg ? cardHeader : ''}

            <div style={{ padding }} className="cardBody">
                <div className="cardTitle">{title}</div>
                <p className="cardDesc">{cardbody}</p>
            </div>
            {cardFooter}
        </div>
    );
};
