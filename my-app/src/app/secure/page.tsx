"use client";
import LeftSideNav from '@/app/components/userUi/leftSideNav'
import HandleImage from "@/app/components/userUi/imageUi/handleImage"
//import blabla from "@/app/components/userUi/imageUi/showImages"
import Image from "next/image"
import ShowImages from '@/app/components/userUi/imageUi/showImages'
import { useEffect, useState } from 'react';
//import BlaBla from '@/app/components/userUi/imageUi/homePage'
//Use client ekki gott!
import Link from 'next/link'
import undraw_Upload_image_re_svxx from "@/app/public/undraw_Upload_image_re_svxx.png"
import clsx from 'clsx';
import Button from '../components/baseComp/button';

import MobileHeader from '../components/header/navSmall/mobileHeader';
import { getDatabase, ref, onValue } from 'firebase/database';
import { getUserAlbums } from '../ev1/page'

//Remove button and replace with button comp
//Add profile pic for smaller dev?
//New link? add here

//Data static needs change
//Logic for next and preview
//When log in is comp then update User into dync
//Add travel should be modal
//Black bg should be good icon or photo
//Search logic

//Linkar i mobile nav sleppa localhost!


import { readFromFirebase } from '../lib/scripts'
import { MobileSideBar } from '../components/header/navSmall/sideBar';
import { useCycle } from 'framer-motion';
import { getAuth, onAuthStateChanged,signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import HandleUserView from '../components/userUi/handleUserView';


export default function homePage() {
    const router = useRouter();
    const [bgMode, cycleBgMode] = useCycle("white", "black");
    const [bgCard, cycleBgCard] = useCycle("black", "blue-600")
    const [today, setToday] = useState<string>("");
    const [hasAlbum, setHasAlbum] = useState<boolean>(false);
    const [user, setUser] = useState(null);
    const [userName, setUserName] = useState(null);
    const [shouldPopModelBeOpen, setPopUpModal] = useState<boolean>(false);
    const [userAlbums, setUserAlbums] = useState([]);


    const handleAdd = () => {
        setPopUpModal(!shouldPopModelBeOpen);
        cycleBgMode();
        cycleBgCard();
        console.log("clicked")
    };

    const handleLogout = async () => {
        try {
            const auth = getAuth();
            await signOut(auth);
            router.push('/');
            console.log("Log out")
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };
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
            action: () => handleLogout(),
            Url_Path: "",
        },
    ];

    const getTodayDay = () => {
        const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        //const d = new Date();
        //console.log(weekday[d.getDay()]);
        return weekday[new Date().getDay()];
    }
    
    useEffect(() => {

        const auth = getAuth();
        const i = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                setToday(getTodayDay());
                if (user["displayName"] != null) {
                    setUserName(user["displayName"])
                } else {
                    setUserName(user["email"])
                };
                console.log(user);
            } else {
                router.push("/Auth");
            }
        })
        return () => i();
    }, [])

    useEffect(() => {
        const fetchUserAlbums = async () => {
            try {
                console.log("asr: ", userName)
                const albums = await getUserAlbums(userName);
                setUserAlbums(albums);
                //Mogulega checka fyrst
                setHasAlbum(true);
            } catch (error) {
                console.error(error);
            }
        };
    
        fetchUserAlbums();
    }, [userName, ]);

    console.log("User album",userAlbums)

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
                                UserNavData.map((item, index) => (
                                    <Link
                                    href={item.Url_Path}
                                        key={index}
                                        className='hover:text-blue-500'
                                    onClick={item.action}
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

                        <h1 className="text-3xl font-semibold">Welcome { userName}</h1>
                <p>Today is { today }</p>

                </section>

                </nav>

            </div>

            <section className={`bg-${bgMode} transition-all min-h-96 h-auto absolute inset-y-1/2 inset-x-20 inset-y-20 transform -translate-y-1/2 shadow-xl rounded-[12px] top-[28rem] max-md:inset-x-10`}>
                    
                {shouldPopModelBeOpen ?
                    
                    <div className='h-full w-full px-5 py-5 z-50'>
                        
                        <div className={`text-white flex justify-between items-center max-md:flex-col max-md:text-center max-md:gap-y-3`}>
                            <div className="">
                                <h1 className="text-xl font-semibold max-md:text-lg">Let&apos;s add your travel</h1>
                                <p className="text-sm max-md:text-xs">Click to start selecting photos</p>
                            </div>

                            <Button
                                title='Cancel'
                                size='sm'
                                onClick={() => handleAdd()}
                            />

                        </div>

                        <HandleImage userName={userName} modal={ handleAdd } />
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
                        {userAlbums.length != 0 ?
                            <HandleUserView userAlbums={ userAlbums} />
                            :
                            <Image
                                src={undraw_Upload_image_re_svxx}
                                alt=''
                                height={200}
                                width={255}
                                className='h-fit w-fit m-auto'
                            ></Image>
                        }
                    </div>
                }

            </section>
        </section>

    );
}