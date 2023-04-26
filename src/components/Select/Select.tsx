import React, { useRef } from 'react';
import { Icon } from '../../assets/DropdownIcon';
import { UpIcon } from '../../assets/DropUpIcon';
import { CloseIcon } from '../../assets/CloseIcon';
import './Select.css';

export interface SelectProps extends React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
    placeholder?: string;
    disabled?: boolean;
    position?: string;
    name?: string;
    options: (string | number)[];
    onChange?: (event: React.ChangeEvent<HTMLSelectElement> & { selectedValue: string }) => void;
}

export const Select: React.FC<SelectProps> = ({ options, placeholder, disabled, name, onChange }) => {
    const selectIconRef = useRef<HTMLDivElement>(null);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;
        onChange?.({ ...event, selectedValue });
    };

    const handleToggleOptions = () => {
        if (selectIconRef.current) {
            selectIconRef.current.classList.toggle('rotate');
        }
    };
    const handleBlur = () => {
        if (selectIconRef.current) {
            selectIconRef.current.style.transform = 'rotate(0deg)';
            selectIconRef.current.classList.remove('rotate');
        }
    };

    return (
        <div className="selectContainer">
            <select className="selectInput" onChange={handleChange} onClick={handleToggleOptions}>
                {placeholder && (
                    <option className="selectOption" value="" disabled selected hidden>
                        {placeholder}
                    </option>
                )}
                {options?.map((selectdata, selectIndex) => {
                    return (
                        <option className="selectOption" key={selectIndex} value={selectdata}>
                            {selectdata}
                        </option>
                    );
                })}
            </select>
            <div className="selectIcon" ref={selectIconRef}>
                <Icon />
            </div>
        </div>
    );
};
