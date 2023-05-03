import React from 'react';
import './Sidebar.css';
export interface itemsInterface {
    id: number;
    name: string;
    link?: string;
}
export interface sidebarArray {
    id: string | number;
    name: string;
    icon?: string;
    items?: itemsInterface[];
    link?: string;
}
export interface SidebarProps {
    sidebarData?: sidebarArray[];
    align?: string;
    imageSrc?: string;
    openSideBar?: boolean;
}
export declare const Sidebar: React.FunctionComponent<SidebarProps>;
