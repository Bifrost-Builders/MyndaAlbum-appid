"use client"
import { useState } from "react";
import { app } from '../../../firebase/firebaseConfig';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";
import { useRouter } from 'next/navigation';

export default function EmailPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const router = useRouter();

    const handleSignUp = async (e) => {
        e.preventDefault();
        const auth = getAuth(app);
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            
            await signInWithEmailAndPassword(auth, email, password);

            router.push('/secure');
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <section className="h-screen w-full bg-black flex justify-center items-center">
            <div className="bg-gradient-to-br from-sky-300 via-red-600 to-yellow-400 h-32 w-36 absolute left-4 blur-2xl animate-pulse"></div>
            <div className="bg-gradient-to-br from-blue-600 via-green-600 to-purple-400 h-32 w-36 absolute right-24 bottom-8 blur-2xl motion-safe:animate-pulse"></div>
            <div className="bg-gradient-to-br from-blue-600 via-green-600 to-purple-400 h-32 w-36 absolute right-0 top-8 blur-2xl motion-safe:animate-pulse"></div>
            <section className="h-full w-96 bg-slate-50 bg-opacity-5 px-10 pt-20">
                <h1 className="text-center text-5xl font-semibold text-white">Kolbir</h1>
                <form onSubmit={handleSignUp} className="flex flex-col gap-y-4 my-24 gap-y-10">
                    <div className="flex flex-col">
                        <label htmlFor="Email" className="text-xl text-white font-semibold">Email</label>
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            name="Email"
                            placeholder="petur@gmail.com"
                            className="outline-none h-11 text-white rounded-[3px] pl-3 bg-black transition-all placeholder:text-slate-200 hover:border-[3px] border-slate-300 border-opacity-15"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="Password" className="text-xl text-white font-semibold">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            name="Password"
                            placeholder="**********"
                            className="outline-none h-11 text-white rounded-[3px] pl-3 bg-black transition-all placeholder:text-slate-200 hover:border-[3px] border-slate-300 border-opacity-15"
                        />
                    </div>
                    <button type="submit" className="bg-white h-11 rounded-md font-semibold text-lg mx-2 hover:bg-slate-200">Sign up</button>
                    <Link href="/Auth/email" className="text-center font-gray-300 text-white text-sm my-5">Already have an account? <span className="text-blue-700">Sign in here</span></Link>
                    {error && <div className="text-red-500 text-center text-sm mt-2">{error}</div>}
                </form>
            </section>
        </section>
    )
}
