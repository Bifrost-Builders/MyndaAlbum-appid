"use client"
import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import Loading from '../loading';
import { app } from '@/app/firebase/firebaseConfig'

const DashboardLayout = ({ children }) => {
    const router = useRouter();
    const [user, setUser] = useState(null);

    useEffect(() => {
        //Newly untested changed
        const auth = getAuth(app);
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                router.push('/Auth');
            }
        });
        return () => unsubscribe();
    }, []);
  
    if (!user) {
        return <Loading />;
    }

    const isHome = usePathname();

    return (
        <div className={isHome ? 'bg-black' : ''}>        
            {children}
        </div>
    );
};

export default DashboardLayout;
