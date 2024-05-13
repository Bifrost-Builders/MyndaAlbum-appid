import RoutingButton from '../components/routingButton';
import GoogleSignInButton from './google/signInWithGoogle';

export default function LoginPage() {
    return (
<section className="h-screen w-full bg-black grid overflow-hidden relative">
  <div className="bg-gradient-to-r from-blue-500 via-blue-600 to-red-600 blur-3xl absolute left-1 w-full h-16"></div>
  <div className="bg-gradient-to-r from-blue-500 via-yellow-600 to-yellow-600 blur-3xl absolute top-3 w-full h-24"></div>
  
  
  <section className="grid place-items-center grid-cols-4 max-sm:grid-cols-3 md:grid-cols-6 gap-3 h-96 w-full absolute top-0 right-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/4 transition-all bg-black bg-opacity-60">
     <img className="rounded-[5px] h-44"  src="https://ucarecdn.com/9081d1d9-a5e6-4908-8257-2942acbc744e/" />
    <img className="rounded-[5px] mb-1 h-44"  src="https://ucarecdn.com/26e5f2f2-e7d7-409b-9af2-c9076115f48d/" />
    <img className="rounded-[5px] mt-1 h-44"  src="https://ucarecdn.com/bba381cd-35b0-44e0-94f9-2b625bb66746/" />
    <img className="rounded-[5px] mt-3 h-36"  src="https://ucarecdn.com/e34a5200-c2d4-4a69-94fa-8118126af4eb/" />
    <img className="rounded-[5px] mb-3 h-36"  src="https://ucarecdn.com/bf2fecec-9987-43cc-96de-4fb63de90581/" />
    <img className="rounded-[5px] mt-3 h-36"  src="https://ucarecdn.com/25e51ddb-f07e-4856-98f5-652272ed56c4/" />

    <img className="rounded-[5px] h-44"  src="https://ucarecdn.com/9081d1d9-a5e6-4908-8257-2942acbc744e/" />
    <img className="rounded-[5px] mb-1 h-44 "  src="https://ucarecdn.com/26e5f2f2-e7d7-409b-9af2-c9076115f48d/" />
    <img className="rounded-[5px] mt-1 h-44 "  src="https://ucarecdn.com/bba381cd-35b0-44e0-94f9-2b625bb66746/" />

     <img className="rounded-[5px] h-44 max-sm:hidden"  src="https://ucarecdn.com/9081d1d9-a5e6-4908-8257-2942acbc744e/" />
    <img className="rounded-[5px] mb-1 h-44 max-sm:hidden"  src="https://ucarecdn.com/26e5f2f2-e7d7-409b-9af2-c9076115f48d/" />
    <img className="rounded-[5px] mt-1 h-44 max-sm:hidden"  src="https://ucarecdn.com/bba381cd-35b0-44e0-94f9-2b625bb66746/" />
    <img className="rounded-[5px]  h-36 max-sm:hidden"  src="https://ucarecdn.com/e34a5200-c2d4-4a69-94fa-8118126af4eb/" />
    <img className="rounded-[5px] mb-7 h-36 max-sm:hidden"  src="https://ucarecdn.com/bf2fecec-9987-43cc-96de-4fb63de90581/" />
    <img className="rounded-[5px]  mb-4 h-36 max-sm:hidden"  src="https://ucarecdn.com/25e51ddb-f07e-4856-98f5-652272ed56c4/" />
    <img className="rounded-[5px] h-44 max-sm:hidden"  src="https://ucarecdn.com/9081d1d9-a5e6-4908-8257-2942acbc744e/" />
    <img className="rounded-[5px]  h-44 max-sm:hidden"  src="https://ucarecdn.com/26e5f2f2-e7d7-409b-9af2-c9076115f48d/" />
    <img className="rounded-[5px]  h-44 max-sm:hidden"  src="https://ucarecdn.com/bba381cd-35b0-44e0-94f9-2b625bb66746/" />
  </section>

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
                        
    <a href="" className="text-blue-600 font-semibold text-base hover:text-blue-700">Sign up</a>
    </section>
  </section>

</section>
        
    );
}