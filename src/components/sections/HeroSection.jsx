import React from 'react';
import { motion } from 'framer-motion';
import { useWedding } from '../../contexts/WeddingContext';

const HeroSection = () => {
  const { weddingData } = useWedding();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900 opacity-90" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-champagne-300 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0.5, 1.5, 0.5],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-moonlight-100 mb-4">
            {weddingData.bride.name}
            <span className="block text-champagne-300 text-3xl md:text-4xl lg:text-5xl font-light my-4">
              &
            </span>
            {weddingData.groom.name}
          </h1>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mb-12"
        >
          <p className="text-moonlight-300 text-lg md:text-xl font-light tracking-wide mb-2">
            Together under the stars
          </p>
          <div className="w-24 h-px bg-champagne-300 mx-auto mb-8" />
          <p className="text-moonlight-200 text-xl md:text-2xl font-serif">
            {weddingData.date}
          </p>
          <p className="text-moonlight-300 text-lg mt-2">
            {weddingData.venue.name}
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            className="px-8 py-3 bg-champagne-300 text-navy-900 font-medium rounded-full hover:bg-champagne-200 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            RSVP Now
          </motion.button>
          <motion.button
            className="px-8 py-3 border border-moonlight-300 text-moonlight-300 font-medium rounded-full hover:bg-moonlight-300 hover:text-navy-900 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Details
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-6 h-10 border-2 border-moonlight-300 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-2 bg-champagne-300 rounded-full mt-2"
            animate={{
              y: [0, 16, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;