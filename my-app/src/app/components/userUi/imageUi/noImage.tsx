import Image from "next/image"
import undraw_Edit_photo_re_ton4 from "@/app/public/undraw_Edit_photo_re_ton4.png"

export default function NoImage() {
    return (
        <section className="h-full w-full flex flex-col justify-center item-center">
              <h1 className="font-semibold text-sm">Currently no images in the album</h1>
              
            <Image
                src={undraw_Edit_photo_re_ton4}
                alt="No image uploaded"
                className="max-w-[600px] max-h-[600px] m-auto"
            />
            
              
        </section>
    )
}