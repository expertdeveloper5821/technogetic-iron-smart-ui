import React from 'react';
import CompleteMark from '../../assets/icons/completemark.svg';
import ButtonGlobal from './ButtonGlobal';
import { useStore } from '../../store/zustand';

type StepperProps = {
  steps: string[];
  stepsStatus: any;
};
const Sidebar = ({ steps, stepsStatus }: StepperProps) => {
  const { currentStep, completed, setCurrentStepInput } = useStore();
  let skippedStep: any;
  stepsStatus.map((val: any) => {
    skippedStep = val.step;
    return val;
  });

  return (
    <div className="w-[75%] sm:w-full sm:rounded-2xl bg-white">
      <div className="sidebar">
        <div className="flex-col">
          <div className="mb-2 text-base text-white">ONBOARDING PROGRESS</div>
          <div className="sidebar_step_circl">
            <div
              className={`bg-green h-[12px] sm:h-2.5 rounded-full ${
                currentStep === 2
                  ? 'w-[14%]'
                  : currentStep === 3
                  ? 'w-[28%]'
                  : currentStep === 4
                  ? 'w-[42%]'
                  : currentStep === 5
                  ? 'w-[56%]'
                  : currentStep === 6
                  ? 'w-[70%]'
                  : currentStep === 7
                  ? 'w-[84%]'
                  : currentStep === 8
                  ? 'w-[100]'
                  : 'w-[0]'
              }`}></div>
            <div className="sidebar_step_indictr">
              {currentStep > 1 ? currentStep - 1 : 0} Steps Completed
            </div>
          </div>
        </div>
      </div>
      <div className="sidebar_step_name">
        {steps?.map((step: any, i: any) => {
          return (
            <span
              key={i}
              className={`step-item ${currentStep === i + 1 && 'active'} ${
                (i + 1 < currentStep || completed) && 'complete'
              }`}>
              <ButtonGlobal
                onClick={() => {
                  setCurrentStepInput(i + 1);
                }}>
                <span className="flex pb-5 items-center">
                  <span className="step">
                    {currentStep === i + 1 || currentStep < i + 1 || skippedStep < i ? (
                      i + 1
                    ) : (
                      <img src={CompleteMark} alt="complete mark" className="w-[15px] h-[11px]" />
                    )}
                  </span>
                  <span>
                    <p className="sidebar_step_num">{step}</p>
                    {stepsStatus.map((val: any, index: any) => {
                      return (
                        <span key={index}>
                          {val.step === i + 1 ? (
                            val.progress === 'Skipped' ? (
                              <div className="stepStatus text-red bg-white border-red border-2">
                                {val.progress}
                              </div>
                            ) : (
                              ''
                            )
                          ) : (
                            ''
                          )}
                        </span>
                      );
                    })}
                    {currentStep === i + 1 ? (
                      <div className="stepStatus text-white bg-orange">In Progress</div>
                    ) : (
                      ''
                    )}
                  </span>
                </span>
              </ButtonGlobal>
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
