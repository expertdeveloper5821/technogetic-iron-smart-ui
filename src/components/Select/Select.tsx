import React, { ChangeEvent, InputHTMLAttributes, Ref, useEffect, useRef, useState } from 'react';
import { Icon } from '../../assets/DropdownIcon';
import { CloseIcon } from '../../assets/CloseIcon';
import './Select.css';

export interface SelectProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    onChange?: any;
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
    const [searchValue, setSearchValue] = useState<string>('');
    const searchRef = useRef<HTMLInputElement>();
    const inputRef = useRef<any>();
    const [selectedValue, setSelectedValue] = useState<any>(isMulti ? [] : null);

    useEffect(() => {
        const handler = (e: { target: any }) => {
            if (inputRef.current && !inputRef.current.contains(e.target)) {
                setShowMenu(false);
            }
        };
        window.addEventListener('click', handler);
        return () => {
            window.removeEventListener('click', handler);
        };
    });

    useEffect(() => {
        setSearchValue('');
        if (showMenu && searchRef.current) {
            searchRef.current.focus();
        }
    }, [showMenu]);

    // Here OnSearch function is used to track the latest value of the search
    const onSearch = (e: { target: HTMLInputElement }) => {
        setSearchValue(e.target.value);
    };

    // Here getOptions is used to configure the options passed through props
    const getOptions = () => {
        if (!searchValue) {
            return options;
        }
        return options.filter((option: any) => option.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0);
    };

    const handleInputClick = () => {
        setShowMenu(!showMenu);
    };

    // Here getDisplay is used to check if we have to show placeholder or not
    const getDisplay = () => {
        if (!selectedValue || selectedValue.length === 0) {
            console.log('inside if', selectedValue);
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
        return selectedValue.filter((item: itemType) => item !== option);
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
            if (selectedValue.findIndex((item: itemType) => item === option) >= 0) {
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
            return selectedValue.filter((item: itemType) => item === option).length > 0;
        }
        if (!selectedValue) {
            return false;
        }
        return selectedValue === option;
    };

    return (
        <>
            <div className="dropdown-container">
                <div ref={inputRef} className="dropdown-input" onClick={handleInputClick}>
                    <div className="dropdown-selected-value">{getDisplay()}</div>
                    <div className="dropdown-tools">
                        <div className="dropdown-tool">
                            <Icon />
                        </div>
                    </div>
                    {showMenu && (
                        <div className="dropdown-menu">
                            {isSearchable && (
                                <div className="search-box">
                                    <input onChange={onSearch} value={searchValue} ref={searchRef} />
                                </div>
                            )}
                            {options ? (
                                getOptions().map((option: any) => (
                                    <div onClick={() => onItemClick(option)} key={option} className={`dropdown-item ${isSelected(option) && 'selected'}`}>
                                        {option}
                                    </div>
                                ))
                            ) : (
                                <div>Please add options</div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};
