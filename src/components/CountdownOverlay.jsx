import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiX } = FiIcons;

const CountdownOverlay = ({ onClose }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set wedding date (example: June 15, 2024)
    const weddingDate = new Date('2024-06-15T18:00:00');
    
    const updateCountdown = () => {
      const now = new Date();
      const difference = weddingDate - now;
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-navy-900 bg-opacity-95 backdrop-blur-sm z-50 flex items-center justify-center"
    >
      {/* Starfield background */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
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
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative max-w-2xl mx-auto text-center px-8"
      >
        <button
          onClick={onClose}
          className="absolute top-0 right-0 text-moonlight-400 hover:text-moonlight-200 transition-colors"
        >
          <SafeIcon icon={FiX} className="w-6 h-6" />
        </button>

        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-4xl md:text-5xl text-moonlight-100 mb-4"
        >
          Until We Say "I Do"
        </motion.h2>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8"
        >
          {[
            { label: 'Days', value: timeLeft.days },
            { label: 'Hours', value: timeLeft.hours },
            { label: 'Minutes', value: timeLeft.minutes },
            { label: 'Seconds', value: timeLeft.seconds }
          ].map((item, index) => (
            <div key={item.label} className="text-center">
              <motion.div
                className="w-20 h-20 md:w-24 md:h-24 bg-champagne-300 bg-opacity-20 rounded-full flex items-center justify-center mb-2 mx-auto backdrop-blur-sm border border-champagne-300 border-opacity-30"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
              >
                <span className="text-2xl md:text-3xl font-bold text-champagne-300">
                  {item.value.toString().padStart(2, '0')}
                </span>
              </motion.div>
              <p className="text-moonlight-300 text-sm font-medium">
                {item.label}
              </p>
            </div>
          ))}
        </motion.div>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-moonlight-300 text-lg mb-8"
        >
          Every moment brings us closer to our magical day
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center space-x-4"
        >
          <motion.button
            onClick={onClose}
            className="px-8 py-3 bg-champagne-300 text-navy-900 font-semibold rounded-full hover:bg-champagne-200 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Continue Exploring
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default CountdownOverlay;