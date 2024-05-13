import Link from 'next/link';
import RoutingButton from '../../components/routingButton';
import GoogleSignInButton from '../google/signInWithGoogle';

export default function AuthBlock() {
    return (
        <section className="h-[25rem] max-sm:h-[27rem] w-full bg-black absolute bottom-0 ">
          <div className='h-12 w-full bg-gradient-to-t from-black via-slate-950 to-transparent blur'></div>
                <div className="text-white text-center pt-5 bg-black">
            <h3 className="text-2xl font-bold pb-2">Kolbri</h3>
            <h1 className="text-3xl font-semibold">Let's get started</h1>
          </div>
          <section className="flex flex-col justify-center mt-5 items-center gap-y-4 bg-black">
                  <GoogleSignInButton />
                  

                          <RoutingButton
                              style='bg-blue-600 bg-opacity-20 text-white w-60 hover:bg-blue-700'
                              title='Sign in with email'
                              route='/Auth/email'
                          />
                              
          <Link href="/Auth/email/signup" className="text-blue-600 font-semibold text-base hover:text-blue-700">Sign up</Link>
          </section>
        </section>
    )
}