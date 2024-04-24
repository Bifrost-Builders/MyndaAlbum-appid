import Image from 'next/image'
export default function Search() {
    return (
        <div className="bg-white text-blue-700 h-14 w-96 text-2xl font-semibold flex justify-start items-center px-10 gap-4 rounded-full hover:bg-slate-100">
            <Image
                src="/img/searchIcon.webp"
                alt=''
                height={30}
                width={35}
                className='rounded-xl'
            ></Image>
            <h1>Find your group</h1>
        </div>
    )
}