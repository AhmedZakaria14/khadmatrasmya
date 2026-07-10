'use client';

import { motion, AnimatePresence } from 'motion/react';
import { Phone, MessageCircle, ChevronUp } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function FloatingContact() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-center gap-3" dir="ltr">
      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            onClick={scrollToTop}
            className="w-12 h-12 bg-white text-primary-990 border border-gray-200 shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer group"
            title="رجوع لأعلى الصفحة"
          >
            <ChevronUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform text-primary-900" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Direct Phone Call Button */}
      <motion.a
        href="tel:+966574135600"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-primary-900 text-white shadow-lg flex items-center justify-center hover:bg-primary-950 transition-colors border border-primary-800 relative group"
        title="اتصل بنا الآن"
      >
        <span className="absolute right-full mr-3 bg-primary-950 text-white text-xs font-bold py-1.5 px-3 whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
          اتصال مباشر
        </span>
        <Phone className="w-6 h-6 animate-swing" />
      </motion.a>

      {/* Dynamic WhatsApp Button */}
      <motion.a
        href="https://wa.me/966574135600"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-[#25D366] text-white shadow-lg flex items-center justify-center hover:bg-[#20ba5a] transition-colors relative group"
        title="تواصل معنا عبر واتساب"
      >
        {/* Radar subtle pulse background */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none"></span>
        <span className="absolute right-full mr-3 bg-primary-950 text-white text-xs font-bold py-1.5 px-3 whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
          تواصل عبر واتساب
        </span>
        {/* Custom beautiful WhatsApp icon design using high contrast styling */}
        <MessageCircle className="w-7 h-7 fill-white text-[#25D366]" />
      </motion.a>
    </div>
  );
}
