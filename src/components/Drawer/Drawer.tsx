import React, { useState } from 'react';
import { BrowserRouter, NavLink, NavLinkProps } from 'react-router-dom';
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
export const Drawer: React.FunctionComponent<DrawerProps> = ({ drawerData, openDrawer = false }) => {
    const [drawerOpen, setDrawerOpen] = useState<boolean>(openDrawer || false);
    const [isOpen, setIsOpen] = useState(false);
    const [curr, setCurr] = useState<string | number>();
    const [currSubItem, setCurrSubItem] = useState<string | number>();

    const handleItemClick = (id: string | number) => {
        setIsOpen(!isOpen);
        setCurr(id);
        setCurrSubItem(null);
    };
    const handleSubItemClick = (id: string | number) => {
        setCurrSubItem(id === currSubItem ? null : id);
    };
    return (
        <>
            {openDrawer && (
                <BrowserRouter>
                    <div className="drawer">
                        {drawerData.map((data) => {
                            return (
                                <NavLink to={data.link} key={data.id}>
                                    <div
                                        className={`drawerItem ${curr === data.id ? 'active' : ''}`}
                                        onClick={() => {
                                            handleItemClick(data.id);
                                        }}
                                    >
                                        {data.title}
                                    </div>
                                    {curr === data.id &&
                                        data.items &&
                                        isOpen &&
                                        data?.items.map((subItem) => {
                                            return (
                                                <NavLink to={subItem.link} key={subItem.id}>
                                                    <a
                                                        href={subItem.link}
                                                        onClick={() => {
                                                            handleSubItemClick(subItem.id);
                                                        }}
                                                        className={`drawerSubItems ${currSubItem === subItem.id ? 'active' : ''}`}
                                                    >
                                                        {subItem.title}
                                                    </a>
                                                </NavLink>
                                            );
                                        })}
                                </NavLink>
                            );
                        })}
                    </div>
                </BrowserRouter>
            )}
        </>
    );
};
