'use client';
import LeftSideNav from "../components/userUi/leftSideNav"
import SideBar from "../components/userUi/sidebar"
import TopNav from "../components/userUi/topNav"
        
export default function UserPage() {
    return (
        <main className="min-h-screen h-full grid grid-cols-[4.5rem_1fr]">
            <TopNav />
            <LeftSideNav /> 
            <SideBar />
            <div>          
                <section className="h-screen w-full bg-slate-100">

                </section>
            </div>

        </main>
    )
}