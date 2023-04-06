import React from 'react';
import './NavBar.css';
export interface itemInterface {
    id: number;
    title: string;
    link: string;
}
export interface buttonInterface {
    id: number;
    title: string;
    link: string;
}
export interface navbarArray {
    id: number;
    title?: string;
    link?: string;
    items?: itemInterface[];
    image?: string;
    button?: buttonInterface[];
}
export interface NavbarProps {
    navbarData?: navbarArray[];
}
export declare const NavBar: React.FunctionComponent<NavbarProps>;
