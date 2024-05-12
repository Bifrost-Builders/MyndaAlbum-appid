'use client';
import LeftSideNav from '../../components/userUi/leftSideNav';
import HandleImage from "@/app/components/userUi/imageUi/handleImage";
import Image from "next/image";
import TopNav from '@/app/components/userUi/topNav';
import SideBar from '@/app/components/userUi/sidebar';

export default function addAlbumPage() {
    return (
        <section className="relative min-h-screen h-full grid grid-cols-[4.5rem_auto_1fr]">
            <LeftSideNav />
            <TopNav /> 
            <SideBar />
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10'>
                <div className="px-20 py-5 flex flex-col justify-center items-center">
                    <h1 className="text-2xl font-bold mb-4">Welcome to add album page</h1>
                    <h1>Images:</h1>
                    <div className="mt-8" style={{ marginTop: "150px" }}>
                        <HandleImage/>
                    </div>
                </div>
            </div>
        </section>
    )
}
