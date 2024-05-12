import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { usePathname } from "next/navigation";

import undraw_sweet_home_dkhr from "@/app/public/undraw_Upload_image_re_svxx.png";
import undraw_Edit_photo_re_ton4 from "@/app/public/undraw_Edit_photo_re_ton4.png";
import undraw_add_friends_re_3xte from "@/app/public/undraw_add_friends_re_3xte.png";

const topNavLinks = [
    {
        imgPath: undraw_sweet_home_dkhr,
        route: "/secure",
        label: "Original",
    },
    {
        imgPath: undraw_Edit_photo_re_ton4,
        route: "/secure",
        label: "Tree",
    },
];

const TopNav = () => {
    const pathName = usePathname();
    return (
        <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white px-4 py-3">
            <div className="flex justify-between items-center">
                <Link href="/" className="cursor-pointer">
                    <h1>Horizon</h1>
                </Link>

                <div className="flex gap-4">
                    {topNavLinks.map((item) => {
                        const isActive = pathName === item.route;
                        return (
                            <Link
                                href={item.route}
                                key={item.label}
                                className={clsx(
                                    "flex items-center gap-2 px-4 py-3",
                                    {
                                        "bg-blue-500": isActive,
                                    }
                                )}
                            >
                                <Image 
                                    src={item.imgPath}
                                    alt={item.label}
                                    width={32}
                                    height={32}
                                />
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
                </div>
            </div>
        </nav>
    );
};

export default TopNav;
