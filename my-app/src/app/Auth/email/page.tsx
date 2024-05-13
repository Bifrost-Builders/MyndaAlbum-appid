"use client"
import { useState } from "react";
import { app } from '../../firebase/firebaseConfig';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
//Handle if userr is log in or when user logs in
export default function emailPage() {
    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [error, setError] = useState(null);
    
    const handleLogin = async () => {
        const auth = getAuth(app);
        try {
            await signInWithEmailAndPassword(auth, email, password);
            setIsLoggedIn(true);
            // You can redirect the user to another page upon successful login.
        } catch (error) {
            setError(error.message);
            alert('Login failed. Please check your email and password.');
        }
    };
    return (
        <section className="h-screen w-full bg-black flex justify-center items-center">
            <div className="bg-gradient-to-br from-sky-300 via-red-600 to-yellow-400 h-32 w-36 absolute left-4 blur-2xl animate-pulse"></div>
            <div className="bg-gradient-to-br from-blue-600 via-green-600 to-purple-400 h-32 w-36 absolute right-24 bottom-8 blur-2xl motion-safe:animate-pulse"></div>

            <div className="bg-gradient-to-br from-blue-600 via-green-600 to-purple-400 h-32 w-36 absolute right-0 top-8 blur-2xl motion-safe:animate-pulse"></div>
            <section className="h-full w-96 bg-slate-50 bg-opacity-5 px-10 pt-20">

                <h1 className="text-center text-5xl font-semibold text-white">Kolbir</h1>
            
                <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }} className="flex flex-col gap-y-4 my-24 gap-y-10">
                
                <div className="flex flex-col">
                <label htmlFor="Email" className="text-xl text-white font-semibold">Email</label>
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setemail(e.target.value)}
                            name="Email"
                            placeholder="dingdong@gmail.com"
                            className="outline-none h-11 text-white rounded-[3px] pl-3 bg-black transition-all placeholder:text-slate-200 hover:border-[3px] border-slate-300 border-opacity-15" />
                </div>

                <div className="flex flex-col">
                <label htmlFor="Password" className="text-xl text-white font-semibold">Email</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            name="Email"
                            placeholder="**********"
                            className="outline-none h-11 text-white rounded-[3px] pl-3 bg-black transition-all placeholder:text-slate-200 hover:border-[3px] border-slate-300 border-opacity-15" />
                </div>

                <button type="submit" className="bg-white h-11 rounded-md font-semibold text-lg mx-2 hover:bg-slate-200">Click here</button>
                </form>

            </section>

            </section>
    )
}