import React, { useEffect, useRef, useState } from 'react';
import ShowImages from './showImages';
import NoImage from './noImage';

// Data struct for images that are uploaded
type ImageTransferType = {
  uuid: string,
  fileName: string,
  imageUrl: string,
  info: any,
};

function homePage() {
  const [files, setFiles] = useState<ImageTransferType[]>([]);
  const ctxProviderRef = useRef(null);

  useEffect(() => {
    const ctxProvider = ctxProviderRef.current;
    if (!ctxProvider) return;

    const handleChangeEvent = (event) => {
      const successfulFiles = event.detail.allEntries.filter(
        (file) => file.status === 'success',
      );

      // Map the successful files to your ImageTransferType
      const formattedFiles = successfulFiles.map((file) => ({
        uuid: file.uuid,
        fileName: file.fileInfo.originalFilename,
        imageUrl: file.cdnUrl,
        info: null,
      }));

      setFiles([...formattedFiles]);
    };

    ctxProvider.addEventListener('change', handleChangeEvent);

    return () => {
      ctxProvider.removeEventListener('change', handleChangeEvent);
    };
  }, [setFiles]);

  return (
    <section className='relative min-h-screen h-full w-full'>
      <section className=''>
        <div className='flex justify-center'>
          {}
        </div>
      </section>
      <div className="h-full w-full my-3">
        <h1 className="font-semibold text-lg my-1">Your selected images</h1>
        {files.length === 0 ?
          <NoImage />
          : <ShowImages files={files} />}
      </div>
    </section>
  );
}

export default homePage;
