"use client"
import React from 'react';
import LeftSideNav from '../../components/userUi/leftSideNav';
import HandleImage from "@/app/components/userUi/imageUi/handleImage";
import TopNav from '@/app/components/userUi/topNav';
import Tree from './tree';

const Page = () => {
    return (
        <div>
            <LeftSideNav />
            <TopNav /> 
                
            <div className="flex justify-center items-center h-screen bg-gray-200">
                <div className="p-4 border border-gray-300 rounded-md bg-white">
                    <Tree />
                </div>
            </div>
        </div>
    );
};

export default Page;
