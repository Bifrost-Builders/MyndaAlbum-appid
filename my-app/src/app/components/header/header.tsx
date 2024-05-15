"use client";

import { useState, useEffect } from "react";
import MobileHeader from "./navSmall/mobileHeader";
import PcHeader from "./navBig/pcnavbar";

export default function Header() {
  const [isPhone, setIsPhone] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const updateMedia = () => {
    setIsPhone(window.innerWidth < 1000);
  };

  const handleScroll = () => {
    const threshold = 200; 
    setIsSticky(window.scrollY > threshold);
  };

  useEffect(() => {
    updateMedia(); 
    window.addEventListener("resize", updateMedia);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", updateMedia);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>{isPhone ? (
      <MobileHeader isSticky={isSticky}  />
    ) : (
        <PcHeader isSticky={ isSticky} />
    )}</>
  );
}
