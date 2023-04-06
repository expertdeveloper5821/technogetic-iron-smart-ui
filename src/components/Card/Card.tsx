import React, { PropsWithChildren } from 'react';
import styles from './Card.module.css';

export interface CardProps {
    className?: string;
    padding?: string;
    title?: string;
    border?: string;
    footer?: React.ReactNode;
    headerImage?: string;
}

export const Card = (props: PropsWithChildren<CardProps>) => {
    const { className = '', padding = '', title = 'Card Title', border = '', footer = 'Card Footer', headerImage } = props;
    const borderStyle = border === 'none' ? styles.noBorderCard : '';
    const cardHeader = (
        <div className="cardHead">
            {headerImage && <img src={headerImage} alt="Card Header Image" />}
            <div className="cardHeadTitle">
                <span>{title}</span>
            </div>
        </div>
    );
    const cardFooter = (
        <div className="cardFooter">
            <div className={`${styles.cardFooter}`}>
                <span>{footer}</span>
            </div>
        </div>
    );

    return (
        <div {...props} className={`${styles.card} ${borderStyle} ${className}`}>
            {cardHeader}
            <div style={{ padding }} className={`cardBody ${styles.cardBody}`}>
                {props.children}
            </div>
            {cardFooter}
        </div>
    );
};
