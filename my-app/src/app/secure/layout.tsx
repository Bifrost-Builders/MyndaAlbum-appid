"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import Loading from '../loading';

const DashboardLayout = ({ children }) => {
    const router = useRouter();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const auth = getAuth();
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

    return (
        <div>        
            {children}
        </div>
    );
};

export default DashboardLayout;
