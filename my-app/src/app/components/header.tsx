"use client";
import { useState } from "react"
import Link from 'next/link'
import NavBar from "./navBar";

//Navbar comp komid bara a eft a laga stadse.
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

            <section className={menuState ? "h-fit w-full block" : "hidden"}>

                <NavBar />

            </section>

        </header>
    )
}