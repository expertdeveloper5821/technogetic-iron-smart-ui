import React, { useState } from 'react';
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

export const NavBar: React.FunctionComponent<NavbarProps> = ({ navbarData }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [resOpen, setResOpen] = useState(true);
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

    const dropNav = () => {
        setResOpen(!resOpen);
    };

    return (
        <div className="dropdown">
            <div className="navbar">
                <div className="navTitle">
                    {navbarData.map((data, index: any) => {
                        return (
                            <>
                                {data.image ? (
                                    <>
                                        <img
                                            src={data.image}
                                            alt={data.link}
                                            className="logoSize"
                                            onClick={() => {
                                                handleItemClick(data.id);
                                            }}
                                        />
                                        <div
                                            className="title"
                                            onClick={() => {
                                                handleItemClick(data.id);
                                            }}
                                        >
                                            {data.name}
                                        </div>
                                    </>
                                ) : (
                                    ''
                                )}
                            </>
                        );
                    })}
                </div>
                <div className="allLinks">
                    {navbarData.map((data, index: any) => {
                        return (
                            <>
                                {data.title ? (
                                    <div className={`repNavLink  ${!resOpen ? 'resNavBar' : ''}`}>
                                        <div
                                            className={`navbarItem ${curr === data.id ? 'active' : ''}`}
                                            onClick={() => {
                                                handleItemClick(data.id);
                                            }}
                                        >
                                            {data.title}
                                        </div>

                                        <div className={`dropdown-content repNavLink  ${!resOpen ? 'resNavBar' : ''}`}>
                                            {curr === data.id &&
                                                data.items &&
                                                isOpen &&
                                                data?.items.map((itemval: any) => {
                                                    return (
                                                        <>
                                                            <a
                                                                href={itemval.link}
                                                                onClick={() => {
                                                                    handleSubItemClick(itemval.id);
                                                                }}
                                                                className={`navbarSubItems ${currSubItem === itemval.id ? 'active' : ''}`}
                                                            >
                                                                {itemval.title}
                                                            </a>
                                                        </>
                                                    );
                                                })}
                                        </div>
                                    </div>
                                ) : (
                                    ''
                                )}
                                <div className="btnContainer">
                                    {data.button &&
                                        data.button.map((btns: any) => {
                                            return (
                                                <>
                                                    <div className={`btnItems repNavLink  ${!resOpen ? 'resNavBar' : ''}`}>
                                                        <button
                                                            onClick={() => {
                                                                handleItemClick(data.id);
                                                            }}
                                                        >
                                                            {btns.title}
                                                        </button>
                                                    </div>
                                                </>
                                            );
                                        })}
                                </div>
                            </>
                        );
                    })}
                    {navbarData.map((data, index: any) => {
                        return (
                            <>
                                <div className="btnContainer"></div>
                            </>
                        );
                    })}
                </div>
            </div>

            <input type="checkbox" id="checkbox_toggle" />
            <label for="checkbox_toggle" className="hamburger" onClick={dropNav}>
                &#9776;
            </label>
        </div>
    );
};
