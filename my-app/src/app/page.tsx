"use client";
import Search from './components/HomeUi/Search';
import React, { useState } from 'react';
import Album from './components/ImageUi/album';

export default function Home() {
  return (
    <main className="flex min-h-screen h-[1000px] flex-col items-center justify-between p-24 bg-blue-600">
      <div className='flex flex-col gap-5'>
        <h1 className='text-center text-2xl font-semibold text-white'>Kolbri allow groups to connect <br /> connect your group today</h1>
        <Search />
      </div>

      <Album></Album>
     
    
    </main>
  );
}
