import React from 'react';
import { useStore } from '../../store/zustand';
import ButtonGlobal from './ButtonGlobal';
import alert from './../../assets/icons/alert.png';

const Alert = () => {
  const { setFinish } = useStore();
  return (
    <div className="alert_comn">
      <span className="alert_comn_spn_img">
        <span className="alert_comn_snd_spn">
          <img src={String(alert)} alt="alert" className="w-12 h-12" />
        </span>
      </span>
      <span className="mt-4 font-bold text-black text-xl">Alert!</span>
      <span className="alert_comn_msg">
        Your onboarding process can not be completed without Aadhaar verification. Please complete
        the same to proceed.
      </span>
      <ButtonGlobal
        className="alert_comn_btn"
        onClick={() => {
          setFinish(false);
        }}>
        Go Back
      </ButtonGlobal>
    </div>
  );
};

export default Alert;
