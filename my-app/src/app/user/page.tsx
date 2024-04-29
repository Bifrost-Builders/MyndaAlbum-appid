import Button from "../components/HomeUi/button"
import ImageData from "../components/ImageUi/imageInput"
import Album from "../components/ImageUi/album"
export default function User() {
    return (
        <main className="h-screen w-full">

            <div className="bg-blue-600 h-44 text-white px-10 shadow-sm">
                <h1 className="py-2 text-2xl">Welcome !Name!</h1>
            </div>

            <section className="h-full w-full">
                <Album></Album>
            </section>            

        </main>
    )
}