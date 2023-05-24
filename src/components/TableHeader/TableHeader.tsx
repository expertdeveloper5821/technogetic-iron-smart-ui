import React from 'react';
import '../../commonstyle/commonstyle.css';
import { TableHeaderProps } from '../../interfaces/CommonInterface';

export const TableHeader = ({ children }: TableHeaderProps): JSX.Element => {
    return <thead>{children}</thead>;
};
