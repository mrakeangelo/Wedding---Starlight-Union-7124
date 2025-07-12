import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import { useWedding } from '../../contexts/WeddingContext';

const { FiCalendar, FiMapPin, FiClock, FiUsers } = FiIcons;

const WeddingDetails = () => {
  const { weddingData } = useWedding();

  const details = [
    {
      icon: FiCalendar,
      title: "Date & Time",
      info: weddingData.date,
      subInfo: weddingData.time,
    },
    {
      icon: FiMapPin,
      title: "Venue",
      info: weddingData.venue.name,
      subInfo: weddingData.venue.address,
    },
    {
      icon: FiUsers,
      title: "Dress Code",
      info: "Black Tie Optional",
      subInfo: "Elegant evening attire",
    },
    {
      icon: FiClock,
      title: "Reception",
      info: "Following Ceremony",
      subInfo: "Dinner & Dancing",
    },
  ];

  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-moonlight-100 mb-4">
            Wedding Details
          </h2>
          <p className="text-moonlight-300 text-lg max-w-2xl mx-auto">
            All the important information for our special day
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {details.map((detail, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-navy-800 bg-opacity-40 p-6 rounded-lg backdrop-blur-sm border border-galaxy-400 border-opacity-20 hover:border-champagne-300 hover:border-opacity-40 transition-all duration-300 h-full">
                <div className="flex flex-col items-center text-center">
                  <motion.div
                    className="w-12 h-12 bg-champagne-300 bg-opacity-20 rounded-full flex items-center justify-center mb-4 group-hover:bg-opacity-30 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <SafeIcon 
                      icon={detail.icon} 
                      className="w-6 h-6 text-champagne-300" 
                    />
                  </motion.div>
                  
                  <h3 className="font-serif text-xl text-moonlight-100 mb-2">
                    {detail.title}
                  </h3>
                  
                  <p className="text-moonlight-200 font-medium mb-1">
                    {detail.info}
                  </p>
                  
                  <p className="text-moonlight-400 text-sm">
                    {detail.subInfo}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <div className="bg-navy-800 bg-opacity-40 p-8 rounded-lg backdrop-blur-sm border border-galaxy-400 border-opacity-20">
            <h3 className="font-serif text-2xl text-moonlight-100 mb-6 text-center">
              Venue Location
            </h3>
            
            <div className="aspect-video bg-navy-700 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <SafeIcon icon={FiMapPin} className="w-12 h-12 text-champagne-300 mx-auto mb-4" />
                <p className="text-moonlight-300 text-lg">
                  Interactive Map Coming Soon
                </p>
                <p className="text-moonlight-400 text-sm mt-2">
                  {weddingData.venue.address}
                </p>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <motion.button
                className="px-6 py-3 bg-champagne-300 text-navy-900 font-medium rounded-full hover:bg-champagne-200 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Directions
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WeddingDetails;