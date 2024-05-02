"use client";
import React, { useState } from 'react';

const ImageUploader = ({ apiToken }) => {
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleSendToAPI = async () => {
    if (image && apiToken) {
      const reader = new FileReader();
      reader.onload = async (e) => {
        let base64Image;

        if (typeof e.target.result === 'string') {
          // The `result` could be a string or ArrayBuffer, ensure it's a string
          base64Image = e.target.result.split(',')[1]; // Remove 'data:image/...' prefix
        }

        if (base64Image) {
          const payload = {
            TOKEN: apiToken,
            IMAGE: base64Image, // Only if it's properly converted to base64
          };

          try {
            const response = await fetch('https://picarta.ai/classify', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(payload),
            });

            if (response.ok) {
              const result = await response.json();
              console.log('API Response:', result);
            } else {
              console.error('Request failed with status code:', response.status);
            }
          } catch (error) {
            console.error('Request failed with error:', error);
          }
        } else {
          console.error('Failed to convert image to base64');
        }
      };

      reader.readAsDataURL(image); // Convert the file to a base64-encoded string
    } else {
      console.error('Missing image or API key');
    }
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleSendToAPI}>Send to API</button>
    </div>
  );
};

export default ImageUploader;
