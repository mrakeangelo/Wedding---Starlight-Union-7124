import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMail, FiX } = FiIcons;

const FloatingRSVP = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show after scrolling past first section
      setIsVisible(scrollY > windowHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToRSVP = () => {
    const rsvpSection = document.getElementById('rsvp');
    if (rsvpSection) {
      rsvpSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 100 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                className="absolute bottom-20 right-0 w-80 bg-navy-800 bg-opacity-95 backdrop-blur-sm rounded-lg p-6 border border-galaxy-400 border-opacity-30 shadow-2xl"
              >
                <button
                  onClick={() => setIsExpanded(false)}
                  className="absolute top-4 right-4 text-moonlight-400 hover:text-moonlight-200 transition-colors"
                >
                  <SafeIcon icon={FiX} className="w-5 h-5" />
                </button>
                
                <h3 className="font-serif text-xl text-moonlight-100 mb-2">
                  Ready to RSVP?
                </h3>
                <p className="text-moonlight-300 text-sm mb-4">
                  Don't miss out on our special day! Let us know you'll be there.
                </p>
                
                <div className="space-y-3">
                  <motion.button
                    onClick={scrollToRSVP}
                    className="w-full px-4 py-3 bg-champagne-300 text-navy-900 font-semibold rounded-lg hover:bg-champagne-200 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    RSVP Now
                  </motion.button>
                  
                  <div className="text-center">
                    <p className="text-moonlight-400 text-xs">
                      Deadline: January 15, 2024
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-16 h-16 bg-champagne-300 rounded-full flex items-center justify-center shadow-2xl hover:bg-champagne-200 transition-colors animate-glow"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <SafeIcon icon={FiMail} className="w-8 h-8 text-navy-900" />
          </motion.button>

          {/* Notification dot */}
          <motion.div
            className="absolute -top-1 -right-1 w-4 h-4 bg-galaxy-400 rounded-full flex items-center justify-center"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [1, 0.7, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <div className="w-2 h-2 bg-white rounded-full" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingRSVP;