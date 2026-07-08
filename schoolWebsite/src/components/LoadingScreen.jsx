import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-emerald-50 via-white to-emerald-50 flex items-center justify-center z-50">
      <div className="text-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 120 }}
          className="mb-6"
        >
          <img
            src="/logo_ujjwala.jpg"
            alt="Ujjwala Global Academy"
            className="w-24 h-24 rounded-full object-cover shadow-xl mx-auto border-4 border-emerald-200"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-2xl font-bold text-gray-800 mb-1"
        >
          Ujjwala Global Academy
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-emerald-600 font-medium mb-8"
        >
          Excellence in Education with Higher Power
        </motion.p>

        <div className="w-48 h-1.5 bg-gray-200 rounded-full mx-auto overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ delay: 0.7, duration: 1.3, ease: 'easeInOut' }}
            className="h-full bg-gradient-to-r from-emerald-500 to-emerald-700 rounded-full"
          />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="text-sm text-gray-400 mt-4"
        >
          Loading...
        </motion.p>
      </div>
    </div>
  );
};

export default LoadingScreen;
