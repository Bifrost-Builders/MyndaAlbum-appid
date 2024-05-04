import React from 'react';

type Details = {
  country?: string;
  city?: string;
  province?: string;
};

type ImageBlockProps = {
  src: string;
  info?: Details;
};

export default function ImageBlock({ src, info = {} }: ImageBlockProps) {
  const { country = "Not found", city = "Not found", province = "Not found" } = info;

  return (
    <div
      className="relative min-h-[200px] w-full h-full rounded-[12px] overflow-hidden text-white"
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/40" /> 

      <div className="absolute top-0 left-0 p-2"> 
        <h1 className="font-semibold">{country}</h1>
      </div>

      <div className="absolute bottom-0 left-0 p-2"> 
        <h1 className="text-2xl font-bold">{city}</h1>
        <p className="text-sm font-semibold">{province}</p>
      </div>
    </div>
  );
}
