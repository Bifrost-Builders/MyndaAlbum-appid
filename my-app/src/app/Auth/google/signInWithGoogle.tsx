"use client"
import { signInWithPopup } from 'firebase/auth';
import { auth, googleAuthProvider } from '../../firebase/firebaseConfig';
import googleicon from "@/app/public/googleicon.png"
import Image from 'next/image';

const GoogleSignInButton = () => {
  const handleSignInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleAuthProvider);
    } catch (error) {
      console.error('Google Sign-in Error:', error);
    }
  };
  return (
      <button
          onClick={handleSignInWithGoogle}
          className="bg-slate-100 text-black hover:bg-slate-100 h-12 w-60 rounded-[5px] font-semibold text-lg flex justify-center items-center gap-x-3"
        >
          <Image
              className="size-7"
              alt='Google logo'
              src={googleicon}
              height={30}
              width={30}
          />

          Sign in with Google
      </button>
  );
};

export default GoogleSignInButton;
