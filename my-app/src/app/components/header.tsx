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
        <header className="bg-black text-white h-16 flex justify-between items-center px-10">

            <h1 className="text-3xl font-semibold">Name</h1>

            <div
                className="h-7 w-10 gap-2 relative"
                onClick={() => onMenuClick()}
            >

                <div className="bg-white h-1 w-full absolute right-0 top-0"></div>
                
                <div className="bg-white h-1 w-8 absolute right-0 top-3"></div>

                <div className="bg-white h-1 w-6 absolute right-0 top-6"></div>

            </div>

            <section className={menuState ? "bg-black text-white h-32 w-32 flex flex-col justify-center items-center text-lg font-semibold rounded-[8px] gap-2 transition-all delay-75 absolute top-[70px] right-3" : "hidden"}>

                <Link href={"/"} className="hover:text-gray-200 active:text-gray-300">Home</Link>
                
                <Link href={"/"} className="hover:text-gray-200 active:text-gray-300">About</Link>
    
                <Link href={"/"} className="hover:text-gray-200 active:text-gray-300">Help</Link>
    

            </section>

        </header>
    )
}