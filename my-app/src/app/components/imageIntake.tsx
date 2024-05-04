"use client";
import { useState, ChangeEvent } from "react";
import clsx from "clsx";
import Input from "./imageButton";
import ImageBlock from "./imageBlock";

import { imageUploader } from "../lib/scripts";

export default function ImageIntake() {
  const [images, setImages] = useState<string[]>([]);
  const [apiResponses, setApiResponses] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setImages((prev) => [...prev, fileUrl]);
      

      try {
        const response = await imageUploader(file);

        if (response) {
          setApiResponses((prev) => [...prev, response]);

          console.log("API Response:", response);
        } else {
          throw new Error("Response is undefined");
        }
      } catch (err: any) {
        console.error("Error uploading image:", err);
        setError(err.message || "Failed to upload image");
      }
    } else {
      setError("No file selected");
    }
  };

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
    setApiResponses((prev) => prev.filter((_, i) => i !== index));
  };

  const getGridClass = () => {
    const imageCount = images.length;
    return imageCount <= 3 ? "grid-cols-1" : imageCount <= 7 ? "grid-cols-2" : "grid-cols-4";
  };

  return (
    <section className="border-2 border-slate-900 max-h-full h-fit w-full rounded-2xl px-3 py-3">
      <section className={clsx("grid gap-4", getGridClass())}>
        {images.map((src, index) => (
          <div className="relative" key={index}>
            {apiResponses[index] ? (
              <ImageBlock src={src} info={apiResponses[index]} />
            ) : (
              <ImageBlock src={src} info={{ country: "Unknown", city: "Unknown", province: "Unknown" }} />
            )}
            <button
              className="absolute top-0 h-full w-full bg-black bg-opacity-95 text-white rounded-[5px] p-2 opacity-0 hover:opacity-100 transition-opacity font-bold"
              onClick={() => removeImage(index)}
            >
              <h1>Remove image</h1>
            </button>
          </div>
        ))}
      </section>

      <Input onChange={handleFileChange} />
      {error && <p>Error: {error}</p>}
    </section>
  );
}
