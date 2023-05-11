import React, { useState } from 'react';
import { BrowserRouter, NavLink, NavLinkProps } from 'react-router-dom';
import { RightArrow } from '../../assets/RightArrow';
import './Menu.css';

export interface subMenuInterface {
    label?: string;
    key?: string | number;
    icon?: string;
    // children?: subMenuInterface[];
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
export const Menu: React.FunctionComponent<MenuItemProps> = ({ menuData, onClick }) => {
    const [subItem, setSubItem] = useState<boolean>(false);
    const [currmenu, setCurrMenu] = useState<string | number>();
    const [currSubMenu, setCurrSubMenu] = useState<string | number>();
    const [subMenu, setSubMenu] = useState<string | number>();

    const handleSubItem = (key: number | string) => {
        setSubItem(!subItem);
        setCurrMenu(key);
        setCurrSubMenu('');
    };
    const handleSubItemClick = (key: number | string) => {
        setSubMenu(key === subMenu ? '' : key);
    };
    return (
        <BrowserRouter>
            <div className="menuContainer">
                {menuData.map((menuItem, index) => (
                    <>
                        <NavLink to={menuItem.href} key={menuItem.key} className="menuLink">
                            <div className="MenuType">
                                {menuItem?.type !== 'divider' && <div className="menuItem_group_title">{menuItem.type}</div>}
                                <div
                                    className="menuLinkContainer"
                                    onClick={() => {
                                        handleSubItem(menuItem.key);
                                    }}
                                >
                                    <div className="menuImage">{menuItem.icon}</div>
                                    <div className="menuTitle">
                                        <span className="menusText">{menuItem.label}</span>
                                        {menuItem.children && menuItem.children?.length > 0 && (
                                            <div className={`menuDropDownIcon ${subItem && currmenu === menuItem.key ? 'rotateNintee' : ''}`}>{<RightArrow />}</div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </NavLink>
                        {currmenu === menuItem.key &&
                            menuItem.children &&
                            currmenu &&
                            menuItem?.children.map((mapChild) => {
                                return (
                                    <>
                                        <NavLink to={mapChild.href} key={mapChild.key} className="menuLink">
                                            <div className="menuChild" key={mapChild.key} style={{ display: subItem ? 'block' : 'none' }}>
                                                {mapChild.label}
                                            </div>
                                        </NavLink>
                                    </>
                                );
                            })}
                        {menuItem?.type === 'divider' && <div className="menuItem_group_divider"></div>}
                    </>
                ))}
            </div>
        </BrowserRouter>
    );
};
