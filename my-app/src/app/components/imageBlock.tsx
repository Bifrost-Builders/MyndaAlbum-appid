"use client";
import React, { useEffect, useState } from 'react';
import { imageFinder } from '../lib/scripts';
import { ImageTransferType } from './userUi/imageUi/handleImage';
import fileInformation from '../lib/scripts'

type SetEditStruct = {
  country?: boolean;
  city?: boolean;
  province?: boolean;
};


//Sama struct og info.
type EditStruct = {
  country?: string;
  city?: string;
  province?: string;
};

export default function ImageBlock({ src, info = {} }) {
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [editMode, setEditMode] = useState<SetEditStruct>({}); 
  const [tempText, setTempText] = useState<EditStruct>({}); 
  //Geymir data sem fer a firebase
  const [dataToSend, SetDataToSend] = useState<ImageTransferType[]>([])
  /*
  useEffect(() => {
    const fetchLocationData = async () => {
      const result = await imageFinder(src.imageUrl);
      if (result) {
        setCountry(result.country);
        setCity(result.city);
        setProvince(result.province);
        src.info = result;
      }
    };
    fetchLocationData();
  }, [src]); */

  const handleEdit = (field) => {
    setEditMode({ [field]: true });
    setTempText({ ...tempText, [field]: eval(field) });
  };

  const handleChange = (e, field) => {
    setTempText({ ...tempText, [field]: e.target.value });
  };

  const handleBlur = (field) => {
    setEditMode({ [field]: false });
    if (field === 'country') {
      setCountry(tempText[field]);
    } else if (field === 'city') {
      setCity(tempText[field]);
    } else if (field === 'province') {
      setProvince(tempText[field]);
    }
  };

  const handleKeyDown = (e, field) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleBlur(field); 
    }
  };

  return (
    <div
      className="relative min-h-[200px] w-full h-full rounded-[12px] overflow-hidden text-white"
      style={{
        backgroundImage: `url(${src.imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/40" />

      <div className="absolute top-0 left-0 p-2" onClick={() => handleEdit('country')}>
        {editMode.country ? (
          <input
            type="text"
            value={tempText.country}
            onChange={(e) => handleChange(e, 'country')}
            onBlur={() => handleBlur('country')}
            onKeyDown={(e) => handleKeyDown(e, 'country')}
            className="bg-transparent text-white border-b-[3px] transition-all outline-none"
            autoFocus
          />
        ) : (
          <h1 className="font-semibold">{country}</h1>
        )}
      </div>

      <div className="absolute bottom-0 left-0 p-2">
        <div onClick={() => handleEdit('city')}>
          {editMode.city ? (
            <input
              type="text"
              value={tempText.city}
              onChange={(e) => handleChange(e, 'city')}
              onBlur={() => handleBlur('city')}
              onKeyDown={(e) => handleKeyDown(e, 'city')}
              className="bg-transparent text-white border-b-[3px] transition-all outline-none font-bold text-2xl"
              autoFocus
            />
          ) : (
            <h1 className="text-2xl font-bold">{city}</h1>
          )}
        </div>

        <div onClick={() => handleEdit('province')}>
          {editMode.province ? (
            <input
              type="text"
              value={tempText.province}
              onChange={(e) => handleChange(e, 'province')}
              onBlur={() => handleBlur('province')}
              onKeyDown={(e) => handleKeyDown(e, 'province')}
              className="bg-transparent text-white border-b-[3px] transition-all outline-none text-sm"
              autoFocus
            />
          ) : (
            <p className="text-sm font-semibold">{province}</p>
          )}
        </div>
      </div>
    </div>
  );
}
