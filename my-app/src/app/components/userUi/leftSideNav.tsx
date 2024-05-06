"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

// Ensure these images have transparent backgrounds
import undraw_sweet_home_dkhr from '@/app/public/undraw_Upload_image_re_svxx.png';
import undraw_Edit_photo_re_ton4 from '@/app/public/undraw_Edit_photo_re_ton4.png';
import undraw_add_friends_re_3xte from '@/app/public/undraw_add_friends_re_3xte.png';
import undraw_walking_around_25f5 from '@/app/public/undraw_walking_around_25f5.png';

const sideBarLinks = [
    {
        imgPath: undraw_sweet_home_dkhr,
        route: '/secure',
        label: 'Home',
    },
    {
        imgPath: undraw_Edit_photo_re_ton4,
        route: '/secure/addalbum',
        label: 'Add story',
    },
    {
        imgPath: undraw_add_friends_re_3xte,
        route: '/ev1',
        label: 'Add Friends',
    },
    {
      imgPath: undraw_walking_around_25f5,
      route: '/',
      label: 'Sign out',    
    }
];

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathName = usePathname();

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const sidebarVariants = {
        open: { width: '13rem', transition: { duration: 0.4, ease: 'easeInOut' } },
        closed: { width: '6rem', transition: { duration: 0.4, ease: 'easeInOut' } },
    };

    return (
        <motion.div
            initial={isOpen ? 'open' : 'closed'}
            animate={isOpen ? 'open' : 'closed'}
            variants={sidebarVariants}
            className="flex h-screen z-40 shadow-md transition-width bg-white"
        >
            <motion.nav
                className="flex flex-col items-center px-3 py-5"
            >
                <div
                    className="flex justify-between items-center w-full px-4 cursor-pointer mb-12"
                    onClick={toggleSidebar}
                >
                    {isOpen && (
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: { duration: 0.3 } }}
                            className="text-3xl text-blue-600 font-semibold"
                        >
                            Kolbri
                        </motion.span>
                    )}
                    <FaBars className="text-black text-3xl" />
                </div>

                <motion.div
                    className="flex flex-col gap-5 items-start w-full"
                >
                    {sideBarLinks.map((item) => {
                        const isActive = pathName === item.route;

                        return (
                            <Link
                                href={item.route}
                                key={item.label}
                                className={clsx(
                                    'h-12 w-full rounded-[5px] flex items-center gap-4 px-4',
                                    {
                                        'bg-blue-600 hover:bg-blue-700 text-white': isActive,
                                        'bg-gray-200 hover:bg-gray-300 text-gray-800': !isActive,
                                    }
                                )}
                            >
                                <div className="relative w-8 h-8">
                                    <Image 
                                        src={item.imgPath}
                                        alt={item.label}
                                        fill
                                        className="object-contain"
                                    />
                                </div>

                                {isOpen && (
                                    <p
                                        className={clsx(
                                            'font-semibold text-[16px]',
                                            {
                                                'text-white': isActive,
                                                'text-gray-800': !isActive,
                                            }
                                        )}
                                    >
                                        {item.label}
                                    </p>
                                )}
                            </Link>
                        );
                    })}
                </motion.div>
            </motion.nav>
        </motion.div>
    );
};

export default Sidebar;
