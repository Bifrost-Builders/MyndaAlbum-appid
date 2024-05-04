"use client"

import React, { useState } from 'react';


export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        // Here you can add your authentication logic.
        // For simplicity, I'm just checking if both username and password are non-empty.
        if (username && password) {
            setIsLoggedIn(true);
            // You can redirect the user to another page upon successful login.
        } else {
            // You can show an error message to the user if login fails.
            alert('Please enter both username and password.');
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            {!isLoggedIn ? (
                <div className="text-center border border-black rounded-md p-10">
                    <h2 className=" text-white mb-36 text-3xl p-10 border rounded-md bg-black">Login Page</h2>
                    <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
                        <div className="mb-4">
                            <label className="block text-2xl">Username:</label>
                            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="border border-gray-300 rounded-md p-1" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-2xl">Password:</label>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="border border-gray-300 rounded-md p-1" />
                        </div>
                        <button type="submit" className="px-4 py-2 text-2xl border rounded-md bg-black text-white hover:text-gray-200 active:text-gray-300 hover:px-5">Login</button>
                    </form>
                </div>
            ) : (
                <div>
                    <h2>Welcome, {username}!</h2>
                    {/* You can render the content for logged-in users here */}
                </div>
            )}
        </div>
    );
}
