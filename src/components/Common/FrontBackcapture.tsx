import React from 'react';
import camera from '../../assets/icons/camera.svg';
import ButtonGlobal from './ButtonGlobal';
import Uploadfile from './Uploadfile';
import { useStore } from '../../store/zustand';
import filledcamera from '../../assets/icons/filledcamera.svg';

type FrontBackcaptureProps = {
  type: string;
};
const FrontBackcapture = ({ type }: FrontBackcaptureProps) => {
  const { setCameraType } = useStore();
  return (
    <div
      className={`documentimgstyle w-[40%] h-[190px] ${
        type === 'back' ? 'ml-4' : 'mr-4'
      } text-center`}>
      <img src={camera} className="w-[2rem] h-[2rem] flex-col mb-4" />
      <div className="text-sm">Drag and drop back copy of Aadhaar or you can</div>
      <div className="flex mt-4">
        <Uploadfile />
        <ButtonGlobal className="documentbtn" onClick={() => setCameraType(type)}>
          <>
            <img src={filledcamera} className="h-[2vh] mr-2" /> Open Camera
          </>
        </ButtonGlobal>
      </div>
    </div>
  );
};

export default FrontBackcapture;
