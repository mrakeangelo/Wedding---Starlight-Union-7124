import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiChevronLeft, FiChevronRight } = FiIcons;

const Gallery = () => {
  const scrollRef = useRef(null);
  const { scrollXProgress } = useScroll({ container: scrollRef });

  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
      caption: "Engagement photoshoot"
    },
    {
      url: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=800&h=600&fit=crop",
      caption: "Our first vacation together"
    },
    {
      url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=600&fit=crop",
      caption: "Date night adventures"
    },
    {
      url: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&h=600&fit=crop",
      caption: "Weekend getaway"
    },
    {
      url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&h=600&fit=crop",
      caption: "Cozy moments at home"
    },
    {
      url: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800&h=600&fit=crop",
      caption: "Celebrating milestones"
    }
  ];

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

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
            Our Journey
          </h2>
          <p className="text-moonlight-300 text-lg max-w-2xl mx-auto">
            Captured moments from our love story
          </p>
        </motion.div>

        <div className="relative">
          {/* Navigation buttons */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-navy-800 bg-opacity-80 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all duration-300 backdrop-blur-sm"
          >
            <SafeIcon icon={FiChevronLeft} className="w-6 h-6 text-champagne-300" />
          </button>
          
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-navy-800 bg-opacity-80 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all duration-300 backdrop-blur-sm"
          >
            <SafeIcon icon={FiChevronRight} className="w-6 h-6 text-champagne-300" />
          </button>

          {/* Horizontal scroll gallery */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto scrollbar-hide space-x-6 pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex-shrink-0 w-80 group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={image.url}
                    alt={image.caption}
                    className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent opacity-60" />
                  
                  {/* Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-moonlight-200 font-medium">
                      {image.caption}
                    </p>
                  </div>
                  
                  {/* Glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-champagne-300 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                    whileHover={{ opacity: 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Progress bar */}
          <div className="mt-8 flex justify-center">
            <div className="w-32 h-1 bg-navy-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-champagne-300 rounded-full"
                style={{ scaleX: scrollXProgress }}
                transformOrigin="left"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;