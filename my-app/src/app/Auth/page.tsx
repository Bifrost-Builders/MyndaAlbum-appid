// Page.tsx
"use client"
import React, { useState } from 'react';
import Login from './login/login';
import SignUp from './signup/signup';

export default function Page() {
    const [isSignUp, setIsSignUp] = useState(false);

    const handleToggleForm = () => {
        setIsSignUp((prev) => !prev);
    };

    return (
        <div className="flex justify-center items-center h-screen bg-white">
            <div className="p-4 flex flex-col items-center border border-black rounded-md bg-black">
                {isSignUp ? (
                    <SignUp />
                ) : (
                    <Login />
                )}
                <button onClick={handleToggleForm} className="mt-4 px-4 py-2 text-xl border rounded-md bg-white text-black hover:text-gray-200 active:text-gray-300 hover:px-5">
                    {isSignUp ? "Switch to Login" : "Switch to Sign Up"}
                </button>
            </div>
        </div>
    );
}
