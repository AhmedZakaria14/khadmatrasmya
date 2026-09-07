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
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-5 left-4 sm:bottom-7 sm:left-7 z-50 flex flex-col items-center gap-3" dir="ltr">
      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            onClick={scrollToTop}
            className="w-11 h-11 rounded-full bg-white border border-primary-100 shadow-lg flex items-center justify-center hover:bg-primary-50 transition-colors cursor-pointer group"
            title="رجوع لأعلى الصفحة"
          >
            <ChevronUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform text-primary-900" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Direct Phone Call Button */}
      <motion.a
        href="tel:+966547147102"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-12 h-12 rounded-full bg-primary-600 text-white shadow-lg flex items-center justify-center hover:bg-primary-700 transition-colors relative group"
        title="اتصل بنا الآن"
      >
        <span className="absolute right-full mr-3 bg-primary-950 text-white text-xs font-bold py-1.5 px-3 whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
          اتصال مباشر
        </span>
        <Phone className="w-6 h-6 animate-swing" />
      </motion.a>

      {/* Dynamic WhatsApp Button */}
      <motion.a
        href="https://wa.me/966547147102"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-16 h-16 rounded-full bg-[#25D366] text-white shadow-[0_12px_32px_rgba(37,211,102,.38)] ring-4 ring-white flex items-center justify-center hover:bg-[#20ba5a] transition-colors relative group"
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
