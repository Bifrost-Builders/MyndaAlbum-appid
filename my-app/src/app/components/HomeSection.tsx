"use client"
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Button from './baseComp/button';

const HomeSection = () => {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.6;

      if (section1Ref.current) {
        const section1Position = section1Ref.current.getBoundingClientRect().top + window.scrollY;
        if (scrollPosition > section1Position) {
          controls1.start({ opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } });
        } else {
          controls1.start({ opacity: 0, y: 50, transition: { duration: 0.3, ease: 'easeIn' } });
        }
      }

      if (section2Ref.current) {
        const section2Position = section2Ref.current.getBoundingClientRect().top + window.scrollY;
        if (scrollPosition > section2Position) {
          controls2.start({ opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } });
        } else {
          controls2.start({ opacity: 0, y: 50, transition: { duration: 0.3, ease: 'easeIn' } });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls1, controls2]);

  return (
    <section className="bg-black min-h-screen w-full h-full grid py-3 px-5 gap-y-10 sm:px-20">
      <section
        ref={section1Ref}
        className="h-full md:grid-cols-2 md:grid"
      >
        <motion.img
          src="https://ucarecdn.com/6b223be7-1fa3-4594-b0d5-55308ff73d7e/"
          className="h-80 w-full rounded-2xl"
          layout
          animate={controls1}
          initial={{ opacity: 0, y: 50 }}
        />
        <motion.div className="md:ml-5" layout animate={controls1} initial={{ opacity: 0, y: 50 }}>
          <h1 className="text-white text-left font-bold text-2xl my-2">Store your memories</h1>
          <p className="text-slate-50 text-left font-semibold">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto magni sapiente ducimus sit nostrum, suscipit voluptatem facilis neque eveniet fugiat est rerum.</p>
        </motion.div>
      </section>

      <section
        ref={section2Ref}
        className="h-full w-full md:grid-cols-2 md:grid"
      >
        <motion.img
          src="https://ucarecdn.com/52bd53fb-cdd1-4b56-997f-255ab1e2e8d0/"
          className="h-80 w-full rounded-2xl md:order-2"
          layout
          animate={controls2}
          initial={{ opacity: 0, y: 50 }}
        />
        <motion.div className="md:ml-5 md:order-1" layout animate={controls2} initial={{ opacity: 0, y: 50 }}>
          <h1 className="text-white text-left font-bold text-2xl my-2">Store the info</h1>
          <p className="text-slate-50 text-left font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet earum, corrupti id aliquam nostrum placeat laboriosam in accusamus autem quae atque repellendus.</p>
        </motion.div>
          </section>
    </section>
  );
};

export default HomeSection;
