import React, { createContext, useContext, useState, useEffect } from 'react';

const WeddingContext = createContext();

export const useWedding = () => {
  const context = useContext(WeddingContext);
  if (!context) {
    throw new Error('useWedding must be used within a WeddingProvider');
  }
  return context;
};

export const WeddingProvider = ({ children }) => {
  const [weddingData, setWeddingData] = useState({
    bride: { name: 'Isabella' },
    groom: { name: 'Alexander' },
    date: 'June 15, 2024',
    time: '6:00 PM',
    venue: {
      name: 'The Grand Ballroom',
      address: '123 Starlight Avenue, City, State 12345'
    },
    story: {
      meeting: 'It was a crisp autumn evening...',
      proposal: 'Under the moonlight...',
    }
  });
  
  const [loading, setLoading] = useState(false);

  const updateWeddingData = (newData) => {
    setWeddingData(prev => ({ ...prev, ...newData }));
  };

  const value = {
    weddingData,
    updateWeddingData,
    loading,
    setLoading
  };

  return (
    <WeddingContext.Provider value={value}>
      {children}
    </WeddingContext.Provider>
  );
};