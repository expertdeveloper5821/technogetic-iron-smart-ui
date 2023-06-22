import React, { useState, useEffect, useRef } from 'react';
import { SelectProps } from '../../interfaces/CommonInterface';
import { DownIcon } from '../../assets/DownIcon';
import { MenuItem } from '../MenuItem';
import '../../commonstyle/commonstyle.css';
import './Select.css';

export const Select: React.FC<SelectProps> = ({ placeholder = 'select...', onChange, padding, containerWidth, optionWidth, option, ...props }) => {
    const [openSelect, setOpenSelect] = useState<boolean>(false);
    const [selectedValue, setSelectedValue] = useState<string | number>('');
    const selectRef = useRef<HTMLDivElement>(null);

    const handleSelectOpen = () => {
        setOpenSelect(!openSelect);
    };
    const handleClickOutside = (event: MouseEvent) => {
        if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
            setOpenSelect(false);
        }
    };
    useEffect(() => {
        window.addEventListener('click', handleClickOutside);
        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, []);
    const handleSelectClick = (value: string | number) => {
        setSelectedValue(value);
        setOpenSelect(false);
        if (onChange) {
            onChange(value);
        }
    };
    const containerStyle = {
        padding: padding || '',
        width: containerWidth
    };

    const optionStyle = {
        width: optionWidth
    };

    return (
        <>
            <div {...props} className="selectContainer" style={containerStyle} onClick={handleSelectOpen} ref={selectRef}>
                {selectedValue ? selectedValue : placeholder}
                <span className={`selctDownIcon ${openSelect ? 'rotateOneEighty' : ''}`}>
                    <DownIcon />
                </span>
            </div>
            {openSelect && option && (
                <div className="selectItems select" style={optionStyle}>
                    {option.map((selectData) => {
                        return (
                            <MenuItem disableGutters={true} onClick={() => handleSelectClick(selectData)} key={selectData}>
                                {selectData}
                            </MenuItem>
                        );
                    })}
                </div>
            )}
        </>
    );
};
