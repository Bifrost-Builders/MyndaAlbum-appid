"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaUserFriends, FaImage, FaChartLine, FaCog, FaSignOutAlt, FaPlusSquare } from 'react-icons/fa';
import Link from 'next/link';
import Button from '@/app/components/baseComp/button';

//Ekki ready

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const sidebarVariants = {
    open: { width: '12rem' },
    closed: { width: '4.5rem' },
  };

  const itemVariants = {
    open: { opacity: 1 },
    closed: { opacity: 1 },
  };

  return (
    <div className="flex h-screen z-40">
      <motion.nav
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        variants={sidebarVariants}
        className="h-screen bg-black flex flex-col items-center gap-6 py-5 px-3 transition-width"
      >
        <div className="flex justify-between items-center w-full px-3 cursor-pointer" onClick={toggleSidebar}>
          {isOpen && <span className="text-2xl text-white font-semibold">Kolbri</span>}
          <FaBars className="text-white text-2xl" />
        </div>

        <motion.div
          className="flex flex-col gap-4 item-center w-full px-[4px]"
          initial="closed"
          animate={isOpen ? 'open' : 'closed'}
          variants={itemVariants}
          transition={{ duration: 0.8 }}
        >
          <Link href="/" className="flex items-center gap-2 cursor-pointer hover:bg-gray-900 p-2 rounded-lg">
            <FaImage className="text-white" />
            {isOpen && <span className="text-white font-semibold">Home</span>}
          </Link>

          <Link href="/" className="flex items-center gap-2 cursor-pointer hover:bg-slate-900 p-2 rounded-lg">
            <FaUserFriends className="text-white" />
            {isOpen && <span className="text-white font-semibold">Friends</span>}
          </Link>

          <Link href="/" className="flex items-center gap-2 cursor-pointer hover:bg-gray-900 p-2 rounded-lg">
            <FaChartLine className="text-white" />
            {isOpen && <span className="text-white font-semibold">Statistics</span>}
          </Link>

          <Link href="/" className="flex items-center gap-2 cursor-pointer hover:bg-gray-900 p-2 rounded-lg">
            <FaCog className="text-white" />
            {isOpen && <span className="text-white font-semibold">Settings</span>}
          </Link>

          <Link href="/" className="flex items-center gap-2 cursor-pointer hover:bg-gray-900 p-2 rounded-lg">
            <FaSignOutAlt className="text-white" />
            {isOpen && <span className="text-white font-semibold">Logout</span>}
          </Link>

          <Link href="/secure/addalbum" className="flex items-center gap-2 cursor-pointer p-2 rounded-lg">
            {isOpen ? <Button title="Add album" /> : <FaPlusSquare className="text-white" />}
          </Link>
        </motion.div>
      </motion.nav>
    </div>
  );
};

export default Sidebar;
