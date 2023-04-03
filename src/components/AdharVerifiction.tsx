import React, { useEffect } from 'react';
import camera from '../assets/icons/camera.svg';
import filledcamera from '../assets/icons/filledcamera.svg';
import ButtonGlobal from './Common/ButtonGlobal';
import Camera from './Common/Camera';
import { useStore } from '../store/zustand';
import Browse from './Common/Browse';
import Uploadfile from './Common/Uploadfile';

const AdharVerifiction = () => {
  const { cameraStatus, uploadedImage, cameraType, setCameraStatus, setCameraType } = useStore();

  useEffect(() => {
    setCameraStatus(false);
  }, []);

  return (
    <>
      <div className="relative sm:hidden block mt-8" onClick={() => setCameraStatus(true)}>
        {uploadedImage === 0 ? (
          cameraStatus === true ? (
            // <Camera type="Pan" />
            <div>it's me</div>
          ) : (
            <>
              <div className="flex text-center">
                <div className="documentimgstylemobl w-[100%] h-[190px]">
                  <img src={camera} className="w-[2.4rem] h-[2.4rem] flex-col mb-6" />
                  Upload front copy
                </div>
                <div className="documentimgstylemobl ml-2 w-[100%] h-[190px]">
                  <img src={camera} className="w-[2.4rem] h-[2.4rem] flex-col mb-6" />
                  Upload back copy
                </div>
              </div>
              <div className="flex justify-center">
                <div className="side_arrow_alt"></div>
              </div>
              <div className="attmp_alt">
                You will get only one attempt for Aadhaar verification
              </div>
            </>
          )
        ) : (
          <Browse copyType="Pan Copy" />
        )}
      </div>
      <div className="mt-10 relative">
        {uploadedImage === 0 ? (
          cameraStatus === true ? (
            // <Camera type="Aadhaar" cameraType={cameraType} />
            <div></div>
          ) : (
            <div className="hidden sm:flex text-center">
              <div className="documentimgstyle w-[38%] h-[190px] mr-4">
                <img src={camera} className="w-[2rem] h-[2rem] flex-col mb-4" />
                <div className="text-sm">Drag and drop front copy of Aadhaar or you can</div>
                <div className="flex mt-4">
                  <Uploadfile />
                  <ButtonGlobal
                    className="documentbtn"
                    onClick={() => (setCameraStatus(true), setCameraType('front'))}>
                    <>
                      <img src={filledcamera} className="h-[2vh] mr-2" /> Open Camera
                    </>
                  </ButtonGlobal>
                </div>
              </div>
              <div className="documentimgstyle w-[38%] h-[190px] mr-4">
                <img src={camera} className="w-[2rem] h-[2rem] flex-col mb-4" />
                <div className="text-sm">Drag and drop back copy of Aadhaar or you can</div>
                <div className="flex mt-4">
                  <Uploadfile />
                  <ButtonGlobal
                    className="documentbtn"
                    onClick={() => (setCameraStatus(true), setCameraType('back'))}>
                    <>
                      <img src={filledcamera} className="h-[2vh] mr-2" /> Open Camera
                    </>
                  </ButtonGlobal>
                </div>
              </div>
            </div>
          )
        ) : (
          <Browse copyType="Aadhaar copy" />
        )}
      </div>
    </>
  );
};

export default AdharVerifiction;
