"use client"
import Button from "./baseComp/button"
export default function Footer() {
    return (
        <section className="sm:px-20 bg-black px-5">
            <section className='h-24 w-full bg-black flex justify-between item-center'>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Berkshire+Swash&display=swap" rel="stylesheet"/>
                    <h1 className='text-blue-700 font-berkshire text-3xl'>TimelineX</h1>
                    <Button size='sm' title='Go up' onClick={() => (
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                    })
                    )}></Button>
                </section>
        </section>
    )
}