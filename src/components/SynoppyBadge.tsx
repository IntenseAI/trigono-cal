'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function SynoppyBadge() {
  return (
    <motion.div
      className="fixed bottom-4 right-4 z-40"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.5 }}
    >
      <Link
        href="https://synoppy.com"
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer"
      >
        <motion.div
          className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium text-xs rounded-full px-3 py-1.5 shadow-md backdrop-blur-sm cursor-pointer"
          whileHover={{
            scale: 1.02,
            boxShadow: '0 8px 20px rgba(139, 92, 246, 0.4)'
          }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2 }}
        >
          <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center flex-shrink-0 p-0.5">
            <img
              src="https://raw.githubusercontent.com/Saanora-Tech/synoppy-logo/refs/heads/main/logo.png"
              alt="Synoppy"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="whitespace-nowrap">Build With Synoppy</span>
        </motion.div>
      </Link>
    </motion.div>
  );
}