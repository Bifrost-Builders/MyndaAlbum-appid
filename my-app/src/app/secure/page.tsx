import ImageUploader from "../components/filetest";
import ImageIntake from "../components/imageIntake";
import RoutingButton from "../components/routingButton";

export default function UserPage() {
    return (
        <main className="min-h-screen h-full bg-black  py-10 px-10">
            
            <h1 className="text-2xl font-bold">Image</h1>

            <ImageIntake />
            <RoutingButton title="Go back"/>

        </main>
    )
}