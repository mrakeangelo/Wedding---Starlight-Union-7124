import React from 'react';
import { motion } from 'framer-motion';

const StorySection = () => {
  return (
    <section className="py-24 px-4 relative">
      {/* Moonlight effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-galaxy-400 via-opacity-10 to-transparent" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-moonlight-100 mb-6">
            The Night We Met
          </h2>
          <div className="w-24 h-px bg-champagne-300 mx-auto mb-8" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-navy-800 bg-opacity-30 p-8 md:p-12 rounded-lg backdrop-blur-sm border border-galaxy-400 border-opacity-20"
        >
          <div className="prose prose-lg max-w-none">
            <p className="text-moonlight-200 leading-relaxed text-lg mb-6 font-light">
              It was a crisp autumn evening when fate decided to intervene. The coffee shop was bustling with the usual crowd, but somehow, across the room, our eyes met. Time seemed to stand still, and in that moment, we both knew something extraordinary was about to begin.
            </p>
            
            <p className="text-moonlight-200 leading-relaxed text-lg mb-6 font-light">
              What started as a simple conversation about our favorite books turned into hours of laughter, shared dreams, and the realization that we had found our person. The stars had aligned perfectly that night, bringing together two souls destined to become one.
            </p>

            <p className="text-moonlight-200 leading-relaxed text-lg font-light">
              Now, as we prepare to say "I do" under the same stars that witnessed our first meeting, we're reminded that the best love stories aren't just written in books—they're lived, breathed, and celebrated with the people who matter most.
            </p>
          </div>

          <motion.div
            className="mt-8 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-champagne-300 rounded-full animate-twinkle" />
              <div className="w-1 h-1 bg-galaxy-400 rounded-full animate-twinkle delay-100" />
              <div className="w-2 h-2 bg-champagne-300 rounded-full animate-twinkle delay-200" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default StorySection;