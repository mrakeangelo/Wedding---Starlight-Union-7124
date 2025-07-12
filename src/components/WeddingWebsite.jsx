import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import HeroSection from './sections/HeroSection';
import LoveTimeline from './sections/LoveTimeline';
import StorySection from './sections/StorySection';
import WeddingDetails from './sections/WeddingDetails';
import WeddingParty from './sections/WeddingParty';
import Gallery from './sections/Gallery';
import RSVPSection from './sections/RSVPSection';
import Guestbook from './sections/Guestbook';
import Footer from './sections/Footer';
import FloatingRSVP from './FloatingRSVP';
import Starfield from './Starfield';
import CountdownOverlay from './CountdownOverlay';
import { useWedding } from '../contexts/WeddingContext';

const WeddingWebsite = () => {
  const { weddingData, loading } = useWedding();
  const [showCountdown, setShowCountdown] = useState(false);

  useEffect(() => {
    // Show countdown overlay every 30 seconds
    const interval = setInterval(() => {
      setShowCountdown(true);
      setTimeout(() => setShowCountdown(false), 8000);
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-navy-900 flex items-center justify-center">
        <div className="text-champagne-300 text-xl font-serif">Loading...</div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-navy-900 overflow-x-hidden">
      <Starfield />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >
        <HeroSection />
        <LoveTimeline />
        <StorySection />
        <WeddingDetails />
        <WeddingParty />
        <Gallery />
        <RSVPSection />
        <Guestbook />
        <Footer />
      </motion.div>

      <FloatingRSVP />
      
      {showCountdown && (
        <CountdownOverlay onClose={() => setShowCountdown(false)} />
      )}
    </div>
  );
};

export default WeddingWebsite;