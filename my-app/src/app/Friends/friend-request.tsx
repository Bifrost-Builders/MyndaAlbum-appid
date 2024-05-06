// FriendRequest.tsx
import React, { useState } from 'react';

const FriendRequest: React.FC = () => {
  const [friends, setFriends] = useState<any[]>([
    { id: 1, name: "Friend 1", imageUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIADYAXAMBIgACEQEDEQH/xAAaAAACAwEBAAAAAAAAAAAAAAAAAgEDBAUH/8QAKBAAAgIBAwQBBAMBAAAAAAAAAAECEQMSITEEEzJBcSIzUWEVQtEF/8QAFwEBAQEBAAAAAAAAAAAAAAAAAQACA//EABwRAQEAAgIDAAAAAAAAAAAAAAABETECIRJBUf/aAAwDAQACEQMRAD8A8Yxfcj8jZuULi+5H5Gy/6ZbmlSGh9yPyKNDzRAT8hfY0t2yPZJv/AOdjWiU5RTvZWL1uHS9UVszRhlHHgxp81wVSjkzzpcWUas6c8fHCU5KKW7On/Grt6rdmWMZYcu6peyHjjax9NCGJ8uVGB7No6qeqL/aZy5+bA8pIIea+RsvCFx+cfkmUXpsWZorQLzQyi2r9XyN2ppptURVf2Blnbeq/Q3b2JG6eE8klVtJGvBknBRhBNu7laJ6GopluVtQm8dX7ojhdk6lwx1p3/DOdlzLJz53xW1CwnN5UlbftNmyHT49SfsD3XPWSeK0uCiTtm7r0k0q9GAWeXwRdNF/cqNWUWNaTsjDub/Y8MsnyxZbx25Ejswlaswv1hqKtRDlwLOWvA7nSfo0wx64vHCav2pGDE3rTXK/Bul3FFTxOnW+wVqJj0U8Mu5Jwr5IxOW8+fwKsufJ9E60vZ0uS3qJRxYKXPCJXHpzepm55HZm3LZu2yoXKhggAimyUyAIiwsAIL+lf1nTxTpVXoACtRE8yW1GHqsjnzZIDFWRiABMP/9k=" },
    { id: 2, name: "Friend 2", imageUrl: "data:image/jpeg;base64,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" },
    { id: 3, name: "Friend 3", imageUrl: "friend3.jpg" },
    { id: 4, name: "glorbnorf", imageUrl: "friend3.jpg" }
  ]);

  const handleAcceptRequest = (friendId: number) => {
    // Logic for accepting friend request
  };

  const handleCancelRequest = (friendId: number) => {
    // Logic for canceling friend request
  };

  return (
    <div className="text-center border-2 border-black w-full max-w-screen-lg mx-auto">
      <h1 className="text-3xl font-bold mb-4">Friend Requests</h1>
      {friends.length === 0 ? (
        <p className="text-lg text-gray-600">No requests</p>
      ) : (
        <ul>
          {friends.map((friend: any) => (
            <li key={friend.id} className=" border-t-2 border-black flex justify-between items-center">
              <div className="flex items-center">
                <img src={friend.imageUrl} alt={friend.name} className="w-10 h-10 rounded-full mr-4" />
                <span>{friend.name}</span>
              </div>
              <div>
                <button className="px-3 py-1 bg-white border border-black text-black hover:bg-gray-300 rounded transition duration-500 ease-in-out" onClick={() => handleAcceptRequest(friend.id)}>✓</button>
                <button className="px-3 py-1 bg-white border border-black text-black hover:bg-gray-300 rounded transition duration-500 ease-in-out" onClick={() => handleCancelRequest(friend.id)}>X</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FriendRequest;
