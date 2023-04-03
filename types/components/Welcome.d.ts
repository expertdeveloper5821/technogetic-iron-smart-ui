import React from 'react';
import '../assets/Styles/style.css';
type WelcomeProps = {
    steps: string[];
    stepsStatus: any;
    setStepsStatus: React.Dispatch<React.SetStateAction<any>>;
};
declare const Welcome: ({ steps, stepsStatus, setStepsStatus }: WelcomeProps) => JSX.Element;
export default Welcome;
