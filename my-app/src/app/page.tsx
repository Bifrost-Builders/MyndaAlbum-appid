"use client";
import React from 'react';
import Button from './components/baseComp/button';
import RoutingButton from './components/routingButton';

export default function Home() {  
  return (
    <main className="min-h-screen h-full w-full bg-black relative">

      {/* Gradient backgrounds with animations */}
      <div
        className="bg-gradient-to-br from-violet-900 via-sky-700 to-red-500 h-32 w-36 absolute top-0 right-1 blur-3xl"
      />

      <div
        className="bg-gradient-to-br from-violet-900 via-sky-700 to-red-500 h-32 w-36 absolute bottom-40 left-0 blur-2xl"
      />

      <div
        className="bg-gradient-to-br from-violet-500 via-sky-400 to-red-500 h-48 w-48 absolute left-10 top-20 blur-3xl animate-float animate-rotate"
        style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
      />

      <div
        className="bg-gradient-to-br from-purple-500 via-red-600 to-blue-500 h-48 w-48 absolute right-5 top-64 blur-3xl animate-float"
        style={{ clipPath: 'circle(50%)' }}
      />

      <div
        className="bg-gradient-to-br from-blue-800 via-green-800 to-sky-500 h-48 w-72 absolute bottom-24 blur-3xl animate-float"
        style={{ clipPath: 'ellipse(50% 100% at 50% 100%)' }}
      />

      {/* Main content section */}
      <section className="h-screen w-full bg-black flex flex-col justify-center items-center text-white gap-3">

        <div className="border-2 border-slate-800 px-7 py-1 rounded-full">
          <p className="font-semibold text-sm">Welcome</p>
        </div>

        <h1 className="text-4xl text-center font-bold z-50">
          Kolibri allows groups to connect
          <br />
          Connect your group today
        </h1>

        {/* List of features with hover effects */}
        <ul className="flex justify-center items-center gap-20 py-4 text-slate-400 font-semibold z-50">
          <li className="hover:text-slate-300 hover:transition-all">Share memories</li>
          <li className="hover:text-slate-300 hover:transition-all">Store memories</li>
          <li className="hover:text-slate-300 hover:transition-all">Look back at it</li>
        </ul>

        {/* Call to action button */}
        <RoutingButton />

      </section>

      {/* Bouncing animation at the bottom */}
      <div className="z-50 h-10 w-full absolute bottom-14 flex justify-center flex-col">
        <div className="h-1 w-28 bg-slate-200 m-auto animate-bounce"></div>
        <div className="h-1 w-20 bg-slate-100 m-auto animate-bounce"></div>
      </div>

    </main>
  );
}
