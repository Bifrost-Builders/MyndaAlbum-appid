// SignUp.tsx
import { app } from '../../firebase/firebaseConfig';
import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [username, setUsername] = useState('');
    const [profilePic, setProfilePic] = useState<File | null>(null);

    const [errors, setErrors] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        fullName: '',
        username: '',
    });

    const handleSignUp = (e) => {
        e.preventDefault();
        
        const errorsCopy = { ...errors };

        if (!email.includes('@') || email.trim() === '') {
            errorsCopy.email = 'Please enter a valid email address.';
        } else {
            errorsCopy.email = '';
        }

        if (password.length < 8 || password.trim() === '') {
            errorsCopy.password = 'Password must be at least 8 characters long.';
        } else {
            errorsCopy.password = '';
        }

        if (confirmPassword !== password) {
            errorsCopy.confirmPassword = 'Passwords do not match.';
        } else {
            errorsCopy.confirmPassword = '';
        }

        if (fullName.trim() === '') {
            errorsCopy.fullName = 'Please enter your full name.';
        } else {
            errorsCopy.fullName = '';
        }

        if (username.trim() === '') {
            errorsCopy.username = 'Please enter a username.';
        } else {
            errorsCopy.username = '';
        }

        setErrors(errorsCopy);

        if (!Object.values(errorsCopy).some((error) => error !== '')) {
            // All fields are valid, proceed with sign-up
            const formData = new FormData();
            formData.append('email', email);
            formData.append('password', password);
            formData.append('confirmPassword', confirmPassword);
            formData.append('fullName', fullName);
            formData.append('username', username);
            if (profilePic) {
                formData.append('profilePic', profilePic);
            }
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log('Created User:', username);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log('Error:', errorMessage);
                });
            
            // Now you can submit formData to your backend or perform any necessary actions
            console.log('Form Data:', formData);
        }
    };

    return (
        <div className="flex justify-center items-center bg-white">
            <div className="border border-black rounded-md p-4 flex flex-col items-center">
                <h2 className="text-white mb-6 text-3xl p-4 bg-black inline-block">Sign Up Page</h2>
                <form onSubmit={handleSignUp} className="w-80">
                    <div className="mb-4">
                        <label className="block text-2xl">Full Name:</label>
                        <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} className={`border rounded-md p-1 w-full ${errors.fullName ? 'border-red-500' : 'border-gray-300'}`} />
                        {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-2xl">Username:</label>
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className={`border rounded-md p-1 w-full ${errors.username ? 'border-red-500' : 'border-gray-300'}`} />
                        {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
                    </div>
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
                    <div className="mb-4">
                        <label className="block text-2xl">Confirm Password:</label>
                        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className={`border rounded-md p-1 w-full ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'}`} />
                        {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-2xl">Profile Picture (optional):</label>
                        <input type="file" accept="image/*" onChange={(e) => setProfilePic(e.target.files[0])} className="border rounded-md p-1 w-full" />
                    </div>
                    <button type="submit" className="px-4 py-2 text-2xl border rounded-md bg-black text-white hover:text-gray-200 active:text-gray-300 hover:px-5 w-full">Sign Up</button>
                </form>
            </div>
        </div>
    );
}
