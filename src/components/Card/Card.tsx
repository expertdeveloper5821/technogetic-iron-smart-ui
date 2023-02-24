import React, { PropsWithChildren } from 'react';
import styles from './Card.module.css';
interface CardProps {
    className: string;
    padding: string;
    title: string;
    border: string;
}
export const Card: any = (props: PropsWithChildren<CardProps>) => {
    let { className, padding, title, children, border } = props;
    let borderStyle = '';
    if (border === 'none') {
        borderStyle = styles.noBorderCard;
    }
    const cardHeader = title ? (
        <div className="cardHead">
            <div className="cardHeadTitle">
                <span>{title}</span>
            </div>
        </div>
    ) : null;
    // Add the className if necessary
    className = className ? className : '';
    return (
        <div {...props} className={`${styles.card} ${borderStyle} ${className}`}>
            {cardHeader}
            <div style={padding && { padding }} className={`${styles.cardBody}`}>
                {children}
            </div>
        </div>
    );
};
