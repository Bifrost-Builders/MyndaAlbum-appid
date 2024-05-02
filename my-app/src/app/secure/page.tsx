import ImageIntake from "../components/imageIntake";
import Input from "../components/imageButton";
export default function UserPage() {
    return (
        <main className="h-screen bg-black py-10 px-10">

            <h1 className="text-2xl font-bold">Image</h1>

            <ImageIntake />

        </main>
    )
}