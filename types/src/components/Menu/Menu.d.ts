import React from 'react';
import './Menu.css';
export interface subMenuInterface {
    label?: string;
    key?: string | number;
    icon?: string;
    type?: string;
    href?: string;
}
export interface MenuProps {
    label?: string;
    key?: string | number;
    icon?: string;
    children?: subMenuInterface[];
    type?: string;
    href?: string;
}
export interface MenuItemProps {
    menuData?: MenuProps[];
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}
export declare const Menu: React.FunctionComponent<MenuItemProps>;
