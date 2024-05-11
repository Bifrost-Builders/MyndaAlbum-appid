"use client";
import LeftSideNav from '@/app/components/userUi/leftSideNav'
import HandleImage from "@/app/components/userUi/imageUi/handleImage"
import blabla from "@/app/components/userUi/imageUi/showImages"
import Image from "next/image"
import ShowImages from '@/app/components/userUi/imageUi/showImages'
import { useEffect, useState } from 'react';
import Blabla from '@/app/components/userUi/imageUi/homePage'
//Use client ekki gott!
import Link from 'next/link'

//New link? add here
const UserNavData = [
    {
        title: "Overview",
        Url_Path: "/secure",
    },
    {
        title: "Settings",
        Url_Path: "",
    },
    {
        title: "Log out",
        Url_Path: "",
    },
];

//Data static needs change
//Logic for next and preview
//When log in is comp then update User into dync
//Add travel should be modal
//Black bg should be good icon or photo
//Search logic
export default function homePage() {
    return (
        <section className="h-screen bg-white relative">

            <section className="h-96 bg-black text-white px-20 py-10">
                
                <nav className="flex justify-between w-full">
            
                <h1 className="text-2xl font-semibold">Kolbri</h1>

                <ul className="flex gap-12 max-sm:hidden">
                        {UserNavData.map((d, i) => (
                            <Link href={d.Url_Path} className='hover:text-blue-500'>{d.title}</Link>
                        ) )}
                </ul>

                <div className="h-8 w-8 bg-blue-500 rounded-full"></div>
                </nav>

                <div className="my-9">
                <h1 className="text-4xl font-bold max-sm:text-3xl max-sm:text-center">Welcome User </h1>
                <p className="text-sm text-gray-200 py-1 px-1 max-sm:text-center">5/10/2024</p>
                </div>

            </section>

            <section className="bg-white absolute top-[26rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-xl px-8 py-8 w-5/6 max-md:top-[500px] max-sm:top-[600px]">
                
                <section className="flex justify-between items-center mb-6">
                    <div>
                        <h1 className="text-2xl font-semibold">Your Travel</h1>
                        <p className="text-gray-500 text-sm max-sm:text-xs">Here is an overview of your travel</p>
                    </div>
                    <button className="bg-black text-white h-11 w-24 rounded-md hover:bg-gray-900">Add travel</button>
                </section>

                <input type="text" className="border border-gray-300 shadow-sm rounded-md h-10 w-full mb-4 px-2 outline-none hover:border-gray-400" placeholder="Search" />

                <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-5">
                    <div className="h-44 rounded-md p-4 flex flex-col justify-end">
                        <div className="bg-black h-40 rounded-md mb-2"></div>
                        <h1 className="text-xl font-semibold">Spain</h1>
                    </div>
                    <div className="h-44 rounded-md p-4 flex flex-col justify-end">
                        <div className="bg-black h-40 rounded-md mb-2"></div>
                        <h1 className="text-xl font-semibold">Italy</h1>
                    </div>
                    <div className="h-44 rounded-md p-4 flex flex-col justify-end">
                        <div className="bg-black h-40 rounded-md mb-2"></div>
                        <h1 className="text-xl font-semibold">Iceland</h1>
                    </div>
                    
                </div>

                <div className="flex gap-3 text-gray-600 absolute right-8 bottom-3">
                <p className="hover:text-slate-500">Preview</p>
                <p className="hover:text-slate-500">Next</p>
                </div>
            </section>
        </section>
    );
}
