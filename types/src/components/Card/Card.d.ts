import React, { PropsWithChildren } from 'react';
export interface CardProps {
    className?: string;
    padding?: string;
    title?: string;
    border?: string;
    footer?: React.ReactNode;
    headerImage?: string;
}
export declare const Card: (props: PropsWithChildren<CardProps>) => JSX.Element;
