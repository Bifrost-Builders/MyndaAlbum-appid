"use client";
import Search from './components/HomeUi/Search';
import React, { useState } from 'react';
import Album from './components/ImageUi/album';
import ImageIntake from './components/ImageUi/imageData';
import Link from 'next/link';
import Header from './components/HomeUi/header'

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex h-[580px] flex-col items-center justify-between p-24 bg-blue-600">
        <div className='flex flex-col gap-5'>
          <h1 className='text-center text-2xl font-semibold text-white'>Kolbri allow groups to connect <br /> connect your group today</h1>
          <Search />
        </div>
      
      </main>
      <section className="min-h-screen w-full bg-white flex flex-col justify-center px-10 mt-10">

        <div className='text-center'>
          <h1 className='text-2xl font-semibold'>Let’s look at example of travel from users</h1>
          <p className='text-blue-500 font-semibold'>Click on any of this boxes to see more about them</p>
        </div>

        <section className="h-[500px] w-full grid grid-cols-4 gap-2 my-3 max-sm:grid-cols-2 max-sm:h-[600px]">

            <div className="h-full w-full bg-[url('/img/beachimage.jpg')] object-center bg-cover rounded-[5px] relative text-white max-sm:col-span-2">
              <h1 className="absolute top-1 left-2 ">Location</h1>
              <h1 className="absolute bottom-6 text-2xl left-2">Title</h1>
              <p className="text-sm absolute bottom-2 left-2">album size 4</p>
            </div>
            <div className="h-full w-full bg-[url('/img/mynd7.jpg')] bg-cover  rounded-[5px] relative text-white max-sm:col-span-1">
              <h1 className="absolute top-1 left-2 ">Location</h1>
              <h1 className="absolute bottom-6 text-2xl left-2">Title</h1>
              <p className="text-sm absolute bottom-2 left-2">album size 4</p>
            </div>
            <div className="h-full w-full bg-[url('/img/mynd8.jpg')] bg-cover rounded-[5px] relative text-white max-sm:col-span-1">
              <h1 className="absolute top-1 left-2 ">Location</h1>
              <h1 className="absolute bottom-6 text-2xl left-2">Title</h1>
              <p className="text-sm absolute bottom-2 left-2">album size 4</p>
            </div>
            <div className="h-full w-full bg-[url('/img/mynd10.jpg')] bg-cover  row-span-2 rounded-[5px] relative text-white max-sm:span-1">
              <h1 className="absolute top-1 left-2 ">Location</h1>
              <h1 className="absolute bottom-6 text-2xl left-2">Title</h1>
              <p className="text-sm absolute bottom-2 left-2">album size 4</p>
            </div>
            <div className="h-full w-full bg-[url('/img/mynd9.jpg')] m-auto bg-center bg-no-repeat bg-cover col-span-3 rounded-[5px] relative text-white max-sm:row-span-2 max-sm:col-span-1">
              <h1 className="absolute top-1 left-2 ">Location</h1>
              <h1 className="absolute bottom-6 text-2xl left-2">Title</h1>
              <p className="text-sm absolute bottom-2 left-2">album size 4</p>
            </div>
      

          </section>

      </section>

      <section className='h-screen w-full bg-white flex flex-col item-center px-10'>

        <div className='text-center text-2xl font-bold'>
          <h1>What is Title</h1>
        </div>

        <div className='h-96 w-full bg-blue-500 flex justify-center rounded-xl item-center'>
          <p className='text-white font-semibold text-lg m-auto'>Screenshoot af appinu</p>
        </div>

        <div className='text-center font-semibold mt-3'>
          <p>Kolbri is a online photo and video sharing designed for travel groups. With kolibri you can create travel group, add friends or make it public then your group memorize the adventure, good luck</p>

          
          <Link href="/" className="h-fit w-52 text-blue-600 text-center py-2 font-bold rounded-[5px] hover:text-blue-500">Sign in</Link>


        </div>

      </section>

      <section className='h-52 w-full bg-blue-500 pl-3 pt-3'>
          <h1 className='text-2xl'>Title</h1>
      </section>

    </>
    );
}
