import React, { useState, useEffect, useRef } from 'react';
import { Logout } from '../../assets/Logout';
import { RightArrow } from '../../assets/RightArrow';
import { BrowserRouter, NavLink, NavLinkProps } from 'react-router-dom';
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
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export const Sidebar: React.FunctionComponent<SidebarProps> = ({ sidebarData, align, imageSrc, openSideBar, onClick }) => {
    const [btnOpen, setBtnOpen] = useState<boolean>(openSideBar || false);
    const [isOpen, setIsOpen] = useState<boolean>(true);
    const [curr, setCurr] = useState<string | number>();
    const [currSubItem, setCurrSubItem] = useState<string | number>();

    const toggle = () => {
        setBtnOpen(!btnOpen);
        setIsOpen(!isOpen);
    };

    const handleItemClick = (id: number | string) => {
        setIsOpen(!isOpen);
        setCurr(id);
        setCurrSubItem('');
    };
    const handleSubItemClick = (id: number | string) => {
        setCurrSubItem(id === currSubItem ? '' : id);
    };

    return (
        <BrowserRouter>
            <div className={`SideBarContainer ${align}`} data-testid="sidebar-container">
                <div className={`${btnOpen ? 'sidebar' : 'slimSideBar'}`} data-testid="Sidebar">
                    {/* <div className="header_body"> */}
                    <div className={`${btnOpen ? 'top_section' : 'slim_top_section'}`}>
                        <img src={'../../assets/logo2.jpg'} alt="Logo" className="logo" />
                    </div>
                    <div className="linkArea">
                        {sidebarData?.map((item) => (
                            <NavLink to={item.link} key={item.id}>
                                <div className={` ${btnOpen ? 'SidebarItem' : 'slimSidebarItem'}`}>
                                    <div className="icon">{item.icon}</div>
                                    <div
                                        style={{ display: btnOpen ? 'block' : 'none' }}
                                        onClick={() => {
                                            handleItemClick(item.id);
                                        }}
                                        data-testid="SidebarItem"
                                    >
                                        {item.name}
                                        {item.items && item.items?.length > 0 && <div className={`dropDownIcon ${isOpen && curr === item.id ? 'rotateNintee' : ''}`}>{<RightArrow />}</div>}
                                    </div>
                                </div>

                                {curr === item.id &&
                                    item.items &&
                                    isOpen &&
                                    item?.items.map((itemval) => {
                                        return (
                                            <div key={itemval.id}>
                                                <a
                                                    style={{ display: btnOpen ? 'block' : 'none' }}
                                                    href={itemval.link}
                                                    onClick={() => {
                                                        handleSubItemClick(itemval.id);
                                                    }}
                                                    className={`sidebarSubItems ${currSubItem === itemval.id ? 'active' : ''}`}
                                                    data-testid="SidebarSubItem"
                                                >
                                                    {itemval.name}
                                                </a>
                                            </div>
                                        );
                                    })}
                            </NavLink>
                        ))}
                    </div>
                    {/* </div> */}

                    <div className="footer_section" onClick={onClick}>
                        <div className={`bars ${btnOpen ? 'rotate' : ''} `}>
                            <Logout />
                        </div>
                        <p style={{ display: btnOpen ? 'block' : 'none' }}>Logout</p>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
};
