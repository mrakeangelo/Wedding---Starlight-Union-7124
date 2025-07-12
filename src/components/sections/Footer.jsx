import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiHeart, FiStar } = FiIcons;

const Footer = () => {
  return (
    <footer className="py-16 px-4 relative border-t border-galaxy-400 border-opacity-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="flex items-center justify-center space-x-4 mb-6">
            <SafeIcon icon={FiStar} className="w-6 h-6 text-champagne-300 animate-twinkle" />
            <SafeIcon icon={FiHeart} className="w-8 h-8 text-galaxy-400 animate-float" />
            <SafeIcon icon={FiStar} className="w-6 h-6 text-champagne-300 animate-twinkle" />
          </div>
          
          <h3 className="font-serif text-2xl text-moonlight-100 mb-4">
            Thank You for Being Part of Our Story
          </h3>
          
          <p className="text-moonlight-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Your presence in our lives has made our journey more beautiful. 
            We can't wait to celebrate this magical moment with you under the stars.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="border-t border-galaxy-400 border-opacity-20 pt-8"
        >
          <p className="text-moonlight-400 text-sm mb-2">
            Starlight Union – A Dark Mode Wedding Template by Mrake Agency
          </p>
          <p className="text-moonlight-500 text-xs">
            Made with love and stardust ✨
          </p>
        </motion.div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-champagne-300 rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;