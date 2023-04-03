import React, { useState } from 'react';
import Sidebar from './Common/Sidebar';
import SupersetComponent from './SupersetComponent';
import Welcome from './Welcome';
import PanVerification from './PanVerification';
import AdharVerifiction from './AdharVerifiction';
import PanAdharMatch from './PanAdharMatch';
import Business from './Business';
import VideoKYC from './VideoKYC';
import OnboardingStatus from './OnboardingStatus';
import LoctionCapture from './LoctionCapture';
import { useStore } from '../store/zustand';
import Alert from './Common/Alert';
import Fetching from './Common/Fetching';

type HomepageProps = {
  sideBarToggle: boolean;
  setSideBarToggle: React.Dispatch<React.SetStateAction<boolean>>;
};

const HomePage = ({ sideBarToggle, setSideBarToggle }: HomepageProps) => {
  const { currentStep, panStatus, fetchData, finish, steps } = useStore();
  const [capturelocationData, setCapturelocationData] = useState<any | null>();
  const [stepsStatus, setStepsStatus] = useState<any>([]);

  return (
    <>
      <div
        className={`${currentStep === 1 && 'pt-0'} ${
          currentStep === 0 && 'pt-7'
        } h-screens sm:pt-7 px-7 w-full sm:px-24`}>
        <div className="flex items-center">
          <div className="containerboxover relative">
            <div className="sm:flex sm:justify-between">
              <span className="hidden sm:block md:block lg:block xl:block">
                <Sidebar steps={steps} stepsStatus={stepsStatus} />
              </span>
              <div className="flex w-full rounded-2xl sm:ml-8 sm:bg-white relative">
                {currentStep === 0 ? (
                  <Welcome
                    steps={steps}
                    stepsStatus={stepsStatus}
                    setStepsStatus={setStepsStatus}
                  />
                ) : currentStep === 1 ? (
                  <SupersetComponent
                    steps={steps}
                    btnName="Start Location Capture"
                    pagename="Location Capturing"
                    capturelocationData={capturelocationData}
                    setCapturelocationData={setCapturelocationData}
                    stepsStatus={stepsStatus}
                    setStepsStatus={setStepsStatus}>
                    <LoctionCapture />
                  </SupersetComponent>
                ) : currentStep === 2 ? (
                  <SupersetComponent
                    steps={steps}
                    btnName="Verify PAN"
                    pagename="PAN Verification"
                    tagLine="Upload your PAN copy to verify your business. Accepted format are "
                    stepsStatus={stepsStatus}
                    setStepsStatus={setStepsStatus}>
                    <PanVerification />
                  </SupersetComponent>
                ) : currentStep === 3 ? (
                  <SupersetComponent
                    steps={steps}
                    btnName="Verify Aadhaar"
                    pagename="Aadhaar Verification"
                    tagLine="Upload your Aadhar Copy front and back to verify yourself. Accepted format are "
                    stepsStatus={stepsStatus}
                    setStepsStatus={setStepsStatus}>
                    <AdharVerifiction />
                  </SupersetComponent>
                ) : currentStep === 4 ? (
                  <SupersetComponent
                    steps={steps}
                    btnName={`${
                      panStatus === 0 ? 'Start Matching' : panStatus === 1 ? 'Next' : 'Retry'
                    }`}
                    pagename="PAN - Aadhaar Matching"
                    stepsStatus={stepsStatus}
                    setStepsStatus={setStepsStatus}>
                    <PanAdharMatch />
                  </SupersetComponent>
                ) : currentStep === 5 ? (
                  <SupersetComponent
                    steps={steps}
                    btnName="Next"
                    pagename="Business Details"
                    tagLine="Upload your PAN copy to verify your business. Accepted format are "
                    stepsStatus={stepsStatus}
                    setStepsStatus={setStepsStatus}>
                    <Business />
                  </SupersetComponent>
                ) : currentStep === 6 ? (
                  <SupersetComponent
                    steps={steps}
                    btnName="Next"
                    pagename="Video KYC"
                    tagLine="Thanks for completing your personal and address verification. Take a selfie of 5-10 seconds
              to complete the eKYC process."
                    stepsStatus={stepsStatus}
                    setStepsStatus={setStepsStatus}>
                    <VideoKYC />
                  </SupersetComponent>
                ) : (
                  <SupersetComponent
                    steps={steps}
                    btnName="Submit"
                    pagename="Onboarding Status"
                    tagLine="Below are the details of the completion status of your onboarding."
                    stepsStatus={stepsStatus}
                    setStepsStatus={setStepsStatus}>
                    <OnboardingStatus />
                  </SupersetComponent>
                )}
                {fetchData === true ? (
                  <span className="hidden sm:block">
                    <Fetching />
                  </span>
                ) : (
                  ''
                )}
              </div>
            </div>

            {finish === true ? (
              <span className="hidden sm:block">
                <Alert />
              </span>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
      {fetchData === true ? (
        <span className="block sm:hidden">
          <Fetching />
        </span>
      ) : (
        ''
      )}
      {finish === true ? (
        <span className="block sm:hidden">
          <Alert />
        </span>
      ) : (
        ''
      )}
      <span className="sm:hidden block">
        {sideBarToggle ? (
          <div className="mbl_sidebar">
            <Sidebar steps={steps} stepsStatus={stepsStatus} />
            <div className="w-[25%]" onClick={() => setSideBarToggle((prev) => !prev)}></div>
          </div>
        ) : (
          ''
        )}
      </span>
    </>
  );
};

export default HomePage;
