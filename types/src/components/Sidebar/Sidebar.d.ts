import React from 'react';
import './Sidebar.css';
export interface itemsInterface {
    id: number;
    title: string;
    link: string;
}
export interface sidebarArray {
    id: number;
    title: string;
    link: string;
    items: itemsInterface[];
}
export interface SidebarProps {
    sidebarData?: sidebarArray[];
}
export declare const Sidebar: React.FunctionComponent<SidebarProps>;
