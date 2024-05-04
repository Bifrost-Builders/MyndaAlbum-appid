import HandleImage from "@/app/components/userUi/imageUi/handleImage"

export default function addAlbumPage() {
    return (
        <section className="min-h-screen h-full bg-white px-10 pb-10 py-5">
            <h1 className="text-2xl font-bold">Welcome to add album page</h1>
            <HandleImage />
        </section>
    )
}