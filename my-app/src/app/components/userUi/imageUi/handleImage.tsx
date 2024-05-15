"use client"
import React, { useEffect, useRef, useState } from 'react';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { push } from 'firebase/database';
import { getFirestore, collection, addDoc } from "firebase/firestore";
import * as LR from '@uploadcare/blocks';
import { PACKAGE_VERSION } from '@uploadcare/blocks';
import ShowImages from './showImages';
import NoImage from './noImage';
import Button from '../../baseComp/button';
import { writeNewPicture } from '@/app/lib/write_functions_rtdb';
import Router from 'next/navigation';
import { useRouter } from 'next/navigation';


LR.registerBlocks(LR);

function ImageHandlerMain({ userName, modal }) {
  const router = useRouter();
  const baseUrl = "https://ucarecdn.com/";
  const [files, setFiles] = useState([]);
  const ctxProviderRef = useRef(null);
  const [albumName, setAlbumName] = useState("");
  const [userError, setUserError] = useState(null);
  const [loading, setLoading] = useState(false); // Add loading state

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

  const handleSubmit = () => {
    console.log("Files handleImage: ", files);

    if (albumName.length != 0) {
      setLoading(true); // Set loading to true while submitting

      
      // Map over each file and write it to the database
      files.forEach((file) => {
        const { fileName, imageUrl, uuid } = file;
  
        // Default values for imageInfo properties
        const defaultImageInfo = {
          city: "unknown",
          country: "unknown",
          province: "unknown"
        };
        writeToAlbum({ userName, imageUrl, uuid, imageInfo: defaultImageInfo })
          .then(() => {
            console.log("Done");
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      });
    } else {
      console.log("Album name empty");
      setUserError("please enter album name")
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });

    setTimeout(() => {
      modal();
      setLoading(false);
    }, 500);
    
  };
  
  // Function to write data to the album in the database
  function writeToAlbum(obj) {
    return new Promise<void>((resolve, reject) => {
      if (obj) {
        try {
          // Assuming writeNewPicture is a function that writes data to the database
          writeNewPicture(obj.userName, albumName, obj.uuid, obj.imageUrl, obj.imageInfo.city, obj.imageInfo.country, obj.imageInfo.province);
          resolve();
        } catch (error) {
          console.error("Error:", error);
          reject(error);
        }
      } else {
        reject("Object is null or undefined");
      }
    });
  }
  

  return (
    <section className='relative h-full w-full'>
      <section className='my-8 h-32 rounded-[12px] shadow-sm p-5 border-2 border-slate-300 border-opacity-20'>
        <h1 className="font-semibold text-lg mb-5 text-center text-white">Click the button to add image</h1>
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
      <div className="min-h-full w-full mt-3 mb-12">
        {files.length === 0 ?
          <>
          </>
          :
          <>
            <h1 className="font-semibold text-lg my-1 text-white max-md:text-center">Your selected images</h1>
            <ShowImages files={files} />
            <section className="h-96 w-96 bg-black rounded-[12px] py-4 px-14 absolute left-1/2 transform -translate-x-1/2">

              <div className="h-full w-full flex flex-col items-center gap-y-4">

                <div>
                  <h1 className="text-white font-semibold text-xl">Now let&apos;s make your travel</h1>
                  <p className="text-gray-100 text-center">All fields needs to be entered in</p>
                </div>

                <div className="border-2 border-slate-700 h-11 w-full rounded-[12px] text-gray-200 flex justify-center items-center transition-all hover:border-slate-800">
                  
                  <h1 className="font-semibold text-base">You have selected {files.length} { files.length > 1 ? "images" : "image"}</h1>

                </div>
                
                  <div>
                    <label htmlFor="i3">Name of your input</label>
                    <input type="text" name="i3" id="" value={albumName} onChange={(e) => setAlbumName(e.target.value)} className="h-11 w-full bg-transparent border-b-2 border-slate-700 text-white outline-none hover:border-blue-700 focus:border-blue-600 transition-all" placeholder="Travel name"/>
                  </div>

                <button
                  onClick={() => handleSubmit()}
                  className="h-11 w-full bg-white rounded-[5px] font-semibold text-lg hover:bg-slate-100"
                >Submit</button>
                {userError && <div className='text-blue-600 text-center text-sm'>Error accured, { userError }</div>}

              </div>

            </section>
          </>
        }
      </div>
    </section>
  );
}

export default ImageHandlerMain;
