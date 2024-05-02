/*

  Image input

*/

import React from 'react';
import Button from './baseComp/button';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
}


const Input: React.FC<InputProps> = ({ placeholder = 'Upload file', ...props }) => {
  const fileInputRef = React.useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        {...props}
      />
      <Button
        
        onClick={handleClick}
        title={placeholder}
      >
        {placeholder}
      </Button>
    </div>
  );
};

export default Input;
