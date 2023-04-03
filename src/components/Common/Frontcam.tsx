import React from 'react';
import { useStore } from '../../store/zustand';
import ButtonGlobal from './ButtonGlobal';
import retry from '../../assets/icons/retry.png';
import camera from '../../assets/icons/camera.svg';
import Uploadfile from './Uploadfile';
import filledcamera from '../../assets/icons/filledcamera.svg';

type FrontcamProps = {
  handleRetake: (input: string) => void;
};
const Frontcam = ({ handleRetake }: FrontcamProps) => {
  const { imge, setImg, setCameraType } = useStore();
  return (
    <div className="flex">
      <div>
        <img src={imge} alt="screenshot" className="rounded-[10px]" />
        <span className="flex flex-col justify-end items-end mt-3">
          <ButtonGlobal onClick={handleRetake} className="cam_btn">
            <>
              <img src={retry} alt="retry_icon" className="w-[16px] h-[16px] mr-1" /> Re-Capture
            </>
          </ButtonGlobal>
        </span>
      </div>
      <div className="documentimgstyle w-[40%] h-[190px] ml-4 text-center">
        <img src={camera} className="w-[2rem] h-[2rem] flex-col mb-4" />
        <div className="text-sm">{`Drag and drop back copy of Aadhaar or you can`}</div>
        <div className="flex mt-4">
          <Uploadfile />
          <ButtonGlobal
            className="documentbtn"
            onClick={() => (setImg(null), setCameraType('back'))}>
            <>
              <img src={filledcamera} className="h-[2vh] mr-2" /> Open Camera
            </>
          </ButtonGlobal>
        </div>
      </div>
    </div>
  );
};

export default Frontcam;
