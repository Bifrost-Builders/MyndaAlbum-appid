import Image from "next/image"
import undraw_Upload_image_re_svxx from "@/app/public/undraw_Upload_image_re_svxx.png"

export default function NoImage() {
    return (
        <section className="h-full w-full flex flex-col justify-center item-center">
              <h1 className="font-semibold text-sm">Currently no images has been selected</h1>
              
            <Image
                src={undraw_Upload_image_re_svxx}
                alt="No image uploaded"
                className="max-w-[600px] max-h-[600px] m-auto"
            />
            
              
        </section>
    )
}