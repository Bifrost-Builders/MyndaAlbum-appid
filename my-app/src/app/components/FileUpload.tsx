import React, { useState, ChangeEvent } from 'react';
import { storage } from '../firebaseConfig';

const FileUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (file) {
      const storageRef = storage.ref();
      const fileRef = storageRef.child(file.name);
      await fileRef.put(file);
      alert('File uploaded successfully!');
    } else {
      alert('Please select a file to upload.');
    }
  };

  return (
    <div>
      <input type="file" onChange={handleChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default FileUpload;
