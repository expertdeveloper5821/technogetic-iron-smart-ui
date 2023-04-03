import React from 'react';
type HomepageProps = {
    sideBarToggle: boolean;
    setSideBarToggle: React.Dispatch<React.SetStateAction<boolean>>;
};
declare const HomePage: ({ sideBarToggle, setSideBarToggle }: HomepageProps) => JSX.Element;
export default HomePage;
