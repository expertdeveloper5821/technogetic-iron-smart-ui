import React, { useEffect } from 'react';
import camera from '../assets/icons/camera.svg';
import filledcamera from '../assets/icons/filledcamera.svg';
import ButtonGlobal from './Common/ButtonGlobal';
import Camera from './Common/Camera';
import { useStore } from '../store/zustand';
import Browse from './Common/Browse';
import Uploadfile from './Common/Uploadfile';

const PanVerification = () => {
  const { cameraStatus, uploadedImage, setCameraStatus } = useStore();

  useEffect(() => {
    setCameraStatus(false);
  }, []);
  return (
    <div className="mt-8">
      <div className="relative sm:hidden block" onClick={() => setCameraStatus(true)}>
        {uploadedImage === 0 ? (
          cameraStatus === true ? (
            <Camera type="Pan" />
          ) : (
            <>
              <div className="documentimgstyle w-[100%] h-[180px]">
                <img src={camera} className="w-[3rem] h-[3rem] flex-col mb-6" />
                Upload PAN copy by clicking here
              </div>
              <div className="flex justify-center">
                <div className="side_arrow_alt"></div>
              </div>
              <div className="attmp_alt">You will get two attempts for PAN verification</div>
            </>
          )
        ) : (
          <Browse copyType="Pan Copy" />
        )}
      </div>
      <div className="relative hidden sm:block">
        {uploadedImage === 0 ? (
          cameraStatus === true ? (
            <Camera type="Pan" />
          ) : (
            <div className="documentimgstyle w-[100%] h-[330px]">
              <img src={camera} className="w-[3rem] h-[3rem] flex-col mb-6" />
              Drag and drop copy of PAN Card or you can
              <div className="hidden sm:flex mt-8">
                <Uploadfile />
                <ButtonGlobal className="documentbtn" onClick={() => setCameraStatus(true)}>
                  <>
                    <img src={filledcamera} className="h-[2vh] mr-2" /> Open Camera
                  </>
                </ButtonGlobal>
              </div>
            </div>
          )
        ) : (
          <Browse copyType="Pan Copy" />
        )}
      </div>
    </div>
  );
};

export default PanVerification;
