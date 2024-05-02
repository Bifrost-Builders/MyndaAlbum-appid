"use client";
import { useState } from "react"
import Link from 'next/link'

export default function Header() {

    const [menuState, setMenuState] = useState<boolean>(false);
    
    //Check if menu is open or closed and then set right value based on that.
    function onMenuClick(){
        menuState ? setMenuState(false) : setMenuState(true);
    }

    return (
        <header className="bg-black h-12 w-full top-0 z-50 flex justify-center items-center gap-48 text-white relative">

            <div className={menuState ? "bg-black bg-opacity-70 absolute left-14 top-14 h-32 w-32 flex flex-col justify-center px-9 rounded-2xl" : "hidden"}>
                <Link href="" className="font-semibold hover:text-slate-200">About</Link>
                <Link href="" className="font-semibold hover:text-slate-200">FAQ</Link>
                <Link href="" className="font-semibold hover:text-slate-200">Demo</Link>
            </div>

            <div className="absolute h-10 w-10 left-20 flex justify-center flex-col gap-1.5"
            onClick={() => onMenuClick()}>

                    <div className="h-1 w-full bg-slate-700"></div>
                    <div className="h-1 w-8 bg-slate-600"></div>
                    <div className="h-1 w-5 bg-slate-300"></div>

            </div>

            <h1 className="text-2xl font-serif font-bold">Kolbri</h1>

            <div className="absolute right-20">
            <input type="text" className="h-9 w-52 bg-black border-2 border-slate-900 rounded-full px-4 font-semibold" placeholder="Search for group" />
            </div>



        </header>
    )
}