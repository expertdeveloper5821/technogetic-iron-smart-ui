import React from 'react';
import { useStore } from '../../store/zustand';
import nextarrow from '../../assets/icons/nextarrow.svg';
import previousarrow from '../../assets/icons/previousarrow.svg';

type SncdHeadermobileProps = {
  handleSidebarToggle: () => void;
};

const SncdHeadermobile = ({ handleSidebarToggle }: SncdHeadermobileProps) => {
  const { steps, currentStep, setCurrentStepMinus } = useStore();

  return (
    <div
      className={`${
        currentStep !== 0 ? 'block shadow-xl border-2 border-gray p-2' : 'hidden'
      } sm:hidden`}>
      <span className="flex px-4">
        {currentStep !== 1 ? (
          <img
            src={previousarrow}
            alt="previous_arrow"
            className="bg-sky p-3 rounded-lg"
            onClick={() => setCurrentStepMinus()}
          />
        ) : (
          ''
        )}
        <span className="w-[100%] flex justify-center">
          {steps.map((val, index) => {
            return (
              <span key={index}>
                {currentStep - 1 === index ? (
                  <span className="flex">
                    <span className="mbl_snd_head_step mr-2">{index + 1}</span>
                    <span>
                      <div className="text-[18px] text-sky font-[500]">{val}</div>
                      <div className="text-[15px] text-orange">In-Progress</div>
                    </span>
                  </span>
                ) : (
                  ''
                )}
              </span>
            );
          })}
        </span>
        <img
          src={nextarrow}
          alt="next_arrow"
          className="bg-sky p-3 rounded-lg"
          onClick={handleSidebarToggle}
        />
      </span>
    </div>
  );
};

export default SncdHeadermobile;
