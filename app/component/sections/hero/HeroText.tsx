'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

const HeroSocial = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="text-center lg:text-left z-10 mb-8"
    >
      <p className="text-2xl sm:text-3xl text-black font-bold mb-2">
        Hi, I am
      </p>
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4 leading-tight">
        Farraz Fauzan Mangali
      </h1>
      <p className="text-lg font-semibold sm:text-xl lg:text-2xl text-black hover:text-gray-500 transition-colors">
        Data Science Student
      </p>
    </motion.div>
  );
};

export default HeroSocial;
