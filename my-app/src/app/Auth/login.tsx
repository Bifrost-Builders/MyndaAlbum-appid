// LoginPage.tsx
import React, { useState } from 'react';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({
        email: '',
        password: '',
    });

    const handleLogin = (e) => {
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
            // Add your login logic here
            console.log('Email:', email);
            console.log('Password:', password);
        }
    };

    return (
        <div className="flex justify-center items-center bg-white">
            <div className="border border-black rounded-md p-4 flex flex-col items-center">
                <h2 className="text-white mb-6 text-3xl p-4 bg-black inline-block">Login Page</h2>
                <form onSubmit={handleLogin} className="w-80">
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
                    <button type="submit" className="px-4 py-2 text-2xl border rounded-md bg-black text-white hover:text-gray-200 active:text-gray-300 hover:px-5 w-full">Login</button>
                </form>
            </div>
        </div>
    );
}
