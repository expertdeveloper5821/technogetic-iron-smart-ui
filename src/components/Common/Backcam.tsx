import React from 'react';
import { useStore } from '../../store/zustand';
import ButtonGlobal from './ButtonGlobal';
import retry from '../../assets/icons/retry.png';
import camera from '../../assets/icons/camera.svg';
import Uploadfile from './Uploadfile';
import filledcamera from '../../assets/icons/filledcamera.svg';

type BackcamProps = {
  handleRetake: (input: string) => void;
};
const Backcam = ({ handleRetake }: BackcamProps) => {
  const { imge, setImg, setCameraType } = useStore();
  return (
    <div className="flex">
      <div className="documentimgstyle w-[40%] h-[190px] mr-4 text-center">
        <img src={camera} className="w-[2rem] h-[2rem] flex-col mb-4" />
        <div className="text-sm">{`Drag and drop back copy of Aadhaar or you can`}</div>
        <div className="flex mt-4">
          <Uploadfile />
          <ButtonGlobal
            className="documentbtn"
            onClick={() => (setImg(null), setCameraType('front'))}>
            <>
              <img src={filledcamera} className="h-[2vh] mr-2" /> Open Camera
            </>
          </ButtonGlobal>
        </div>
      </div>
      <div>
        <img src={imge} alt="screenshot" className="rounded-[10px]" />
        <span className="flex flex-col justify-end items-start mt-3">
          <ButtonGlobal onClick={handleRetake} className="backcam_rty_btn">
            <>
              <img src={retry} alt="retry_icon" className="w-[16px] h-[16px] mr-1" /> Re-Capture
            </>
          </ButtonGlobal>
        </span>
      </div>
    </div>
  );
};

export default Backcam;
