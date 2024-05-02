/* 

    Exports block with location,title,image,date

    *default value !(src)! . Not found

*/

type ImageBlockProps = {
    src: string,
    location?: string,
    title?: string,
    date?: string,

}

export default function ImageBlock({src,location = "Not found",title = "Not found",date = "Not found"}: ImageBlockProps) {
    
    return (
            <div
                className="h-[200px] w-full m-auto bg-center bg-no-repeat bg-cover col-span-3 rounded-[5px] relative text-white max-sm:row-span-2 max-sm:col-span-1"
                style={{ backgroundImage: `url(${src})` }}>
                <h1 className="absolute top-1 left-2 font-semibold">{ location }</h1>
                <h1 className="absolute bottom-6 text-2xl left-2 font-bold">{ title}</h1>
                <p className="text-sm absolute bottom-2 left-2 font-semibold">{ date }</p>
            </div>
    )

}