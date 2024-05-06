// my-friends.tsx
"use client"
import React, { useState } from 'react';
import FriendInfoModal from './FriendInfoModal'; // Import the modal component

interface Friend {
  id: number;
  name: string;
  info: string;
  image: string; // Add image property
}

const MyFriends: React.FC = () => {
  const [selectedFriendId, setSelectedFriendId] = useState<number | null>(null); // State to track selected friend id

  const friends: Friend[] = [ // Hardcoded friends
    { id: 1, name: "Friend 1", info: "Info about Friend 1", image: "friend1.jpg" },
    { id: 2, name: "Friend 2", info: "Info about Friend 2", image: "friend2.jpg" },
    { id: 3, name: "Friend 3", info: "Info about Friend 3", image: "friend3.jpg" }
  ];

  const handleShowInfo = (friendId: number) => {
    setSelectedFriendId(friendId);
  };

  const handleCloseModal = () => {
    setSelectedFriendId(null);
  };

  return (
    <div className="text-center border-2 border-black w-full max-w-screen-lg mx-auto">
      <h1 className="text-3xl font-bold mb-4">My Friends</h1>
      <div>
        {friends.map((friend: Friend) => (
          <div
            key={friend.id}
            className="border-b border-gray-400 py-2 flex justify-between items-center cursor-pointer"
            onClick={() => handleShowInfo(friend.id)} // Open modal when clicked
          >
            <div className="flex items-center">
              <img src={friend.image} alt={friend.name} className="w-10 h-10 rounded-full mr-4" /> {/* Add image */}
              <span>{friend.name}</span>
            </div>
          </div>
        ))}
      </div>
      {selectedFriendId && <FriendInfoModal friendInfo={friends.find(friend => friend.id === selectedFriendId)?.info || ''} onClose={handleCloseModal} />} {/* Render the modal when friend info is selected */}
    </div>
  );
};

export default MyFriends;
