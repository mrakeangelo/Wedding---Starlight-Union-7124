import React from 'react';
import { motion } from 'framer-motion';
import { useWedding } from '../../contexts/WeddingContext';

const WeddingParty = () => {
  const { weddingData } = useWedding();

  const weddingParty = [
    {
      name: "Sarah Johnson",
      role: "Maid of Honor",
      bio: "Best friend since college",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      role: "Best Man",
      bio: "Brother and best friend",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Emily Davis",
      role: "Bridesmaid",
      bio: "Childhood friend",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "James Wilson",
      role: "Groomsman",
      bio: "College roommate",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Lisa Anderson",
      role: "Bridesmaid",
      bio: "Work colleague turned friend",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "David Brown",
      role: "Groomsman",
      bio: "Adventure buddy",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face"
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
            Our Wedding Party
          </h2>
          <p className="text-moonlight-300 text-lg max-w-2xl mx-auto">
            The special people who will stand by our side as we say "I do"
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {weddingParty.map((person, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-navy-800 bg-opacity-40 p-6 rounded-lg backdrop-blur-sm border border-galaxy-400 border-opacity-20 hover:border-champagne-300 hover:border-opacity-40 transition-all duration-300">
                <div className="relative mb-4 overflow-hidden rounded-lg">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent opacity-60" />
                  
                  {/* Glow effect on hover */}
                  <motion.div
                    className="absolute inset-0 bg-champagne-300 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                    whileHover={{ opacity: 0.1 }}
                  />
                </div>
                
                <div className="text-center">
                  <h3 className="font-serif text-xl text-moonlight-100 mb-1">
                    {person.name}
                  </h3>
                  <p className="text-champagne-300 font-medium mb-2">
                    {person.role}
                  </p>
                  <p className="text-moonlight-400 text-sm">
                    {person.bio}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeddingParty;