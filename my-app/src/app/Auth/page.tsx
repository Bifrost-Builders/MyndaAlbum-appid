"use client"
import RoutingButton from '../components/routingButton';
import applelogo from "@/app/public/applelogo.png"
import Image from 'next/image';
/* 
<div classNameNameName="flex justify-center items-center h-screen">
            {!isLoggedIn ? (
                <div classNameNameName="text-center border border-black rounded-md p-10">
                    <h2 classNameNameName=" text-white mb-36 text-3xl p-10 border rounded-md bg-black">Login Page</h2>
                    <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
                        <div classNameNameName="mb-4">
                            <label classNameNameName="block text-2xl">Email:</label>
                            <input type="text" value={email} onChange={(e) => setemail(e.target.value)} classNameNameName="border border-gray-300 rounded-md p-1" />
                        </div>
                        <div classNameNameName="mb-4">
                            <label classNameNameName="block text-2xl">Password:</label>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} classNameNameName="border border-gray-300 rounded-md p-1" />
                        </div>
                        <button type="submit" classNameNameName="px-4 py-2 text-2xl border rounded-md bg-black text-white hover:text-gray-200 active:text-gray-300 hover:px-5">Login</button>
                    </form>
                </div>
            ) : (
                <div>
                    <h2>Welcome, {email}!</h2>
                    {/* You can render the content for logged-in users here */
               /*  </div>
            )}
        </div> */ 

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
    <div className="bg-black w-full h-20 absolute -bottom-24 blur-md"></div>

  </section>

  <section className="h-[23rem] max-sm:h-[23rem] w-full bg-black absolute bottom-0">

    <div className="text-white text-center">
      <h3 className="text-2xl font-bold">Kolbri</h3>
      <h1 className="text-3xl font-semibold">Let's get started</h1>
    </div>

    
    <section className="flex flex-col justify-center mt-5 items-center gap-y-4">
      <button className="bg-white text-black hover:bg-slate-100 h-12 w-60 rounded-[5px] font-bold text-lg flex justify-center items-center gap-x-3">
              <Image className="size-7" src={applelogo} alt="" height={ 200} width={200} />
      Sign in with Apple
    </button>
    <button className="bg-slate-100 text-black hover:bg-slate-100 h-12 w-60 rounded-[5px] font-bold text-lg flex justify-center items-center gap-x-3">
        <img className="size-7" src="https://via.placeholder.com/38x38" />
      Sign in with Google
    </button>
                    <RoutingButton
                        style='bg-blue-600 bg-opacity-30 text-white w-60 hover:bg-blue-700'
                        title='Sign in with email'
                        route='/Auth/email'
                    />
                        
    <a href="" className="text-blue-600 font-semibold text-base">Sign up</a>
    </section>
  </section>

</section>
        
    );
}