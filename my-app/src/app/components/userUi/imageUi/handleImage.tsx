"use client";
import React, { useEffect, useRef, useState } from 'react';
import * as LR from '@uploadcare/blocks';
import { PACKAGE_VERSION } from '@uploadcare/blocks';
import ShowImages from './showImages';
import { imageUploader } from '@/app/lib/scripts';

LR.registerBlocks(LR);


//Data struct for images that are uploaded
type ImageTransferType = {
  uuid: string,
  fileName: string,
  imageUrl: string,
  info: [],
};

function App() {
  const baseUrl = "https://ucarecdn.com/";
    const [files, setFiles] = useState<ImageTransferType[]>([]);
    const ctxProviderRef = useRef(null);

  useEffect(() => {
    const ctxProvider = ctxProviderRef.current;
    if (!ctxProvider) return;

    const handleChangeEvent = (event) => {
      const successfulFiles = event.detail.allEntries.filter(
        (file) => file.status === 'success'
        );

      // Map the successful files to your ImageTransferType
      const formattedFiles = successfulFiles.map((file) => ({
        uuid: file.uuid,
        fileName: file.fileInfo.originalFilename,
          imageUrl: baseUrl + file.uuid + "/",
        info: null,
      }));

      setFiles([...formattedFiles]);

      console.log("Files:", formattedFiles);
    };

    ctxProvider.addEventListener('change', handleChangeEvent);

    return () => {
      ctxProvider.removeEventListener('change', handleChangeEvent);
    };
  }, [setFiles]);

  return (
    <div>
      <lr-config
        ctx-name="my-uploader"
        pubkey="ece62160ae63703904a5"
      />

      <lr-file-uploader-regular
        ctx-name="my-uploader"
        css-src={`https://cdn.jsdelivr.net/npm/@uploadcare/blocks@${PACKAGE_VERSION}/web/lr-file-uploader-regular.min.css`}
      />

      <lr-upload-ctx-provider
        ctx-name="my-uploader"
        ref={ctxProviderRef}
      />

          <ShowImages filesIds={files} />

    </div>
  );
}

export default App;
