import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiStar, FiUser, FiHeart } = FiIcons;

const Guestbook = () => {
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [wishes, setWishes] = useState([
    {
      id: 1,
      name: "Sarah & Tom",
      message: "Wishing you both a lifetime of love and happiness! ✨",
      timestamp: "2 hours ago"
    },
    {
      id: 2,
      name: "The Johnson Family",
      message: "So excited to celebrate with you both! Your love story is truly magical.",
      timestamp: "5 hours ago"
    },
    {
      id: 3,
      name: "Emily & David",
      message: "May your marriage be filled with all the right ingredients: love, laughter, and endless adventures! 💫",
      timestamp: "1 day ago"
    }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() && name.trim()) {
      const newWish = {
        id: Date.now(),
        name,
        message,
        timestamp: "Just now"
      };
      setWishes([newWish, ...wishes]);
      setMessage('');
      setName('');
    }
  };

  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-moonlight-100 mb-4">
            Leave a Message in the Stars
          </h2>
          <p className="text-moonlight-300 text-lg max-w-2xl mx-auto">
            Share your wishes and blessings for our journey ahead
          </p>
        </motion.div>

        {/* Message form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div className="bg-navy-800 bg-opacity-40 p-8 rounded-lg backdrop-blur-sm border border-galaxy-400 border-opacity-20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-moonlight-200 text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <div className="relative">
                    <SafeIcon icon={FiUser} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-champagne-300 w-5 h-5" />
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-navy-700 bg-opacity-50 border border-galaxy-400 border-opacity-30 rounded-lg text-moonlight-100 placeholder-moonlight-400 focus:outline-none focus:border-champagne-300 focus:ring-2 focus:ring-champagne-300 focus:ring-opacity-20 transition-all duration-300"
                      placeholder="Enter your name"
                    />
                  </div>
                </div>
                <div className="md:flex md:items-end">
                  <motion.button
                    type="submit"
                    className="w-full px-6 py-3 bg-champagne-300 text-navy-900 font-semibold rounded-lg hover:bg-champagne-200 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send to the Stars
                  </motion.button>
                </div>
              </div>

              <div>
                <label className="block text-moonlight-200 text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows="4"
                  className="w-full px-4 py-3 bg-navy-700 bg-opacity-50 border border-galaxy-400 border-opacity-30 rounded-lg text-moonlight-100 placeholder-moonlight-400 focus:outline-none focus:border-champagne-300 focus:ring-2 focus:ring-champagne-300 focus:ring-opacity-20 transition-all duration-300 resize-none"
                  placeholder="Write your wishes for the happy couple..."
                />
              </div>
            </form>
          </div>
        </motion.div>

        {/* Wishes display */}
        <div className="space-y-6">
          {wishes.map((wish, index) => (
            <motion.div
              key={wish.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-navy-800 bg-opacity-30 p-6 rounded-lg backdrop-blur-sm border border-galaxy-400 border-opacity-20 hover:border-champagne-300 hover:border-opacity-30 transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-champagne-300 bg-opacity-20 rounded-full flex items-center justify-center">
                  <SafeIcon icon={FiHeart} className="w-5 h-5 text-champagne-300" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-moonlight-100">
                      {wish.name}
                    </h4>
                    <span className="text-moonlight-400 text-sm">
                      {wish.timestamp}
                    </span>
                  </div>
                  <p className="text-moonlight-200 leading-relaxed">
                    {wish.message}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative stars */}
        <div className="mt-12 flex justify-center space-x-4">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            >
              <SafeIcon icon={FiStar} className="w-6 h-6 text-champagne-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Guestbook;