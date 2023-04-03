import React from 'react';
import WelcomeIcon from '../assets/icons/welcomeIcon.png';
import { useStore } from '../store/zustand';
import ButtonGlobal from './Common/ButtonGlobal';
import '../assets/Styles/style.css';

type WelcomeProps = {
    steps: string[];
    stepsStatus: any;
    setStepsStatus: React.Dispatch<React.SetStateAction<any>>;
};
const Welcome = ({ steps, stepsStatus, setStepsStatus }: WelcomeProps) => {
    const { currentStep, setCompleted, setCurrentStepPlus } = useStore();
    return (
        <div className="welcome">
            <div className="items-center text-center text-black">
                <img src={String(WelcomeIcon)} alt="welcome icon" className="welcome_img" />
                <b className="text-[24px]">Welcome!</b>
                <p className="sm:font-normal text-[18px] pt-2 pl-4 pr-4">
                    <span className="sm:block">Happy to see you here. Lets start your onboarding journey.</span>
                    <span className="sm:block"> We ensure, you&apos;ll be assisted at every step.</span>
                </p>
                <ButtonGlobal
                    className="welcome_btn"
                    onClick={() => {
                        currentStep === steps.length + 1 ? setCompleted(true) : (setCurrentStepPlus(), setStepsStatus([...stepsStatus, { progress: 'In Progress', step: currentStep + 1 }]));
                    }}
                >
                    {currentStep === steps.length + 1 ? 'Done' : 'Start Onboarding'}
                </ButtonGlobal>
            </div>
        </div>
    );
};

export default Welcome;
