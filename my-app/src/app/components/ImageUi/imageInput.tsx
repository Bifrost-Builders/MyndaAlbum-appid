"use client";
import { useState } from "react";

export default function ImageInput() {

    //Used to store current selecton (one image at time)
    const [image, setImage] = useState(null);

    return (
        <section className="max-h-[300px] h-fit w-[250px] bg-white rounded-2xl px-3 py-3">
            {image && (
                <img
                    src={URL.createObjectURL(image)}
                    alt=""
                    className="rounded-xl"
                />
            )}
            <input
                type="file"
                className="h-24 w-full text-blue-500 file:bg-blue-600 file:outline-none file:border-none file:text-white file:rounded-[5px] file:text-sm file:px-3 file:py-2 mt-5 text-transparent ml-14"
                onChange={(event) => {
                    setImage(event.target.files[0]);
                }}
            />
        </section>
    )
}