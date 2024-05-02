"use client";
import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import Input from "./imageButton";

export default function ImageIntake() {
  const [images, setImages] = useState([]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setImages([...images, URL.createObjectURL(file)]);
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
            <Image
              height={300}
              width={300}
              src={i}
              alt={`Image nr: ${index + 1}`}
              className="rounded-xl mb-3"
            />
            <button
              className="absolute top-0 h-full w-[300px] bg-black bg-opacity-95 text-white rounded-xl p-2 opacity-0 hover:opacity-100 transition-opacity font-bold"
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