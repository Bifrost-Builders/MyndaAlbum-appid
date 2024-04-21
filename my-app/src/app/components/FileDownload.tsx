// FileDownload.jsx
import React, { useState } from 'react';
import { storage } from '../firebaseConfig';

const FileDownload = () => {
  const [fileUrl, setFileUrl] = useState('');

  const handleDownload = async () => {
    const storageRef = storage.ref();
    const fileRef = storageRef.child('space.jpg'); // Change this to your file name
    const url = await fileRef.getDownloadURL();
    setFileUrl(url);
  };

  return (
    <div>
      <button onClick={handleDownload}>Download</button>
      {fileUrl && <a href={fileUrl} download>Download File</a>}
    </div>
  );
};

export default FileDownload;
