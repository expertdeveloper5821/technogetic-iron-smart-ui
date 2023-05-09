import React, { useState } from 'react';
import './Nav.css';
import { HorizontalLine } from '../../assets/HorizontalLine';
import { Setting } from '../../assets/Setting';
import { Bell } from '../../assets/Bell';
import { Avatar } from '../../assets/Avatar';
import { NavDown } from '../../assets/NavDown';
import { SettingSmallIcon } from '../../assets/SettingSmallIcon';
import { BellSmallIcon } from '../../assets/BellSmallIcon';
import { UserSmallIcon } from '../../assets/UserSmallIcon';
import { LogoutSmallIcon } from '../../assets/LogoutSmallIcon';
import { CloseIcon } from '../../assets/CloseIcon';

export interface NavProps {
    userData?: {
        userName?: string;
        designation?: string;
        email?: string;
        avatar?: string;
        notificationCount?: number;
    };
    onClick?: (event: React.MouseEvent<HTMLDivElement>, clicktype: string) => void;
}

export const Nav: React.FunctionComponent<NavProps> = ({ userData, onClick }) => {
    const [userDetail, setUserDetail] = useState<boolean>(false);
    const [notification, setNotification] = useState<boolean>(false);
    const detailsToggle = () => {
        setUserDetail(!userDetail);
    };
    const notificationToggle = () => {
        setNotification(!notification);
    };

    return (
        <nav className="navContainer">
            <div
                className="navLeftSide"
                onClick={(event: React.MouseEvent<HTMLDivElement>) => {
                    onClick(event, 'Toggle_Button');
                }}
            >
                <HorizontalLine />
            </div>
            <div className="navRightSide">
                <div
                    className="settinIcon"
                    onClick={(event: React.MouseEvent<HTMLDivElement>) => {
                        onClick(event, 'Setting');
                    }}
                >
                    <Setting />
                </div>
                <div
                    className="bellIcon"
                    onClick={(event: React.MouseEvent<HTMLDivElement>) => {
                        onClick(event, 'notification');
                    }}
                >
                    <Bell />
                    {userData?.notificationCount && <div className="counter">{userData?.notificationCount}</div>}
                </div>

                {userData?.avatar && (
                    <>
                        <div className="avatarIcon">
                            <img src={userData?.avatar} alt={`Avatar of ${userData?.userName}`} width="57px" />
                        </div>

                        <div
                            className="navDownArrow"
                            onClick={(event: React.MouseEvent<HTMLDivElement>) => {
                                onClick(event, 'User_Details');
                            }}
                        >
                            <NavDown />
                        </div>
                    </>
                )}
                {userData?.userName && userData?.designation && (
                    <div className="userDetail">
                        <p className="userName">{userData.userName}</p>
                        <p className="userDesig">{userData.designation}</p>
                    </div>
                )}
            </div>
        </nav>
    );
};
