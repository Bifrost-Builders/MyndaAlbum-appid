"use client";
import { useState } from "react";
import clsx from "clsx";

export default function ImageIntake() {
  const [images, setImages] = useState([]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImages([...images, URL.createObjectURL(file)]);
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
    <section className="bg-white max-h-full h-fit w-full rounded-2xl px-3 py-3">
      <section className={clsx("grid gap-4", getGridClass())}>
        {images.map((src, index) => (
          <div className="relative" key={index}>
            <img
              src={src}
              alt={`Image nr: ${index + 1}`}
              className="rounded-xl mb-3"
            />
            <button
              className="absolute top-0 h-full w-full bg-black bg-opacity-90 text-white rounded-xl p-2 opacity-0 hover:opacity-100 transition-opacity font-bold"
              onClick={() => removeImage(index)}
            >
                <h1>Remove image</h1>
            </button>
          </div>
        ))}
      </section>

      <input
        type="file"
        accept="image/*"
        className="h-24 w-full text-blue-500 file:bg-blue-600 file:outline-none file:border-none file:text-white file:rounded-[5px] file:text-sm file:px-3 file:py-2 mt-5 text-transparent"
        onChange={handleFileChange}
      />
    </section>
  );
}
