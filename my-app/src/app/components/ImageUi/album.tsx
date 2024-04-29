"use client";
import { useState } from "react";

/*
    Phone version one image then next image new line
*/

export default function Album() {

    //Used to store single image (Current selecton)
    const [images, setImages] = useState([]);

    return (
        <section className="max-h-full h-fit w-[250px] flex-col gap-5 bg-white rounded-2xl px-3 py-3">
            {
                images.map((i,index) => (
                    <img
                    key={index}
                    src={i}
                    alt={'Image nr: '+(index + 1)}   
                    className="rounded-xl mb-3"
                    />
                ))
            }
            <input
                type="file"
                className="h-24 w-full text-blue-500 file:bg-blue-600 file:outline-none file:border-none file:text-white file:rounded-[5px] file:text-sm file:px-3 file:py-2 mt-5 text-transparent ml-14"
                onChange={(event) => {
                    setImages([...images,URL.createObjectURL(event.target.files[0])]);
                }}
            />
        </section>
    )
}