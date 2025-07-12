import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import WeddingWebsite from './components/WeddingWebsite';
import AdminDashboard from './components/AdminDashboard';
import LoadingScreen from './components/LoadingScreen';
import { supabase } from './lib/supabase';
import { WeddingProvider } from './contexts/WeddingContext';

function App() {
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState(null);

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <WeddingProvider>
      <Router>
        <div className="min-h-screen bg-cosmic">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<WeddingWebsite />} />
              <Route 
                path="/admin" 
                element={
                  session ? (
                    <AdminDashboard session={session} />
                  ) : (
                    <AdminDashboard />
                  )
                } 
              />
            </Routes>
          </AnimatePresence>
        </div>
      </Router>
    </WeddingProvider>
  );
}

export default App;