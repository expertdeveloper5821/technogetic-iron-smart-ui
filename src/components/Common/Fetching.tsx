import React from 'react';
import { useStore } from '../../store/zustand';
import tickmark from './../../assets/icons/tickmark.svg';

const Fetching = () => {
  const { setFetchData } = useStore();
  return (
    <div className="fetching">
      <span className="fetching_spn">
        <span
          className="fetching_spn_spn"
          onClick={() => {
            setFetchData(false);
          }}>
          <span className="fetching_spn_img">
            <img src={tickmark} alt="complete mark" className="w-[3rem] h-[2.3rem]" />
            <div className="text-green">70%</div>
          </span>
        </span>
      </span>
      <span className="mt-4 font-bold text-black text-xl">Fetching Details!</span>
      <span className="fetching_msg">
        Please wait while we fetch details from PAN. This may take a few seconds.
      </span>
    </div>
  );
};

export default Fetching;
