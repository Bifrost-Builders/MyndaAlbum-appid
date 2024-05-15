"use client";
import Link from "next/link"
import { LinkNames } from "@/app/lib/sharedInfo"
import { LinkRoutes } from "@/app/lib/sharedInfo"
import { useRouter } from "next/navigation";
import { appName } from "@/app/lib/sharedInfo";
import clsx from "clsx";

export default function PcHeader({isSticky}) {
    const Router = useRouter();
    const excludedLinks = ['Home', 'Find your group'];

    const FilteredLinks = LinkNames.map((title, index) => ({ title, route: LinkRoutes[index] }))
    .filter(link => !excludedLinks.includes(link.title)); //Filter

    return (
        <header
        className={clsx(
            'relative flex h-20 w-full items-center justify-between bg-black px-20 text-xl text-white max-md:hidden',
            {
              'sticky top-0 left-0 z-50 shadow-lg transition-all duration-300': isSticky, 
            }
          )}>
            <h1 className="text-3xl font-bold">{appName}</h1>

            <div className="flex items-center gap-14">
                <ul className="flex gap-x-10 font-semibold text-slate-200">
                    
                {FilteredLinks.map((link, index) => (
                    <Link key={index} href={link.route}>
                        {link.title}
                    </Link>
                    ))}
                    
                </ul>

                <button className="my-1 h-11 w-36 rounded-[5px] bg-white text-base font-bold text-black hover:-translate-y-1 hover:bg-slate-100 hover:transition-all"
                    onClick={() => {Router.push(LinkRoutes[4])}}
                >
                    Find your group
                </button>
            </div>
        </header>
    )
}