import React from 'react';
import ButtonGlobal from './Common/ButtonGlobal';
import InputGlobal from './Common/InputGlobal';
import Labelglobal from './Common/Labelglobal';

const Business = () => {
  return (
    <>
      <div className="mt-8 text-black text-sm font-bold">Business Type</div>

      <div className="dropdown relative mt-2">
        <ButtonGlobal
          className="busin_drpdwn_btn"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false">
          <>
            -- Select --
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="caret-down"
              className="w-3 text-extrdarkgray"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512">
              <path
                fill="currentColor"
                d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
            </svg>
          </>
        </ButtonGlobal>
        <ul className="busin_drpdwn_ul" aria-labelledby="dropdownMenuButton1">
          <li>
            <a className="busin_drpdwn_li_a" href="#">
              Action
            </a>
          </li>
          <li>
            <a className="busin_drpdwn_li_a" href="#">
              Another action
            </a>
          </li>
          <li>
            <a className="busin_drpdwn_li_a" href="#">
              Something else here
            </a>
          </li>
        </ul>
      </div>

      <form className="bg-white mt-4">
        <Labelglobal className="block text-black text-sm font-bold mb-2">Shop Name</Labelglobal>
        <InputGlobal className="busin_drpdwn_input" id="username" type="text" placeholder="" />
      </form>
    </>
  );
};

export default Business;
