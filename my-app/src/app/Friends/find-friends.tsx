// find-friends.tsx
import React, { useState } from 'react';
import FriendInfoModal from './FriendInfoModal'; // Import the modal component

interface Friend {
  id: number;
  name: string;
  info: string;
  image: string; // Add image property
}

const FindFriends: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [friends, setFriends] = useState<Friend[]>([
    { id: 1, name: "Friend 1", info: "Info about Friend 1", image: "friend1.jpg" },
    { id: 2, name: "Friend 2", info: "Info about Friend 2", image: "friend2.jpg" },
    { id: 3, name: "Friend 3", info: "Info about Friend 3", image: "friend3.jpg" }
  ]);
  const [matchedFriends, setMatchedFriends] = useState<Friend[]>([]);
  const [selectedFriendId, setSelectedFriendId] = useState<number | null>(null); // State to track selected friend id
  const [addButtonHovered, setAddButtonHovered] = useState<boolean>(false); // State to track add button hover

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    const matched = friends.filter(friend =>
      friend.name.toLowerCase().includes(searchTerm)
    );
    setMatchedFriends(matched);
  };

  const handleAddFriend = (friendId: number) => {
    // Logic for adding friend
  };

  const handleShowInfo = (friendId: number) => {
    if (!addButtonHovered) {
      setSelectedFriendId(friendId);
    }
  };

  const handleCloseModal = () => {
    setSelectedFriendId(null);
  };

  return (
    <div className="text-center border-2 border-black w-full max-w-screen-lg mx-auto">
      <h1 className="text-3xl font-bold mb-4">Find Friends</h1>
      <input
        type="text"
        placeholder="Search for friends..."
        className="w-full p-2 border border-gray-400 rounded mb-4"
        value={searchTerm}
        onChange={handleSearch}
      />
      <div>
        {searchTerm === '' ? ( // Check if search term is empty
          <p className="text-lg text-gray-600">Search for a friend</p>
        ) : matchedFriends.length === 0 ? (
          <p className="text-lg text-gray-600">Person does not exist</p>
        ) : (
          matchedFriends.map((friend: Friend) => (
            <div
              key={friend.id}
              className="border-b border-gray-400 py-2 flex justify-between items-center cursor-pointer"
              onClick={() => handleShowInfo(friend.id)} // Open modal when clicked
            >
              <div className="flex items-center">
                <img src={friend.image} alt={friend.name} className="w-10 h-10 rounded-full mr-4" /> {/* Add image */}
                <span>{friend.name}</span>
              </div>
              <div>
                <button
                  className="px-3 py-1 bg-white border border-black text-black hover:bg-gray-300 rounded transition duration-500 ease-in-out"
                  onClick={() => handleAddFriend(friend.id)} // Add button handler
                  onMouseEnter={() => setAddButtonHovered(true)} // Track add button hover
                  onMouseLeave={() => setAddButtonHovered(false)} // Track add button hover
                >
                  Add
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      {selectedFriendId && <FriendInfoModal friendInfo={friends.find(friend => friend.id === selectedFriendId)?.info || ''} onClose={handleCloseModal} />} {/* Render the modal when friend info is selected */}
    </div>
  );
};

export default FindFriends;
