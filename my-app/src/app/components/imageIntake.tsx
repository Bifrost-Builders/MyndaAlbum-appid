"use client";
import { useEffect, useState } from "react";
import clsx from "clsx";
import Input from "./imageButton";
import ImageBlock from "./imageBlock";

import {imageUploader} from '../lib/scripts'

export default function ImageIntake() {
  const [images, setImages] = useState([]);
  const [apiResponse, setApiResponse] = useState<any>(null); // To store the API response
  const [error, setError] = useState<string | null>(null); // To store errors


  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
        const fileUrl = URL.createObjectURL(file);
        setImages((prev) => [...prev, fileUrl]);
    }

    try {
      // Call the imageUploader and await its result
      const response = await imageUploader(file);
      
      // Store the API response
      setApiResponse(response.province);

      console.log("API Response:", response    ); // Log the response for debugging
    } catch (err) {
      // Handle errors
      console.error("Error uploading image:", err);
      setError(err.message || "Failed to upload image"); // Set the error message
    }
    
  };
  

  const getGridClass = () => {
    const imageCount = images.length;
    if (imageCount <= 3) {
      return "grid-cols-1";
    } else if (imageCount <= 7) {
      return "grid-cols-2";
    } else {
      return "grid-cols-4";
    }
  };

  const removeImage = (index) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
  };

  return (
    <section className="border-2 border-slate-900 max-h-full h-fit w-full rounded-2xl px-3 py-3">
      <section className={clsx("grid gap-4", getGridClass())}>
        {images.map((i, index) => (
          <div className="relative" key={index}>
            <ImageBlock src={i} />
            <button
              className="absolute top-0 h-full w-full bg-black bg-opacity-95 text-white rounded-[5px] p-2 opacity-0 hover:opacity-100 transition-opacity font-bold"
              onClick={() => removeImage(index)}
            >
                <h1>Remove image</h1>
            </button>
          </div>
        ))}
      </section>

      <Input
        onChange={(event) => handleFileChange(event)}
      />
      
    </section>
  );
}