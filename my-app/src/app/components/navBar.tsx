import Link from "next/link"
export default function NavBar() {
    return (
        <section className="bg-black text-white h-96 grid grid-cols-2 px-10 py-14">

        <div>
            <h1 className="font-bold text-lg">App features</h1>
            <Link href={""} className="font-semibold">Slideshow</Link>
            <button className="block bg-white text-black h-9 w-24 rounded-full mt-1 font-semibold">Tree</button>
        </div>

        <div className="pt-6">
            <h1 className="font-bold text-lg" >How to</h1>
            <Link href={""} className="font-semibold">Create a account</Link>
            <Link href={""} className="font-semibold text-gray-300">Reset password</Link>
        </div>

        <div>
            <h1 className="font-bold text-lg">Company</h1>
            <button className="bg-white text-black h-9 w-24 rounded-full mt-2 font-semibold">About</button>
        </div>

        </section>
    )
}