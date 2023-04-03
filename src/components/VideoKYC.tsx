import React, { useEffect, useRef, useState } from 'react';
import filledcamera from '../assets/icons/filledcamera.svg';
import selfie from '../assets/icons/selfie.png';
import camera from '../assets/icons/camera.svg';
import { useStore } from '../store/zustand';
import ButtonGlobal from './Common/ButtonGlobal';
import Camera from './Common/Camera';
import InputGlobal from './Common/InputGlobal';

const VideoKYC = () => {
  const { cameraStatus, imge, setCameraStatus } = useStore();
  const mediaRecorderRef = useRef<any | null>(null);
  const [capturing, setCapturing] = useState<boolean>(false);
  const [recordedChunks, setRecordedChunks] = useState([]);

  useEffect(() => {
    setCameraStatus(false);
  }, []);
  return (
    <div className="flex items-center mt-8 mb-4">
      {cameraStatus === true ? (
        <Camera
          mediaRecorderRef={mediaRecorderRef}
          capturing={capturing}
          setCapturing={setCapturing}
          recordedChunks={recordedChunks}
          setRecordedChunks={setRecordedChunks}
          type="videoRecord"
        />
      ) : (
        <>
          <div className="relative sm:hidden block" onClick={() => setCameraStatus(true)}>
            <div className="videokycmobl w-[100%] h-[180px] text-center text-[22px]">
              <img src={camera} className="w-[3rem] h-[3rem] flex-col mb-6" />
              Click here to take a live photo/video with ID proof
            </div>
          </div>
          <div className="hidden sm:flex w-full">
            <img src={String(selfie)} alt="selfie icon" className="w-20 h-20" />
            <div className="relative w-[60%] ml-4 flex justify-center items-center">
              <InputGlobal
                type="search"
                id="search"
                className="videoKyc"
                placeholder="Take a live photo/video with ID proof"
                value={imge}
              />
              <ButtonGlobal className="vidoKyCambtn" onClick={() => setCameraStatus(true)}>
                <>
                  <img src={filledcamera} className="h-[2vh] mr-2" /> Open Camera
                </>
              </ButtonGlobal>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default VideoKYC;
