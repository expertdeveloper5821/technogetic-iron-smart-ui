import React, { useState } from 'react';
import '../../assets/Styles/style.css';
import Header from '../Common/Header';
import SncdHeadermobile from '../Common/SncdHeadermobile';
import HomePage from '../HomePage';
import { useStore } from '../../store/zustand';
import '../../index.css';

export const Home = () => {
    const { currentStep } = useStore();
    const [sideBarToggle, setSideBarToggle] = useState<boolean>(false);
    const handleSidebarToggle = () => {
        setSideBarToggle((prev) => !prev);
    };
    return (
        <>
            <div className={`${currentStep === 0 ? 'bg-gray' : 'bg-white'} sm:bg-gray w-full min-h-screen`}>
                <Header />
                <SncdHeadermobile handleSidebarToggle={handleSidebarToggle} />
                <HomePage sideBarToggle={sideBarToggle} setSideBarToggle={setSideBarToggle} />
            </div>
        </>
    );
};
