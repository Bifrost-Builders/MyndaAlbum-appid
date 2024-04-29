"use client";
import Link from "next/link"
import clsx from "clsx"
import { useRouter } from "next/navigation"

/*

    Button comp,
    Props = color(Black, White, Blue), size(sm, lg)

*/

type ButtonProps = {
    title: string,
    color?: "Black" | "White" | "Blue",
    size?: "sm" | "lg",
    route?: string,
}


export default function Button({title,color = "Black", size = "lg", route = "/"}: ButtonProps) {
    const router = useRouter();
    const handleClick = () => {
        router.push(route);
    }

    return (
        <button
            className={clsx(
                'h-12 w-56 rounded-[5px] font-bold text-xl hover:-translate-y-1 transition-all',
                {
                    'bg-black hover:bg-slate-900 text-white': color === "Black",
                    'bg-white text-black hover:bg-slate-100': color === "White",
                    'bg-blue-600 hover:bg-blue-700 text-white': color === "Blue",
                }
            )}
            onClick={() => handleClick()}
        >
        {title}
        </button>
    )
}