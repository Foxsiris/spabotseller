import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Основные плавающие элементы */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-purple-500/40 to-pink-500/40 rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{
          y: [0, 40, 0],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute top-40 right-20 w-48 h-48 bg-gradient-to-r from-pink-500/40 to-orange-500/40 rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{
          y: [0, -50, 0],
          x: [0, 40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-40 left-20 w-80 h-80 bg-gradient-to-r from-orange-500/40 to-red-500/40 rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
        className="absolute bottom-20 right-10 w-56 h-56 bg-gradient-to-r from-purple-500/40 to-indigo-500/40 rounded-full blur-3xl"
      />

      {/* Центральные вращающиеся элементы */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/3 left-1/3 w-96 h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
          delay: 5
        }}
        className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-gradient-to-r from-pink-500/30 to-orange-500/30 rounded-full blur-3xl"
      />

      {/* Дополнительные мелкие элементы */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 rounded-full blur-2xl"
      />
      
      <motion.div
        animate={{
          y: [0, 25, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute top-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-indigo-400/30 to-blue-400/30 rounded-full blur-2xl"
      />
      
      <motion.div
        animate={{
          y: [0, -15, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
        className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-gradient-to-r from-cyan-400/30 to-blue-400/30 rounded-full blur-2xl"
      />

      {/* Градиентный оверлей для лучшего контраста */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-blue-900/30 to-cyan-900/50" />
    </div>
  );
};

export default AnimatedBackground;
