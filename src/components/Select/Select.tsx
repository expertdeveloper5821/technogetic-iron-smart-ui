import React, { useState } from 'react';
import { Icon } from '../../assets/DropdownIcon';
import { UpIcon } from '../../assets/DropUpIcon';
import { CloseIcon } from '../../assets/CloseIcon';
import './Select.css';

export interface SelectProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    disabled?: boolean;
    position?: string;
    name?: string;
    options?: optionType[];
    isMulti?: boolean;
    isSearchable?: boolean;
}

export interface optionType {
    value: string;
    label: string;
}

export interface eType {
    target: { value: React.SetStateAction<string> };
}

export interface itemType {
    value: string;
}

export const Select: React.FunctionComponent<SelectProps> = ({ isMulti, options, placeholder, isSearchable, onChange }) => {
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const [selectedValue, setSelectedValue] = useState<any>(isMulti ? [] : '');

    const handleInputClick = () => {
        setShowMenu(!showMenu);
    };

    const getDisplay = () => {
        if (!selectedValue || selectedValue?.length === 0) {
            return placeholder;
        }
        if (isMulti) {
            return (
                <div className="dropdown-tags">
                    {selectedValue.map((option: any) => (
                        <div key={option} className="dropdown-tag-item">
                            {option}
                            <span onClick={(e) => onTagRemove(e, option)} className="dropdown-tag-close">
                                <CloseIcon />
                            </span>
                        </div>
                    ))}
                </div>
            );
        }
        return selectedValue;
    };

    const removeOption = (option: optionType) => {
        return selectedValue?.filter((item: itemType) => item !== option);
    };
    const onTagRemove = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>, option: optionType) => {
        e.stopPropagation();
        const newValue = removeOption(option);
        setSelectedValue(newValue);
        onChange(newValue);
    };

    const onItemClick = (option: optionType) => {
        let newValue;
        if (isMulti) {
            if (selectedValue?.findIndex((item: itemType) => item === option) >= 0) {
                newValue = removeOption(option);
            } else {
                newValue = [...selectedValue, option];
            }
        } else {
            newValue = option;
        }
        setSelectedValue(newValue);
        onChange(newValue);
    };

    const isSelected = (option: optionType) => {
        if (isMulti) {
            return selectedValue?.filter((item: itemType) => item === option).length > 0;
        }
        if (!selectedValue) {
            return false;
        }
        return selectedValue === option;
    };

    return (
        <>
            <div className="dropdown-container">
                <div className="dropdown-input" onClick={handleInputClick}>
                    <div className="dropdown-selected-value">{getDisplay()}</div>
                    <div className="dropdown-tools">
                        <div className="dropdown-tool">{showMenu ? <UpIcon /> : <Icon />}</div>
                    </div>
                    {showMenu && (
                        <div className="dropdown-menu">
                            {options ? (
                                options.map((option: any) => (
                                    <div onClick={() => onItemClick(option)} key={option} className={`dropdown-item ${isSelected(option) && 'selected'}`}>
                                        {option}
                                    </div>
                                ))
                            ) : (
                                <div className="dropdown-menu">...Please add options</div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};
