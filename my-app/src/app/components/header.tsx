"use client";

import { useState,useEffect } from "react";

export default function Header() {
    const [scrollState, setScrollState] = useState<boolean>(false)
    
    useEffect(() => {
        window.addEventListener('scroll', stickNavbar);
      }, []);
    
    const stickNavbar = () => {
        window.innerHeight > 150 ? setScrollState(true) : setScrollState(false);
    }

    return (
        <header className={scrollState ? "bg-black h-14 w-full text-white flex justify-between items-center px-10 fixed" : "bg-black h-14 text-white flex justify-between items-center px-10 mx-10 my-5 rounded-lg"}>

        </header>
    )
}