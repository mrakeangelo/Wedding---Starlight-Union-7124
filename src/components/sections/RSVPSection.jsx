import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiUser, FiMail, FiPhone, FiUsers, FiCheck } = FiIcons;

const RSVPSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    attendance: '',
    guests: 1,
    dietary: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('RSVP submitted:', formData);
    setSubmitted(true);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (submitted) {
    return (
      <section className="py-24 px-4 relative" id="rsvp">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-20 h-20 bg-champagne-300 rounded-full flex items-center justify-center mx-auto mb-6">
              <SafeIcon icon={FiCheck} className="w-10 h-10 text-navy-900" />
            </div>
            <h2 className="font-serif text-4xl text-moonlight-100 mb-4">
              Thank You!
            </h2>
            <p className="text-moonlight-300 text-lg">
              Your RSVP has been received. We can't wait to celebrate with you!
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 px-4 relative" id="rsvp">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-moonlight-100 mb-4">
            RSVP
          </h2>
          <p className="text-moonlight-300 text-lg max-w-2xl mx-auto">
            Please let us know if you'll be joining us for our special day
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-navy-800 bg-opacity-40 p-8 md:p-12 rounded-lg backdrop-blur-sm border border-galaxy-400 border-opacity-20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-moonlight-200 text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <SafeIcon icon={FiUser} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-champagne-300 w-5 h-5" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-navy-700 bg-opacity-50 border border-galaxy-400 border-opacity-30 rounded-lg text-moonlight-100 placeholder-moonlight-400 focus:outline-none focus:border-champagne-300 focus:ring-2 focus:ring-champagne-300 focus:ring-opacity-20 transition-all duration-300"
                      placeholder="Enter your name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-moonlight-200 text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <SafeIcon icon={FiMail} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-champagne-300 w-5 h-5" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-navy-700 bg-opacity-50 border border-galaxy-400 border-opacity-30 rounded-lg text-moonlight-100 placeholder-moonlight-400 focus:outline-none focus:border-champagne-300 focus:ring-2 focus:ring-champagne-300 focus:ring-opacity-20 transition-all duration-300"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-moonlight-200 text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <SafeIcon icon={FiPhone} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-champagne-300 w-5 h-5" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 bg-navy-700 bg-opacity-50 border border-galaxy-400 border-opacity-30 rounded-lg text-moonlight-100 placeholder-moonlight-400 focus:outline-none focus:border-champagne-300 focus:ring-2 focus:ring-champagne-300 focus:ring-opacity-20 transition-all duration-300"
                      placeholder="Enter your phone"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-moonlight-200 text-sm font-medium mb-2">
                    Number of Guests *
                  </label>
                  <div className="relative">
                    <SafeIcon icon={FiUsers} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-champagne-300 w-5 h-5" />
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-navy-700 bg-opacity-50 border border-galaxy-400 border-opacity-30 rounded-lg text-moonlight-100 focus:outline-none focus:border-champagne-300 focus:ring-2 focus:ring-champagne-300 focus:ring-opacity-20 transition-all duration-300"
                    >
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-moonlight-200 text-sm font-medium mb-4">
                  Will you be attending? *
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label className="flex items-center p-4 bg-navy-700 bg-opacity-30 rounded-lg border border-galaxy-400 border-opacity-20 cursor-pointer hover:border-champagne-300 hover:border-opacity-40 transition-all duration-300">
                    <input
                      type="radio"
                      name="attendance"
                      value="yes"
                      checked={formData.attendance === 'yes'}
                      onChange={handleChange}
                      className="mr-3 text-champagne-300"
                    />
                    <span className="text-moonlight-200">Yes, I'll be there!</span>
                  </label>
                  <label className="flex items-center p-4 bg-navy-700 bg-opacity-30 rounded-lg border border-galaxy-400 border-opacity-20 cursor-pointer hover:border-champagne-300 hover:border-opacity-40 transition-all duration-300">
                    <input
                      type="radio"
                      name="attendance"
                      value="no"
                      checked={formData.attendance === 'no'}
                      onChange={handleChange}
                      className="mr-3 text-champagne-300"
                    />
                    <span className="text-moonlight-200">Sorry, can't make it</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-moonlight-200 text-sm font-medium mb-2">
                  Dietary Restrictions
                </label>
                <input
                  type="text"
                  name="dietary"
                  value={formData.dietary}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-navy-700 bg-opacity-50 border border-galaxy-400 border-opacity-30 rounded-lg text-moonlight-100 placeholder-moonlight-400 focus:outline-none focus:border-champagne-300 focus:ring-2 focus:ring-champagne-300 focus:ring-opacity-20 transition-all duration-300"
                  placeholder="Any dietary restrictions or allergies?"
                />
              </div>

              <div>
                <label className="block text-moonlight-200 text-sm font-medium mb-2">
                  Special Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 bg-navy-700 bg-opacity-50 border border-galaxy-400 border-opacity-30 rounded-lg text-moonlight-100 placeholder-moonlight-400 focus:outline-none focus:border-champagne-300 focus:ring-2 focus:ring-champagne-300 focus:ring-opacity-20 transition-all duration-300 resize-none"
                  placeholder="Share a special message or memory with us..."
                />
              </div>

              <div className="text-center">
                <motion.button
                  type="submit"
                  className="px-12 py-4 bg-champagne-300 text-navy-900 font-semibold rounded-full hover:bg-champagne-200 transition-all duration-300 animate-glow"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send RSVP
                </motion.button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RSVPSection;