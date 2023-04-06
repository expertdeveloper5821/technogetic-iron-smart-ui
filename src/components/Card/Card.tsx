import React, { PropsWithChildren } from 'react';
import styles from './Card.module.css';

interface CardProps {
    className?: string;
    padding?: string;
    title?: string;
    border?: string;
    footer?: React.ReactNode;
}

export const Card = (props: PropsWithChildren<CardProps>) => {
    const { className = '', padding = '', title = 'Card Title', border = '', footer } = props;
    const borderStyle = border === 'none' ? styles.noBorderCard : '';
    const cardHeader = title ? (
        <div className="cardHead">
            <div className="cardHeadTitle">
                <span>{title}</span>
            </div>
        </div>
    ) : null;

    return (
        <div {...props} className={`${styles.card} ${borderStyle} ${className}`}>
            {cardHeader}
            <div style={{ padding }} className={`${styles.cardBody}`}>
                {props.children}
            </div>
            {footer && <div className={`${styles.cardFooter}`}>{footer}</div>}
        </div>
    );
};
