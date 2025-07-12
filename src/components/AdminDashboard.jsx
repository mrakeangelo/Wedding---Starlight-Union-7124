import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { supabase } from '../lib/supabase';

const { FiUser, FiMail, FiLock, FiEye, FiEyeOff, FiSettings, FiUsers, FiHeart, FiStar } = FiIcons;

const AdminDashboard = ({ session }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: loginForm.email,
        password: loginForm.password,
      });
      
      if (error) throw error;
    } catch (error) {
      console.error('Login error:', error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  if (!session) {
    return (
      <div className="min-h-screen bg-navy-900 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-md w-full"
        >
          <div className="bg-navy-800 bg-opacity-50 p-8 rounded-lg backdrop-blur-sm border border-galaxy-400 border-opacity-20">
            <div className="text-center mb-8">
              <SafeIcon icon={FiHeart} className="w-12 h-12 text-champagne-300 mx-auto mb-4" />
              <h1 className="font-serif text-3xl text-moonlight-100 mb-2">
                Admin Dashboard
              </h1>
              <p className="text-moonlight-300">
                Manage your wedding website
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-moonlight-200 text-sm font-medium mb-2">
                  Email
                </label>
                <div className="relative">
                  <SafeIcon icon={FiMail} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-champagne-300 w-5 h-5" />
                  <input
                    type="email"
                    value={loginForm.email}
                    onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                    required
                    className="w-full pl-10 pr-4 py-3 bg-navy-700 bg-opacity-50 border border-galaxy-400 border-opacity-30 rounded-lg text-moonlight-100 placeholder-moonlight-400 focus:outline-none focus:border-champagne-300 focus:ring-2 focus:ring-champagne-300 focus:ring-opacity-20 transition-all duration-300"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label className="block text-moonlight-200 text-sm font-medium mb-2">
                  Password
                </label>
                <div className="relative">
                  <SafeIcon icon={FiLock} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-champagne-300 w-5 h-5" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={loginForm.password}
                    onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                    required
                    className="w-full pl-10 pr-12 py-3 bg-navy-700 bg-opacity-50 border border-galaxy-400 border-opacity-30 rounded-lg text-moonlight-100 placeholder-moonlight-400 focus:outline-none focus:border-champagne-300 focus:ring-2 focus:ring-champagne-300 focus:ring-opacity-20 transition-all duration-300"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-moonlight-400 hover:text-champagne-300 transition-colors"
                  >
                    <SafeIcon icon={showPassword ? FiEyeOff : FiEye} className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-champagne-300 text-navy-900 font-semibold rounded-lg hover:bg-champagne-200 transition-colors disabled:opacity-50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {loading ? 'Signing In...' : 'Sign In'}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-navy-900">
      {/* Header */}
      <div className="bg-navy-800 bg-opacity-50 border-b border-galaxy-400 border-opacity-20 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <SafeIcon icon={FiStar} className="w-8 h-8 text-champagne-300" />
            <h1 className="font-serif text-2xl text-moonlight-100">
              Starlight Union Admin
            </h1>
          </div>
          <button
            onClick={handleLogout}
            className="px-4 py-2 text-moonlight-300 hover:text-moonlight-100 transition-colors"
          >
            Sign Out
          </button>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-navy-800 bg-opacity-30 min-h-screen p-6">
          <nav className="space-y-2">
            {[
              { id: 'overview', label: 'Overview', icon: FiStar },
              { id: 'rsvps', label: 'RSVPs', icon: FiUsers },
              { id: 'settings', label: 'Settings', icon: FiSettings },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === item.id
                    ? 'bg-champagne-300 bg-opacity-20 text-champagne-300'
                    : 'text-moonlight-300 hover:bg-navy-700 hover:bg-opacity-50'
                }`}
              >
                <SafeIcon icon={item.icon} className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {activeTab === 'overview' && (
            <div>
              <h2 className="font-serif text-3xl text-moonlight-100 mb-8">
                Dashboard Overview
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-navy-800 bg-opacity-40 p-6 rounded-lg backdrop-blur-sm border border-galaxy-400 border-opacity-20">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-moonlight-300 text-sm">Total RSVPs</p>
                      <p className="text-2xl font-bold text-champagne-300">24</p>
                    </div>
                    <SafeIcon icon={FiUsers} className="w-8 h-8 text-champagne-300" />
                  </div>
                </div>
                
                <div className="bg-navy-800 bg-opacity-40 p-6 rounded-lg backdrop-blur-sm border border-galaxy-400 border-opacity-20">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-moonlight-300 text-sm">Attending</p>
                      <p className="text-2xl font-bold text-green-400">18</p>
                    </div>
                    <SafeIcon icon={FiHeart} className="w-8 h-8 text-green-400" />
                  </div>
                </div>
                
                <div className="bg-navy-800 bg-opacity-40 p-6 rounded-lg backdrop-blur-sm border border-galaxy-400 border-opacity-20">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-moonlight-300 text-sm">Guestbook Messages</p>
                      <p className="text-2xl font-bold text-galaxy-400">12</p>
                    </div>
                    <SafeIcon icon={FiStar} className="w-8 h-8 text-galaxy-400" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'rsvps' && (
            <div>
              <h2 className="font-serif text-3xl text-moonlight-100 mb-8">
                RSVP Management
              </h2>
              
              <div className="bg-navy-800 bg-opacity-40 rounded-lg backdrop-blur-sm border border-galaxy-400 border-opacity-20">
                <div className="p-6">
                  <p className="text-moonlight-300">
                    RSVP management features coming soon...
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div>
              <h2 className="font-serif text-3xl text-moonlight-100 mb-8">
                Website Settings
              </h2>
              
              <div className="bg-navy-800 bg-opacity-40 rounded-lg backdrop-blur-sm border border-galaxy-400 border-opacity-20">
                <div className="p-6">
                  <p className="text-moonlight-300">
                    Settings panel coming soon...
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;