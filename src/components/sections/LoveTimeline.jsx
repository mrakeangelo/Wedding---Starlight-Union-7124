import React from 'react';
import { motion } from 'framer-motion';
import { useWedding } from '../../contexts/WeddingContext';

const LoveTimeline = () => {
  const { weddingData } = useWedding();

  const timelineEvents = [
    {
      date: "First Meeting",
      title: "When Stars Aligned",
      description: "Our paths crossed for the first time, and something magical happened.",
      constellation: "constellation-1"
    },
    {
      date: "First Date",
      title: "Coffee & Conversations",
      description: "Hours felt like minutes as we discovered our shared dreams.",
      constellation: "constellation-2"
    },
    {
      date: "The Proposal",
      title: "Under Moonlight",
      description: "A perfect moment that changed everything forever.",
      constellation: "constellation-3"
    },
    {
      date: "Our Wedding",
      title: "Starlight Union",
      description: "The beginning of our greatest adventure together.",
      constellation: "constellation-4"
    }
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
            Our Love Story
          </h2>
          <p className="text-moonlight-300 text-lg max-w-2xl mx-auto">
            Every great love story is written in the stars. Here's ours.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-champagne-300 via-galaxy-400 to-champagne-300 opacity-50" />

          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0 ? 'justify-start' : 'justify-end'
              }`}
            >
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                <div className="bg-navy-800 bg-opacity-50 p-6 rounded-lg backdrop-blur-sm border border-galaxy-400 border-opacity-20">
                  <div className="text-champagne-300 text-sm font-medium mb-2">
                    {event.date}
                  </div>
                  <h3 className="font-serif text-2xl text-moonlight-100 mb-3">
                    {event.title}
                  </h3>
                  <p className="text-moonlight-300 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>

              {/* Constellation node */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-champagne-300 rounded-full border-4 border-navy-900 z-10">
                <motion.div
                  className="absolute inset-0 bg-champagne-300 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [1, 0.5, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoveTimeline;