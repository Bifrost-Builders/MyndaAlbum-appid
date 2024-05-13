import { motion } from "framer-motion";
import Link from "next/link";
import { LinkRoutes } from "@/app/lib/sharedInfo";
import { UserNavData } from "@/app/lib/sharedInfo";
import { useRouter } from 'next/navigation'
import { getAuth, onAuthStateChanged,signOut } from 'firebase/auth';
//const router = useRouter()

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

export const MenuItem = ({ i, index, isUser }) => {
  const router = useRouter();
    
  const handleLogout = async () => {
      const auth = getAuth();
      try {
          await signOut(auth);
          router.push('/');
          console.log("Log out")
      } catch (error) {
          console.error('Error signing out:', error);
      }
  };
  
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="list-none mb-[20px] cursor-pointer m-auto p-0 font-semibold"
    >
      {
        isUser ? 
        <Link href={`/${UserNavData[index].Url_Path}`} onClick={UserNavData[index].action === "yes" ? handleLogout : () => {}}>
          { i }
        </Link> :
        i === "Sign in" ? 
        <span className="text-blue-600">
          <Link href={`/${LinkRoutes[index]}`}>{ i }</Link>
        </span> : 
        <Link href={`/${LinkRoutes[index]}`}>{ i }</Link>
      }
    </motion.li>
  );
};

