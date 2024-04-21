import React from 'react';
import FileUpload from '../components/FileUpload.jsx';
import FileDownload from '../components/FileDownload.jsx';

export default function HomePage() {
  return (
    <div>
      <h1>File Upload</h1>
      <FileUpload />
      <hr />
      <h1>File Download</h1>
      <FileDownload />
    </div>
  );
};
