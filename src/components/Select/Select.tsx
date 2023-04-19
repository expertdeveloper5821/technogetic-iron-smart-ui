import React, { ChangeEvent, InputHTMLAttributes, Ref, useEffect, useReducer, useRef } from 'react';
import { Icon } from '../../assets/DropdownIcon';
import { UpIcon } from '../../assets/DropUpIcon';
import { CloseIcon } from '../../assets/CloseIcon';
import './Select.css';

interface State {
    showMenu: boolean;
    searchValue: string;
    selectedValue: any;
}

interface Action {
    type: string;
    payload: any;
}

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

const initialState: State = {
    showMenu: false,
    searchValue: '',
    selectedValue: []
};

const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'SET_SHOW_MENU':
            return {
                ...state,
                showMenu: action.payload
            };
        case 'SET_SEARCH_VALUE':
            return {
                ...state,
                searchValue: action.payload
            };
        case 'SET_SELECTED_VALUE':
            return {
                ...state,
                selectedValue: action.payload
            };
        default:
            return state;
    }
};

export const Select: React.FunctionComponent<SelectProps> = ({ isMulti, options, placeholder, isSearchable, onChange }) => {
    // const searchRef = useRef<HTMLInputElement>();
    const inputRef = useRef<any>();
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(inputRef);

    useEffect(() => {
        const handler = (e: { target: any }) => {
            if (inputRef?.current && !inputRef?.current?.contains(e.target)) {
                dispatch({ type: 'SET_SHOW_MENU', payload: false });
            }
        };
        window.addEventListener('click', handler);
        return () => {
            window.removeEventListener('click', handler);
        };
    }, []);

    // useEffect(() => {
    //     dispatch({ type: 'SET_SEARCH_VALUE', payload: '' });
    //     if (state.showMenu && searchRef?.current) {
    //         searchRef?.current.focus();
    //     }
    // }, [state.showMenu]);

    // Here OnSearch function is used to track the latest value of the search
    const onSearch = (e: { target: HTMLInputElement }) => {
        dispatch({ type: 'SET_SEARCH_VALUE', payload: e.target.value });
    };

    // Here getOptions is used to configure the options passed through props
    const getOptions = () => {
        if (!state.searchValue) {
            return options;
        }
        return options.filter((option: any) => option.toLowerCase().indexOf(state.searchValue.toLowerCase()) >= 0);
    };

    const handleInputClick = () => {
        dispatch({ type: 'SET_SHOW_MENU', payload: !state.showMenu });
    };

    // Here getDisplay is used to check if we have to show placeholder or not
    const getDisplay = () => {
        if (!state.selectedValue || state.selectedValue.length === 0) {
            return placeholder;
        }

        return state.selectedValue;
    };

    const removeOption = (option: optionType) => {
        return state.selectedValue.filter((item: itemType) => item !== option);
    };

    const onTagRemove = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>, option: optionType) => {
        e.stopPropagation();
        const newValue = removeOption(option);
        dispatch({ type: 'SET_SELECTED_VALUE', payload: newValue });
    };

    const onItemClick = (option: optionType) => {
        let newValue;
        newValue = option;
        dispatch({ type: 'SET_SELECTED_VALUE', payload: newValue });
        console.log('Selected value:', newValue);
    };

    const isSelected = (option: optionType) => {
        if (!state.selectedValue) {
            return false;
        }
        return state.selectedValue === option;
    };

    return (
        <>
            <div className="dropdown-container">
                <div ref={inputRef} className="dropdown-input" onClick={handleInputClick}>
                    <div className="dropdown-selected-value">{getDisplay()}</div>
                    <div className="dropdown-tools">
                        <div className="dropdown-tool">{state.showMenu ? <UpIcon /> : <Icon />}</div>
                    </div>
                    {state.showMenu && (
                        <div className="dropdown-menu">
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
