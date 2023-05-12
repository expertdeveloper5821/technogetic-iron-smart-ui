import React, { CSSProperties, useState } from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';
import { RightArrow } from '../../assets/RightArrow';
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
    bg?: string;
    color?: string;
    style?: CSSProperties;
}
export const Menu: React.FunctionComponent<MenuItemProps> = ({ style, menuData, bg, color, onClick }) => {
    const [subItem, setSubItem] = useState<boolean>(false);
    const [currmenu, setCurrMenu] = useState<string | number>();
    const [currSubMenu, setCurrSubMenu] = useState<string | number>();

    const menuStyles: CSSProperties = {
        color: color,
        backgroundColor: bg,
        ...style
    };

    const handleSubItem = (key: number | string) => {
        setSubItem(!subItem);
        setCurrMenu(key);
        setCurrSubMenu('');
    };

    return (
        <BrowserRouter>
            <div className="menuContainer" style={menuStyles}>
                {menuData.map((menuItem, index) => (
                    <React.Fragment key={index}>
                        <NavLink to={menuItem.href} className="menuLink">
                            <div className="MenuType">
                                {menuItem?.type !== 'divider' && <div className="menuItem_group_title">{menuItem.type}</div>}
                                <div
                                    className="menuLinkContainer"
                                    onClick={() => {
                                        handleSubItem(menuItem.key);
                                    }}
                                    style={menuStyles}
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
                        {currmenu === menuItem.key && menuItem.children && currmenu && subItem && (
                            <>
                                {menuItem.children.map((mapChild) => (
                                    <NavLink to={mapChild.href} key={mapChild.key} className="menuLink">
                                        <div className="menuChild" key={mapChild.key} style={{ display: subItem ? 'block' : 'none', color: `${color}` }}>
                                            {mapChild.label}
                                        </div>
                                    </NavLink>
                                ))}
                            </>
                        )}

                        {menuItem?.type === 'divider' && <div className="menuItem_group_divider" key={index}></div>}
                    </React.Fragment>
                ))}
            </div>
        </BrowserRouter>
    );
};
