"use client";
import React, { useEffect, useState } from 'react';
import { imageFinder } from '../lib/scripts';

type Details = {
  country?: string;
  city?: string;
  province?: string;
};

type ImageBlockProps = {
  src: string; // Image source URL
  info?: Details; // Initial info
};

export default function ImageBlock({ src, info = {} }: ImageBlockProps) {
  const { country = "Not found", city = "Not found", province = "Not found" } = info; // Use fetched data or fallback to initial info
  
  return (
    <div
      className="relative min-h-[200px] w-full h-full rounded-[12px] overflow-hidden text-white"
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Background overlay for text visibility */}
      <div className="absolute inset-0 bg-black/40" /> 

      {/* Display country information */}
      <div className="absolute top-0 left-0 p-2"> 
        <h1 className="font-semibold">{country}</h1>
      </div>

      {/* Display city and province information */}
      <div className="absolute bottom-0 left-0 p-2"> 
        <h1 className="text-2xl font-bold">{city}</h1>
        <p className="text-sm font-semibold">{province}</p>
      </div>
    </div>
  );
}
