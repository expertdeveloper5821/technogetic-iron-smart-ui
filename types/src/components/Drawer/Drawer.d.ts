import React from 'react';
import './Drawer.css';
export interface drawerItemsInterface {
    id: number;
    title: string;
    link: string;
}
export interface drawerArray {
    id: number;
    title: string;
    link: string;
    items: drawerItemsInterface[];
}
export interface DrawerProps {
    drawerData?: drawerArray[];
    openDrawer?: boolean;
}
export declare const Drawer: React.FunctionComponent<DrawerProps>;
