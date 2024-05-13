"use client";
import LeftSideNav from '@/app/components/userUi/leftSideNav'
import HandleImage from "@/app/components/userUi/imageUi/handleImage"
import blabla from "@/app/components/userUi/imageUi/showImages"
import Image from "next/image"
import ShowImages from '@/app/components/userUi/imageUi/showImages'
import { use, useEffect, useState } from 'react';
import Blabla from '@/app/components/userUi/imageUi/homePage'
//Use client ekki gott!
import Link from 'next/link'
import undraw_Upload_image_re_svxx from "@/app/public/undraw_Upload_image_re_svxx.png"
import clsx from 'clsx';
import Button from '../components/baseComp/button';

import MobileHeader from '../components/header/navSmall/mobileHeader';

//Remove button and replace with button comp
//Add profile pic for smaller dev?
//New link? add here
const UserNavData = [
    {
        title: "Overview",
        Url_Path: "/secure",
    },
    {
        title: "Settings",
        Url_Path: "/secure/settings",
    },
    {
        title: "Log out",
        Url_Path: "/",
    },
];

//Data static needs change
//Logic for next and preview
//When log in is comp then update User into dync
//Add travel should be modal
//Black bg should be good icon or photo
//Search logic

//Linkar i mobile nav sleppa localhost!

import {readFromFirebase} from '../lib/scripts'
import { MobileSideBar } from '../components/header/navSmall/sideBar';
import { useCycle } from 'framer-motion';
export default function homePage() {
    const [bgMode, cycleBgMode] = useCycle("white", "black");
    const [bgCard, cycleBgCard] = useCycle("black", "blue-600")
    const [today, setToday] = useState<string>("");
    const [hasAlbum, setHasAlbum] = useState<boolean>(false);
    
    const [shouldPopModelBeOpen, setPopUpModal] = useState<boolean>(false);
    
    const handleAdd = () => {
        setPopUpModal(!shouldPopModelBeOpen);
        cycleBgMode();
        cycleBgCard();
        console.log("clicked")
    };

    const getTodayDay = () => {
        const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        //const d = new Date();
        //console.log(weekday[d.getDay()]);
        return weekday[new Date().getDay()];
    }
    
    useEffect(() => {
        setToday(getTodayDay());
    }, [])

    return (
        <section className="min-h-screen w-full overflow-hidden ">

            <div className="h-screen w-full">

                <nav className={`bg-${bgCard} transition-all h-96 flex justify-between items-start text-slate-200 px-20 py-5 md:py-12 max-md:px-10`}>

                <div className="flex justify-between items-center w-full md:hidden z-50">

                    <h1 className="text-3xl font-semibold">Kolbri</h1>

                    <div className='text-black'>
                        <MobileSideBar userMenu={true} />
                    </div>

                </div>

                    <div className={`bg-${bgCard} flex items-center justify-between w-full max-md:hidden`}>
                    <h1 className="text-4xl font-semibold">Kolbri</h1>

                <ul className="text-[19px] flex gap-x-11 pt-2">
                    {
                                UserNavData.map((item) => (
                                    <Link
                                        href={item.Url_Path}
                                        className='hover:text-blue-500'
                                    >{item.title}</Link>
                          ))      
                                
                    }
                </ul>

                
                <Image
                    height={10}
                    src={undraw_Upload_image_re_svxx}
                    alt=''
                    width={10}
                    className='size-10 rounded-full'
                />
                        
                </div>
                
                <section className="absolute top-36 md:top-40">

                <h1 className="text-3xl font-semibold">Welcome user</h1>
                <p>Today is { today }</p>

                </section>

                </nav>

            </div>

            <section className={`bg-${bgMode} transition-all min-h-96 h-auto absolute inset-y-1/2 inset-x-20 inset-y-20 transform -translate-y-1/2 shadow-xl rounded-[12px] top-[28rem] max-md:inset-x-10`}>
                    
                {shouldPopModelBeOpen ?
                    
                    <div className='h-full w-full px-5 py-5 z-50'>
                        
                        <div className={`text-white flex justify-between items-center max-md:flex-col max-md:text-center max-md:gap-y-3`}>
                            <div className="">
                                <h1 className="text-xl font-semibold max-md:text-lg">Let's add your travel</h1>
                                <p className="text-sm max-md:text-xs">Click to start selecting photos</p>
                            </div>

                            <Button
                                title='Cancel'
                                size='sm'
                                onClick={() => handleAdd()}
                            />

                        </div>

                        <HandleImage />
                    </div>
                    
                    :

                    <div className="min-h-full w-full px-5 py-5 mb-12">

                        <div className="flex justify-between items-center max-md:flex-col max-md:text-center max-md:gap-y-3">
                            <div className="">
                                <h1 className="text-xl font-semibold max-md:text-lg">Your travel is here</h1>
                                <p className="text-sm max-md:text-xs">Currently you have no travel albums</p>
                            </div>

                            <Button
                                title='Add travel'
                                variant='secondary'
                                size='sm'
                                onClick={() => handleAdd()}
                            />

                        </div>

                        <Image
                            src={undraw_Upload_image_re_svxx}
                            alt=''
                            height={250}
                            width={300}
                            className='h-fit w-fit m-auto'
                        ></Image>

                    </div>
                }

            </section>

            </section>

    );
}
