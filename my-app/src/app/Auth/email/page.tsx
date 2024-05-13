"use client"

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { app } from '../../firebase/firebaseConfig';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import Link from "next/link";

export default function EmailPage() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const auth = getAuth(app);
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
        });
        return () => unsubscribe();
    }, []);

    const handleLogin = async (e) => {
        e.preventDefault();
        const auth = getAuth(app);
        try {
            await signInWithEmailAndPassword(auth, email, password);
            setIsLoggedIn(true);
            router.push('/secure');
        } catch (error) {
            setError(error.message);
        }
    };

    useEffect(() => {
        if (isLoggedIn) {
            router.push('/secure');
        }
    }, [isLoggedIn]);

    return (
        <section className="h-screen w-full bg-black flex justify-center items-center">
            <section className="h-screen w-full bg-black flex justify-center items-center">
            <div className="bg-gradient-to-br z-30 from-sky-300 via-red-600 to-yellow-400 h-32 w-36 absolute left-4 blur-2xl animate-pulse"></div>
            <div className="bg-gradient-to-br z-30 from-blue-600 via-green-600 to-purple-400 h-32 w-36 absolute right-24 bottom-8 blur-2xl motion-safe:animate-pulse"></div>

            <div className="bg-gradient-to-br z-30 from-blue-600 via-green-600 to-purple-400 h-32 w-36 absolute right-0 top-8 blur-2xl motion-safe:animate-pulse"></div>
            <section className="h-full w-96 bg-slate-50 bg-opacity-5 px-10 pt-20">

                <h1 className="text-center text-5xl font-semibold text-white">Kolbir</h1>
            
                <form onSubmit={(e) => { e.preventDefault(); handleLogin(e); }} className="flex flex-col gap-y-4 my-24 gap-y-10 z-50">
                
                <div className="flex flex-col">
                <label htmlFor="Email" className="text-xl text-white font-semibold">Email</label>
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            name="Email"
                            placeholder="dingdong@gmail.com"
                            className="outline-none z-50 h-11 text-white rounded-[3px] pl-3 bg-black transition-all placeholder:text-slate-200 hover:border-[3px] border-slate-300 border-opacity-15" />
                </div>

                <div className="flex flex-col">
                <label htmlFor="Password" className="text-xl text-white font-semibold">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            name="Email"
                            placeholder="**********"
                            className="outline-none h-11 z-50 text-white rounded-[3px] pl-3 bg-black transition-all placeholder:text-slate-200 hover:border-[3px] border-slate-300 border-opacity-15" />
                        </div>
                        

                <button type="submit" className="bg-white h-11 rounded-md font-semibold text-lg mx-2 hover:bg-slate-200">Sign in</button>
                    
                <Link href="email/signup" className="text-center font-gray-300 text-white text-sm my-5">Dont have account, <span className="text-blue-700">Create one right here</span></Link>
                {error && <div className="text-red-500 text-sm mt-2 text-center">{error}</div>}
                    </form>
            </section>

            </section>
        </section>
    );
}
