"use client";
import Link from "next/link";

type buttonProperty = {
    text: string,
    path: "/",
}

//Margin-Auto
export default function Button({path,text}) {
    return (
        <Link
            href={path}
            className={"m-auto bg-white text-black font-bold h-12 w-40 text-center text-xl rounded-[5px] hover:bg-slate-50 active:bg-slate-100 pt-2"}
            >
            {text}
        </Link>
    )
}