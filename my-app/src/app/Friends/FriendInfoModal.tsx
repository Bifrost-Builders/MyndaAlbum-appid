// FriendInfoModal.tsx
import React from 'react';

interface FriendInfoModalProps {
  friendInfo: string;
  onClose: () => void;
}

const FriendInfoModal: React.FC<FriendInfoModalProps> = ({ friendInfo, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-4 rounded shadow-md">
        <div className="text-lg mb-4">{friendInfo}</div>
        <button className="px-3 py-1 bg-gray-200 text-gray-800 hover:bg-gray-300 rounded" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default FriendInfoModal;
