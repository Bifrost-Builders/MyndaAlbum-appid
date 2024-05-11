"use client";
import React, { useEffect, useRef, useState } from 'react';
import * as LR from '@uploadcare/blocks';
import { PACKAGE_VERSION } from '@uploadcare/blocks';
import ShowImages from './showImages';
import NoImage from './noImage';
import Button from '../../baseComp/button';


LR.registerBlocks(LR);

//api res
//Country -> ai_country
//City -> city
//province -> province

//Data struct for images that are uploaded

export type ImageTransferType = {
  uuid: string,
  fileName: string,
  imageUrl: string,
  info: any,
};

function ImageHandlerMain() {
  const baseUrl = "https://ucarecdn.com/";
    const [files, setFiles] = useState([]);
    const ctxProviderRef = useRef(null);

  useEffect(() => {
    const ctxProvider = ctxProviderRef.current;
    if (!ctxProvider) return;

    const handleChangeEvent = (event) => {
      let dtInfo = null;
      const successfulFiles = event.detail.allEntries.filter(
        (file) => file.status === 'success',
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

  const handleSubmitAlbum = () => {
    //Upload images to firebase
  }
    return (
        <section className='relative h-full w-full'>
            <section className='my-8 h-32 rounded-[12px] shadow-sm p-5 border-2 border-slate-300 border-opacity-20'>
                <h1 className="font-semibold text-lg mb-5 text-center">Click the button to add image</h1>
                <div className='flex justify-center'>
                        <lr-config
                        ctx-name="my-uploader"
                        pubkey="ece62160ae63703904a5"
                    />

                    <lr-file-uploader-regular
                        ctx-name="my-uploader"
                        css-src={`https://cdn.jsdelivr.net/npm/@uploadcare/blocks@${PACKAGE_VERSION}/web/lr-file-uploader-regular.min.css`}
                        class='my-config'
                    />

                    <lr-upload-ctx-provider
                        ctx-name="my-uploader"
                        ref={ctxProviderRef}
                    />
                </div>
            </section>
            <div className="h-full w-full my-3">
          {files.length === 0 ?
            <>
              
            </>
            
            : <>
              <h1 className="font-semibold text-lg my-1">Your selected images</h1>
              <ShowImages files={files} />
              <div className='h-[20px] w-full flex justify-center itme-center'>
                <Button
                  title='Create album'
                  onClick={() => handleSubmitAlbum()}
                ></Button>
              </div>
            </>
          }

            </div>

    </section>
  );
}

export default ImageHandlerMain;
