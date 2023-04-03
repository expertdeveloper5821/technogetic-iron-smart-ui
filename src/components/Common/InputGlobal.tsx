import React from 'react';

type InputProps = {
  type: string;
  id: string;
  className: string;
  placeholder: string;
  value?: any;
};

const InputGlobal = ({ type, id, className, placeholder, value }: InputProps) => {
  return (
    <input type={type} id={id} className={className} placeholder={placeholder} value={value} />
  );
};

export default InputGlobal;
