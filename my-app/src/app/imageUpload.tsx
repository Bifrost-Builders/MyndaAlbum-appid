import React, { useState } from 'react';

const ImageUpload = () => {
  const [images, setImages] = useState<string[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files) {
      const newImages = Array.from(files).map(file => URL.createObjectURL(file));
      setImages(prevImages => [...prevImages, ...newImages]);
    }
  }

  return (
    <div className="container">
      <div className="card">
        <div id="image-container">
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Uploaded Image ${index}`} />
          ))}
        </div>
        <label htmlFor="input-file">Upload Image</label>
        <input type="file" accept="image/jpeg, image/png, image/jpg" id="input-file" multiple onChange={handleFileChange} />
      </div>
    </div>
  );
}

export default ImageUpload;
