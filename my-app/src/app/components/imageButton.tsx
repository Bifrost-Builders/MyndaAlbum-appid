/*

  Image input

*/

import React from 'react';
import Button from './baseComp/button';
import handleClickByRef from '../lib/scripts';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
}


const Input: React.FC<InputProps> = ({ placeholder = 'Upload file', ...props }) => {
  const fileInputRef = React.useRef<HTMLInputElement | null>(null);

  return (
    <div>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        {...props}
      />
      <Button
        
        onClick={() => handleClickByRef(fileInputRef)}
        title={placeholder}
      >
        {placeholder}
      </Button>
    </div>
  );
};

export default Input;
