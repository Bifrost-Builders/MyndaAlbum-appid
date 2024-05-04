/* 

    Exports block with country,city,image,province

    *default value !(src)! . Not found

*/


type Details = {
    country?: string;
    city?: string;
    province?: string;
  };
  
type ImageBlockProps = {
    src: string;
    info?: Details;
  };

export default function ImageBlock({ src, info = {} }: ImageBlockProps) {
    const { country = "Not found", city = "Not found", province = "Not found" } = info;
    
    return (
      <div
                className="h-[200px] w-full m-auto bg-center bg-no-repeat bg-cover col-span-3 rounded-[5px] relative text-white max-sm:row-span-2 max-sm:col-span-1 image-wrapper"
                style={{ backgroundImage: `url(${src})` }}>
                <h1 className="absolute top-1 left-2 font-semibold">{ country }</h1>
                <h1 className="absolute bottom-6 text-2xl left-2 font-bold">{ city}</h1>
                <p className="text-sm absolute bottom-2 left-2 font-semibold">{ province }</p>
            </div>
    )

}