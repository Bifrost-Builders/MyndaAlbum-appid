"use client";
import LeftSideNav from '@/app/components/userUi/leftSideNav'
import HandleImage from "@/app/components/userUi/imageUi/handleImage"
import blabla from "@/app/components/userUi/imageUi/showImages"
import Image from "next/image"
import ShowImages from '@/app/components/userUi/imageUi/showImages'
import { useEffect, useState } from 'react';
import Blabla from '@/app/components/userUi/imageUi/homePage'

export default function homePage() {
    const [files, setFiles] = useState([]);

    // Fetch or define the files array here...

    return (
        <section className="min-h-screen flex h-full bg-white">
            <LeftSideNav />
            <div className='h-full w-full px-10 py-5 flex flex-col justify-center item-center'>
                <h1 className="text-2xl font-bold">Welcome to your homepage</h1>
                <Blabla/>
            </div>
        </section>
    );
}
