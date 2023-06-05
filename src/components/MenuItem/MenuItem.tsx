import React from 'react';
import { MenuItemProps } from '../../interfaces/CommonInterface';
import '../../commonstyle/commonstyle.css';
import './MenuItem.css';

export const MenuItem: React.FC<MenuItemProps> = ({ autofocus = false, children = 'Menu Item', className, disableGutters = false, onClick, value = children }) => {
    const handleClick = () => {
        if (onClick) {
            onClick(value);
        }
    };
    return (
        <span className={`${className ? className : 'menuItem-label'} ${autofocus ? 'selected' : 'notSelected'} ${disableGutters ? 'removeGutters' : 'addGutters'}`} onClick={handleClick} key={value}>
            {children}
        </span>
    );
};
