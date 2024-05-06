// page.tsx
"use client"
import React, { useState } from 'react';
import Header from './header';
import FriendRequest from './friend-request';
import FindFriends from './find-friends';
import MyFriends from './my-friends';

const Page: React.FC = () => {
  const [activeView, setActiveView] = useState<string>('friend-request');

  return (
    <div className=' m-auto w-3/12'>
      <Header setActiveView={setActiveView} />
      {activeView === 'friend-request' && <FriendRequest />}
      {activeView === 'find-friends' && <FindFriends />}
      {activeView === 'my-friends' && <MyFriends />}
    </div>
  );
};

export default Page;
