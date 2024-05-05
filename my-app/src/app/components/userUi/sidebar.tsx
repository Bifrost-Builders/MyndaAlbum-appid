"use client";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { usePathname } from "next/navigation";

import undraw_sweet_home_dkhr from "@/app/public/undraw_Upload_image_re_svxx.png"; // Corrected path
import undraw_Edit_photo_re_ton4 from "@/app/public/undraw_Edit_photo_re_ton4.png";
import undraw_add_friends_re_3xte from "@/app/public/undraw_add_friends_re_3xte.png";

const sideBarLinks = [
    {
        imgPath: undraw_sweet_home_dkhr,
        route: "/secure",
        label: "Home",
    },
    {
        imgPath: undraw_Edit_photo_re_ton4,
        route: "/",
        label: "Add Image",
    },
    {
        imgPath: undraw_add_friends_re_3xte,
        route: "/",
        label: "Add Friends",
    },
];

export default function SideBar() {
    const pathName = usePathname();
    return (
            <nav className="h-screen"> 
                <Link href="/" className="mb-12 cursor-pointer">
                    <h1>Horizon</h1>
                </Link>

                {sideBarLinks.map((item) => {
                    const isActive = pathName === item.route;
                    return (
                        <Link
                            href={item.route}
                            key={item.label}
                            className={clsx(
                                "p-1 rounded-[5px] flex items-center gap-4", // Horizontal alignment
                                {
                                    "bg-blue-500": isActive,
                                }
                            )}
                        >
                            <div className="relative size-7"> 
                                <Image 
                                    src={item.imgPath}
                                    alt={item.label}
                                    fill
                                />
                            </div>

                            <p className={clsx(
                                'text-slate-100',
                                {
                                    "text-white": isActive === true
                                }
                            )}>
                                {item.label}
                            </p>


                        </Link>
                    );
                })}
            </nav>
    );
}
