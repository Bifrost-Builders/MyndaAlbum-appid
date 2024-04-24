"use client";
import { useState } from "react"
import Button from "./button";
import Link from 'next/link'

export default function Header() {

    const [menuState, setMenuState] = useState<boolean>(false);
    
    //Check if menu is open or closed and then set right value based on that.
    function onMenuClick(){
        menuState ? setMenuState(false) : setMenuState(true);
    }

    return (
        <header className="text-white h-16 flex justify-between items-center px-10 bg-blue-600">

            <h1 className="font-bold text-2xl">Kolbri</h1>

            <Link href="/" className="h-fit text-center py-2 w-24 bg-white text-black font-bold rounded-[5px]">Sign in</Link>

        </header>
    )
}