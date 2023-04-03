import React from 'react';
import oaaslogo from '../../assets/icons/logo.png';

const Header = () => {
  return (
    <div className="header">
      <div className="header_div">
        <div className="flex items-ceter">
          <div className="header_img_div sm:text-2lg">
            <img src={oaaslogo} alt="oaaslogo" className="h-8 w-32" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
