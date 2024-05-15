import RoutingButton from "@/app/components/routingButton"
export default function SettingsPage() {
    return (
        <section className="h-screen w-full bg-black grid place-items-center">

            <h1 className="text-4xl text-blue-700 font-bold">Setings not connected</h1>
            <RoutingButton route="/secure" title="Go back" />
        </section>
    )
}