// Header.tsx
import React from 'react';

interface HeaderProps {
  setActiveView: (view: string) => void;
}

const Header: React.FC<HeaderProps> = ({ setActiveView }) => {
  return (
    <div className="flex justify-center items-center border-b border-black overflow-x-auto">
      <div onClick={() => setActiveView('friend-request')} className="py-3 px-5 border-l-2 border-r-2 border-black cursor-pointer hover:bg-gray-300 transition duration-500 ease-in-out text-3xl flex items-center">
        <span>Friend Requests</span>
      </div>
      <div onClick={() => setActiveView('find-friends')} className="py-3 px-5 border-r-2 border-black cursor-pointer hover:bg-gray-300 transition duration-500 ease-in-out text-3xl flex items-center">
        <span>Find Friends</span>
      </div>
      <div onClick={() => setActiveView('my-friends')} className="py-3 px-5 border-r-2 border-black cursor-pointer hover:bg-gray-300 transition duration-500 ease-in-out text-3xl flex items-center">
        <span>My Friends</span>
      </div>
    </div>
  );
};

export default Header;
