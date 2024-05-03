"use client";
import { useState, useEffect, useRef, FC } from "react";
import * as LR from "@uploadcare/blocks";

LR.registerBlocks(LR);

interface FileInfo {
  uuid: string;
  cdnUrl: string;
  fileInfo: {
    originalFilename: string;
  };
}

const ImageHandler: FC = () => {
  const [files, setFiles] = useState([]);
  const ctxProviderRef = useRef<InstanceType<LR.UploadCtxProvider>>(null)

  useEffect(() => {
    const ctxProvider = ctxProviderRef.current;
    if (!ctxProvider) return;

    const handleChangeEvent = (e: CustomEvent<LR.EventMap["change"]>) => {
        console.log("Change event payload:", e);
        //Villan herna skiptir engu bara typescript a tja sig
      const successfulFiles = e.detail.allEntries.filter(
        (f) => f.status === "success"
      );
      setFiles(successfulFiles as FileInfo[]);
    };

    ctxProvider.addEventListener("change", handleChangeEvent);

    // Clean up event listener on component unmount
    return () => {
      ctxProvider.removeEventListener("change", handleChangeEvent);
    };
  }, []); // Dependency array to ensure this useEffect runs once on mount

  return (
    <>
      <lr-config
        ctx-name="my-uploader"
        pubkey="ece62160ae63703904a5"
        max-local-file-size-bytes={10_000_000}
        img-only
        source-list="local, camera, gphotos"
      />

      <lr-upload-ctx-provider ref={ctxProviderRef} ctx-name="my-uploader" />

      <lr-file-uploader-regular
        css-src="https://cdn.jsdelivr.net/npm/@uploadcare/blocks@0.38.1/web/lr-file-uploader-regular.min.css"
        ctx-name="my-uploader"
        class="my-config"
      />

      <div className="bg-slate-300 h-full w-full">
        {files.map((file) => (
          <div key={file.uuid} className="h-96 w-96 m-2">
            <img
              className="h-full w-full object-cover"
              src={`${file.cdnUrl}/-/preview/-/resize/x400/`}
              width="200"
              height="200"
              alt={file.fileInfo.originalFilename || "Uploaded Image"}
              title={file.fileInfo.originalFilename || "Uploaded Image"}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default ImageHandler;
