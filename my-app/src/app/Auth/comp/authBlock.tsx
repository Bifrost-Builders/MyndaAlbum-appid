import Link from 'next/link';
import RoutingButton from '../../components/routingButton';
import GoogleSignInButton from '../google/signInWithGoogle';

export default function AuthBlock() {
    return (
        <section className="h-[25rem] w-full absolute bottom-0 ">
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Berkshire+Swash&display=swap" rel="stylesheet"/>

            <div className='h-6 w-full bg-black blur-lg '></div>
                <div className="text-white text-center pt-5 bg-black">
            <h3 className="text-2xl font-bold pb-2 font-berkshire">Kolbri</h3>
            <h1 className="text-3xl font-semibold">Let&apos;s get started</h1>
          </div>
          <section className="flex flex-col justify-center mt-5 items-center gap-y-4 bg-black">
                  <GoogleSignInButton />
                  

                          <RoutingButton
                              style='bg-blue-600 bg-opacity-20 text-white w-64 h-14 hover:bg-blue-700 hover:bg-opacity-40'
                              title='Sign in with email'
                              route='/Auth/email'
                          />
                              
          <Link href="/Auth/email/signup" className="text-blue-600 font-semibold text-base hover:text-blue-700">Sign up</Link>
          </section>
        </section>
    )
}