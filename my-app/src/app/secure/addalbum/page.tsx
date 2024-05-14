import LeftSideNav from '../../components/userUi/leftSideNav'
import HandleImage from "@/app/components/userUi/imageUi/handleImage"

export default function addAlbumPage() {
    const userName = ""; // vantaði, svo það kæmi ekki problem
    const modal = ""; // vantaði, svo það kæmi ekki problem
    return (
        <section className="min-h-screen flex h-full bg-white">
            <LeftSideNav />
            <div className='h-full w-full px-10 py-5 flex flex-col justify-center item-center'>
                <h1 className="text-2xl font-bold">Welcome to add album page</h1>
                <HandleImage userName={userName} modal={modal}/>
            </div>
        </section>
    )
}