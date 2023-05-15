import React from 'react';
import './Card.css';
export interface CardProps {
    className?: string;
    padding?: string;
    title?: string;
    border?: string;
    footer?: React.ReactNode;
    headerImage?: string;
}
export declare const Card: (props: React.PropsWithChildren<CardProps>) => JSX.Element;
