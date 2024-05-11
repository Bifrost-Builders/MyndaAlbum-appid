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

//Remove button and replace with button comp

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
    const [hasAlbum, setHasAlbum] = useState<boolean>(false);
    const [shouldPopModelBeOpen, setPopUpModal] = useState<boolean>(false);

    const handleAdd = () => {
        setPopUpModal(!shouldPopModelBeOpen);
    };

    return (
        <section className="h-screen bg-white relative">

            <section className={clsx(
                "h-96 text-white px-20 py-10 transition-all",
                {
                    "bg-black": shouldPopModelBeOpen === false,
                    "bg-blue-600": shouldPopModelBeOpen === true,
                }    
            )}>
                
                <nav className="flex justify-between w-full">
            
                <h1 className="text-2xl font-semibold">Kolbri</h1>

                <ul className="flex gap-12 max-sm:hidden">
                        {UserNavData.map((d, i) => (
                            <Link href={d.Url_Path} className={clsx(
                                "",
                                {
                                    'hover:text-blue-500': shouldPopModelBeOpen === false,
                                    'hover:text-slate-200': shouldPopModelBeOpen === true,
                                }
                            )}>{d.title}</Link>
                        ) )}
                </ul>

                <div className="h-8 w-8 bg-blue-500 rounded-full"></div>
                </nav>

                <div className="my-9">
                <h1 className="text-4xl font-bold max-sm:text-3xl max-sm:text-center">Welcome User </h1>
                <p className="text-sm text-gray-200 py-1 px-1 max-sm:text-center">5/10/2024</p>
                </div>

            </section>
            
            <section className={clsx(
                "absolute top-[26rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-xl px-8 py-8 w-5/6 max-md:top-[500px] max-sm:top-[430px] min-h-[25rem] mb-4",
                {
                    "bg-white": shouldPopModelBeOpen === false,
                    "bg-black": shouldPopModelBeOpen === true,
                }
            ) }>
                
                {
                    shouldPopModelBeOpen ?
                        <>
                            <section className="w-full text-white mb-6">

                                <nav className="flex justify-between items-center w-full">
                                    <div>  
                                    <h1 className="font-bold text-2xl">Create your travel</h1>
                                    <p>Here can you create your folder</p>
                                    </div>
                                    <Button
                                        size='sm'
                                        className='z-50'
                                        title='Exit'
                                        onClick={() => handleAdd()}
                                    >
                                        Close
                                    </Button>
                                </nav>

                                <HandleImage />

                                </section>
                        </>
                        :
                        <>
                            <section className="flex justify-between items-center mb-6">
                                <div>
                                    <h1 className="text-2xl font-semibold">Your Travel</h1>
                                    {
                                        hasAlbum ? <p className="text-gray-500 text-sm max-sm:text-xs">Here is an overview of your travel</p> : <p className='text-gray-500 text-sm max-sm:text-xs'>Currently nothing has been added</p>
                                    }
                                </div>
                                <Button
                                    variant='secondary'
                                    size='sm'
                                    title='Add album'
                                    onClick={() => handleAdd()}    
                                >Add travel
                                </Button>
                            </section>
                            
                            {
                                hasAlbum ? <input type="text" className="border border-gray-300 shadow-sm rounded-md h-10 w-full mb-4 px-2 outline-none hover:border-gray-400" placeholder="Search" /> : <></>

                            }

                            {
                                hasAlbum 
                                    ? <div>True</div>
                                    :   <div>
                                        <Image
                                            src={undraw_Upload_image_re_svxx}
                                            alt='No albums'
                                            height={200}
                                            width={400}
                                            className='m-auto'
                                        />
                                        </div>
                                
                            }

                            {
                                hasAlbum ? <div className="flex gap-3 text-gray-600 absolute right-8 bottom-3">
                                <p className="hover:text-slate-500">Preview</p>
                                <p className="hover:text-slate-500">Next</p>
                                </div> : <></>
                            }
                        </>
                        
                }

            </section>
        </section>
    );
}
