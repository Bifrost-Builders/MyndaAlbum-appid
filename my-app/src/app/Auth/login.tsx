import React, { useState } from 'react';
import { app } from '../firebase/firebaseConfig';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [errors, setErrors] = useState({
        email: '',
        password: '',
    });

    const handleLogin = async (e) => {
        e.preventDefault();

        const errorsCopy = { ...errors };

        // Basic form validation
        if (!email.includes('@') || email.trim() === '') {
            errorsCopy.email = 'Please enter a valid email address.';
        } else {
            errorsCopy.email = '';
        }

        if (password.trim() === '') {
            errorsCopy.password = 'Please enter your password.';
        } else {
            errorsCopy.password = '';
        }

        setErrors(errorsCopy);

        // If there are no errors, proceed with login
        if (!Object.values(errorsCopy).some((error) => error !== '')) {
            const auth = getAuth(app);
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    setIsLoggedIn(true);
                    // You can redirect the user to another page upon successful login.
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrors({email: errorMessage, password: errorMessage});
                });
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            {!isLoggedIn ? (
                <div className="text-center border border-black rounded-md p-10">
                    <h2 className=" text-white mb-36 text-3xl p-10 border rounded-md bg-black">Login Page</h2>
                    <form onSubmit={handleLogin}>
                        <div className="mb-4">
                            <label className="block text-2xl">Email:</label>
                            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className={`border rounded-md p-1 w-full ${errors.email ? 'border-red-500' : 'border-gray-300'}`} />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-2xl">Password:</label>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className={`border rounded-md p-1 w-full ${errors.password ? 'border-red-500' : 'border-gray-300'}`} />
                            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                        </div>
                        <button type="submit" className="px-4 py-2 text-2xl border rounded-md bg-black text-white hover:text-gray-200 active:text-gray-300 hover:px-5">Login</button>
                    </form>
                </div>
            ) : (
                <div>
                    <h2 className='text-white'>Welcome, {email}!</h2>
                    {/* You can render the content for logged-in users here */}
                </div>
            )}
        </div>
    );
}