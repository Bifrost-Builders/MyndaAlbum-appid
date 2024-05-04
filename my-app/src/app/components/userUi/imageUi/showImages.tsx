"use client";
import ImageBlock from "../../imageBlock";
import { imageUploader } from "@/app/lib/scripts";



export default function ShowImages({ filesIds }) {
  console.log
  return (
    <div>
      {filesIds.map((file) => (
        
        <ImageBlock key={file.uuid} src={file.imageUrl} />
      ))}
    </div>
  );
}
