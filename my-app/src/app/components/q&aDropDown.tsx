"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Question = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="rounded-lg overflow-hidden border-2 border-slate-900">
      <motion.div
        className="question p-4 cursor-pointer flex justify-between items-center text-white font-semibold"
        onClick={toggleOpen}
        whileTap={{ scale: 0.95 }}
      >
        <span className="text-lg">{question}</span>
        <motion.div
          className="icon text-white"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          &#x25BE;
        </motion.div>
      </motion.div>
      <motion.div
        className="answer p-4 bg-blue-700 bg-opacity-20 text-white font-semibold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        {isOpen && <p>{answer}</p>}
      </motion.div>
    </div>
  );
};

const FAQ = () => {
  const faqData = [
    {
      question: 'What are some user interactions provided by MyndaAlbum-appið?',
      answer: `MyndaAlbum-appið provides various user interactions, such as:
      - Registration: Users are offered the opportunity to create an account to have their own photo timeline.
      - Login: Registered users can log in to the app to access and manage their timeline.
      - Image Additions: Users can add images to their timeline and write text accompanying each image.
      - Timeline Sharing: Users can share their timeline with other users, allowing them to view and enjoy the images.
      - Friend Additions: Users are offered the opportunity to add friends to the app to share their timeline with them.`,
    },
    {
      question: 'How can users collaborate in MyndaAlbum-appið?',
      answer: `Users can collaborate in MyndaAlbum-appið through various features, such as:
      - Friend Additions: Users can add friends to the app to share their timeline with them, allowing for collaboration in viewing and enjoying images.
      - Timeline Sharing: Users can share their timeline with other users, such as family members or friends, allowing for collaboration in viewing and enjoying images.`,
    },
    {
      question: 'What are some text-related features in MyndaAlbum-appið?',
      answer: `MyndaAlbum-appið offers several text-related features, including:
      - Text Additions to Images: Users can add text to each image to explain or enhance narratives about them.
      - Text Additions to Timeline: Users can write text to accompany their timeline, providing additional context or stories.`,
    },
    {
      question: 'How does MyndaAlbum-appið contribute to user experience and diversity?',
      answer: `MyndaAlbum-appið lays the foundation for a user-friendly and diverse experience in creating and sharing memories with images and related text.`,
    },
  ];

  return (
    <div className="h-full pb-12 w-full bg-black pt-5 px-5 sm:px-20 flex flex-col gap-y-5 z-50">
      {faqData.map((faq, index) => (
        <Question key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FAQ;
