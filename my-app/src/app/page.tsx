'use client'
import Camera from "./camera";
import ImageUpload from "./imageUpload";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <h1>Hello world. test run</h1>
      <ImageUpload/>
      <Camera/>
      
    </main>
  );
}
