import React from 'react';
import '../../commonstyle/commonstyle.css';
import './TableHeader.css';
import { TableHeaderProps } from '../../interfaces/CommonInterface';

export const TableHeader = ({ children }: TableHeaderProps): JSX.Element => {
    return <thead className="tableHeader">{children}</thead>;
};
