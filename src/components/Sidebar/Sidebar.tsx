import React, { useState } from 'react';
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
export const Sidebar: React.FunctionComponent<SidebarProps> = ({ sidebarData }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [curr, setCurr] = useState();
    const [currSubItem, setCurrSubItem] = useState();

    const handleItemClick = (id: any) => {
        setIsOpen(!isOpen);
        setCurr(id);
        setCurrSubItem(null);
    };
    const handleSubItemClick = (id: any) => {
        setCurrSubItem(id === currSubItem ? null : id);
    };
    return (
        <div className="sidebar">
            {sidebarData.map((data, index: any) => {
                return (
                    <div key={`Sidebar-Data -${data.id}`}>
                        <div
                            className={`SidebarItem ${curr === data.id ? 'active' : ''}`}
                            onClick={() => {
                                handleItemClick(data.id);
                            }}
                        >
                            {data.title}
                        </div>
                        {curr === data.id &&
                            data.items &&
                            isOpen &&
                            data?.items.map((itemval: any) => {
                                return (
                                    <a
                                        href={itemval.link}
                                        key={`Sidebar-Link -${data.id}`}
                                        onClick={() => {
                                            handleSubItemClick(itemval.id);
                                        }}
                                        className={`sidebarSubItems ${currSubItem === itemval.id ? 'active' : ''}`}
                                    >
                                        {itemval.title}
                                    </a>
                                );
                            })}
                    </div>
                );
            })}
        </div>
    );
};
