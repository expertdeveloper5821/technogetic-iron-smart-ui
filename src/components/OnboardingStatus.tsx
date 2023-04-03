import React from 'react';
import thumb from '../assets/icons/thumb.svg';
import retry from '../assets/icons/retry.png';
import ButtonGlobal from './Common/ButtonGlobal';

const OnboardingStatus = () => {
  return (
    <>
      <div className="flex mt-8">
        <span className="w-[20%] sm:w-fit">
          <span className="onbord_thump_icn">
            <img src={thumb} alt="thump up icon" className="w-[35px] h-[35px] sm:w-7 sm:h-7" />
          </span>
        </span>
        <span className="flex flex-col ml-5">
          <span className="text-lg font-semibold text-green">64% Completed</span>
          <div className="mt-1 text-md">4 Steps completed, 1 step skipped, 1 step disqualified</div>
          <span className="hidden sm:flex mt-8 items-center justify-between w-[80%]">
            <span className="flex-col">
              <div className="text-sm text-extrdarkgray">Skipped</div>
              <div className="text-md text-black font-bold">Aadhaar Verification</div>
            </span>
            <ButtonGlobal className="onbord_rty_btn">
              <>
                <img src={retry} alt="retry_icon" className="w-4 h-4 mr-2" /> Retry
              </>
            </ButtonGlobal>
          </span>
          <span className="onbord_disqual_spn">
            <span className="flex-col">
              <span className="text-sm text-extrdarkgray">Disqualified</span>
              <div className="text-md text-black font-bold">Video KYC</div>
            </span>
            <div className="onbord_attmp_msg">No Attempts Left</div>
          </span>
        </span>
      </div>
      <div className="sm:hidden border-2 border-gray rounded-2xl mt-6">
        <span className="onbord_disqual_spn_mbl">
          <span className="flex-col">
            <div className="text-md text-extrdarkgray">Skipped</div>
            <div className="text-md text-black font-bold">Aadhaar Verification</div>
          </span>
          <ButtonGlobal className="onbord_rty_btn_mbl">
            <>
              <img src={retry} alt="retry_icon" className="w-4 h-4 mr-2" /> Retry
            </>
          </ButtonGlobal>
        </span>
        <span className="sm:hidden flex p-5 items-center justify-between w-[100%]">
          <span className="flex-col">
            <span className="text-md text-extrdarkgray">Disqualified</span>
            <div className="text-md text-black font-bold">Video KYC</div>
          </span>
          <div className="onbord_attmp_msg_mbl">No Attempts Left</div>
        </span>
      </div>
    </>
  );
};

export default OnboardingStatus;
